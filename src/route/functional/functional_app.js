import { useState, useEffect } from "react"
import Header from '../../component/functional/header'
import Tasks from '../../component/functional/tasks'
import AddTask from '../../component/functional/add_task'
import { API } from '../../api/common'
import { Center, PageButton } from '../../style/styled'
import { MoonLoader } from 'react-spinners'

let page = {}

function FunctionalApp() {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])

    const api = new API()

    const initTask = async () => {
        const result = await api.getTasks(1, 12)

        if (result.code === 1) {
            page = {
                totalCount: result.data.totalCount,
                currentPage: result.data.currentPage,
                lastPage: Math.ceil(result.data.totalCount / 12)
            }

            setTasks(result.data.list)
        } else {
            alert(result.data)
        }
    }

    const pagination = async (index) => {
        if (index <= page.lastPage) {
            const result = await api.getTasks(index, 12)

            if (result.code === 1) {
                page.currentPage = result.data.currentPage

                setTasks(result.data.list)
            } else {
                alert(result.data)
            }
        } else {
            alert('Last Page!')
        }
    }

    useEffect(async () => {
        await initTask()
    }, [])

    const addTask = async (task) => {
        const result = await api.addTask(task)

        if (result.code === 1) {
            setTasks([result.data, ...tasks])
        } else {
            alert(result.data)
        }
    }

    const deleteTask = async (id) => {
        const result = await api.deleteTask(id)

        if (result.code === 1) {
            const task = tasks.find((element) => element.id === result.data)
            task.hide = true

            setTasks(tasks.filter((element) => !element.hide))
        } else {
            alert(result.data)
        }
    }

    const toggleReminder = async (id) => {
        const result = await api.toggleReminder(id)

        if (result.code == 1) {
            const task = tasks.find((element) => element.id == result.data)
            task.reminder = !task.reminder

            setTasks([...tasks])
        } else {
            alert(result.data)
        }
    }

    if (tasks.length === 0) {
        return (
            <Center height='100vh'>
                <MoonLoader />
            </Center>
        )
    }

    return (
        <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

            {showAddTask && <AddTask onAdd={addTask} />}

            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}

            {Array.from({ length: page.lastPage ?? 0 }, (_, i) => (
                <PageButton key={i} background={page.currentPage === i + 1 ? '#bebebe' : 'grey'} onClick={() => pagination(i + 1)}>
                    {i + 1}
                </PageButton>
            ))}
        </div>
    );
}

export default FunctionalApp;