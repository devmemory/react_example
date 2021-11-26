import { useState, useEffect } from "react"
import Header from './header'
import Tasks from './tasks'
import AddTask from './add_task'
import { API } from '../../api/common'

function FunctionalApp() {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([])

    const api = new API()

    const initTask = async () => {
        const result = await api.getTasks()

        if (result.code == 1) {
            setTasks(result.data)
        }
    }

    useEffect(async () => {
        await initTask()
    }, [])

    const addTask = async (task) => {
        const result = await api.addTask(task)

        if (result.code == 1) {
            setTasks([...tasks, result.data])
        } else {
            alert(result.data)
        }
    }

    const deleteTask = async (id) => {
        const result = await api.deleteTask(id)

        if (result.code == 1) {
            const task = tasks.find((element) => element.id == result.data)
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

            console.log(task)

            setTasks([...tasks])
        } else {
            alert(result.data)
        }
    }

    return (
        <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
        </div>
    );
}

export default FunctionalApp;