import { useEffect, useState, useCallback } from "react"
import { Spinner } from "react-bootstrap"
import API from 'api/common'
import AddTask from 'component/todo/functional/add_task'
import Header from 'component/todo/functional/header'
import PaginationButton from "component/todo/functional/pagination_button"
import Tasks from 'component/todo/functional/tasks'
import { Center } from 'style/styled'
import 'style/task_style.css'

let page = {}

function FunctionalApp() {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])

    const [isLoaded, setIsLoaded] = useState(false)

    const api = new API()

    const pageSize = 3

    const initTask = async () => {
        const result = await api.getTasks(1, pageSize)

        if (result.code === 1) {
            page = {
                totalCount: result.data.totalCount,
                currentPage: result.data.currentPage,
                lastPage: Math.ceil(result.data.totalCount / pageSize)
            }

            setTasks(result.data.list)
            setIsLoaded(true)
        } else {
            alert(result.data)
        }
    }

    const pagination = async (index) => {
        if (index <= page.lastPage) {
            const result = await api.getTasks(index, pageSize)

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

    useEffect(() => {
        initTask()
    }, [])

    const addTask = async (task) => {
        const result = await api.addTask(task)

        if (result.code === 1) {
            if (tasks) {
                setTasks([result.data, ...tasks])
            } else {
                setTasks([result.data])
            }
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

        if (result.code === 1) {
            const task = tasks.find((element) => element.id === result.data)
            task.reminder = !task.reminder

            setTasks([...tasks])
        } else {
            alert(result.data)
        }
    }

    if (!isLoaded) {
        return (
            <Center height='100vh'>
                <Spinner animation='grow' />
            </Center>
        )
    }

    return (
        <div className="div-container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

            {showAddTask && <AddTask onAdd={addTask} />}

            {(tasks?.length ?? -1) > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}

            <PaginationButton page={page} pagination={pagination} />
        </div>
    );
}

export default FunctionalApp;