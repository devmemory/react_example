import { Component } from "react"
import Header from '../../component/class/header'
import Tasks from '../../component/class/tasks'
import AddTask from '../../component/class/add_task'
import { API } from '../../api/common'

class ClassApp extends Component {
    constructor() {
        super()

        this.state = {
            showAddTask: false,
            tasks: []
        }

        this.page = {}

        this.api = new API()

        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.toggleReminder = this.toggleReminder.bind(this)
        this.pagination = this.pagination.bind(this)
    }

    async initTask() {
        // this.api.getTasksAjax()

        const result = await this.api.getTasks(1, 12)
        if (result.code === 1) {
            this.page = {
                totalPage: result.data.totalPage,
                currentPage: result.data.currentPage,
                lastPage: Math.ceil(result.data.totalPage / 12)
            }

            this.setState({tasks: result.data.list})
        } else {
            alert(result.data)
        }
    }

    async pagination() {
        console.log(this.page.currentPage, this.page.lastPage)
        if (this.page.currentPage < this.page.lastPage) {
            const result = await this.api.getTasks(this.page.currentPage + 1,12)

            console.log(result)

            if (result.code === 1) {
                this.page.currentPage = result.data.currentPage

                this.setState({ tasks: [ ...this.state.tasks, ...result.data.list ] })
            } else {
                alert(result.data)
            }
        } else {
            alert('Last Page!')
        }
    }

    componentDidMount() {
        this.initTask()
    }

    async addTask(task) {
        const result = await this.api.addTask(task)
        if (result.code === 1) {
            this.setState({ tasks: [...this.state.tasks, result.data] })
        } else {
            alert(result.data)
        }
    }

    async deleteTask(id) {
        const result = await this.api.deleteTask(id)
        if (result.code === 1) {
            const task = this.state.tasks.find((element) => element.id === result.data)
            task.hide = true

            this.setState({ tasks: this.state.tasks.filter((element) => !element.hide) })
        } else {
            alert(result.data)
        }
    }

    async toggleReminder(id) {
        const result = await this.api.toggleReminder(id)
        if (result.code === 1) {
            const task = this.state.tasks.find((element) => element.id === result.data)
            task.reminder = !task.reminder

            this.setState({ tasks: this.state.tasks })
        } else {
            alert(result.data)
        }
    }

    render() {
        return (
            <div className="container">
                <Header
                    onAdd={() => this.setState({ showAddTask: !this.state.showAddTask })}
                    showAdd={this.state.showAddTask} />
                {this.state.showAddTask && <AddTask onAdd={this.addTask} />}
                {this.state.tasks.length > 0 ?
                    <Tasks tasks={this.state.tasks} onDelete={this.deleteTask} onToggle={this.toggleReminder} /> : 'No tasks to show'}
                <button onClick={this.pagination}>show more</button>
            </div>
        )
    }
}

export default ClassApp;