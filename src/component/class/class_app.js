import { Component } from "react"
import Header from './header'
import Tasks from './tasks'
import AddTask from './add_task'

class ClassApp extends Component {
    constructor() {
        super()

        this.state = {
            showAddTask: false,
            tasks: [
                {
                    id: 1,
                    text: 'text1',
                    day: 'Feb 5th at 2:30pm',
                    reminder: true
                },
                {
                    id: 2,
                    text: 'text2',
                    day: 'Feb 6th at 1:30pm',
                    reminder: true
                },
                {
                    id: 3,
                    text: 'text3',
                    day: 'Feb 5th at 2:30pm',
                    reminder: false
                },
            ]
        }

        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.toggleReminder = this.toggleReminder.bind(this)
    }

    addTask(task) {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        this.setState({ tasks: [...this.state.tasks, newTask] })
    }

    deleteTask(id) {
        this.setState({ tasks: this.state.tasks.filter((task) => task.id !== id) })
    }

    toggleReminder(id) {
        this.setState({ tasks: this.state.tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task) })
    }

    render() {
        return (
            <div className="container">
                <Header 
                onAdd={() => this.setState({ showAddTask: !this.state.showAddTask })} 
                showAdd={this.state.showAddTask} />
                {this.state.showAddTask && <AddTask onAdd={this.addTask} />}
                {this.state.tasks.length > 0 ? <Tasks tasks={this.state.tasks} onDelete={this.deleteTask} onToggle={this.toggleReminder} /> : 'No tasks to show'}
            </div>
        )
    }
}

export default ClassApp;