import { Component } from "react"
import Header from '../../component/class/header'
import Tasks from '../../component/class/tasks'
import AddTask from '../../component/class/add_task'
import { API } from '../../api/common'
import { Center } from "../../style/styled"
import '../../style/task_style.css'
import { Spinner } from "react-bootstrap"
import PaginationButton from "../../component/class/pagination_button"

class ClassApp extends Component {
    constructor() {
        super()

        this.state = {
            showAddTask: false,
            tasks: [],
            isLoaded: false
        }

        this.page = {}

        this.pageSize = 3

        this.api = new API()

        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.toggleReminder = this.toggleReminder.bind(this)
        this.pagination = this.pagination.bind(this)
    }

    async initTask() {
        // this.api.getTasksAjax()

        const result = await this.api.getTasks(1, this.pageSize)
        if (result.code === 1) {
            this.page = {
                totalCount: result.data.totalCount,
                currentPage: result.data.currentPage,
                lastPage: Math.ceil(result.data.totalCount / this.pageSize)
            }

            this.setState({ tasks: result.data.list, isLoaded: true })
        } else {
            alert(result.data)
        }
    }

    async pagination(index) {
        if (index <= this.page.lastPage) {
            const result = await this.api.getTasks(index, this.pageSize)

            if (result.code === 1) {
                this.page.currentPage = result.data.currentPage

                this.setState({ tasks: result.data.list })
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
            if (this.state.tasks) {
                this.setState({ tasks: [result.data, ...this.state.tasks] })
            } else {
                this.setState({ tasks: [result.data] })
            }
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
        if (!this.state.isLoaded) {
            return (
                <Center height='100vh'>
                    <Spinner animation='grow' />
                </Center>
            )
        }

        return (
            <div className="div-container">
                <Header
                    onAdd={() => this.setState({ showAddTask: !this.state.showAddTask })}
                    showAdd={this.state.showAddTask} />

                {this.state.showAddTask && <AddTask onAdd={this.addTask} />}

                {(this.state.tasks?.length ?? -1) > 0 ?
                    <Tasks tasks={this.state.tasks} onDelete={this.deleteTask} onToggle={this.toggleReminder} /> : 'No tasks to show'}

                <PaginationButton page={this.page} pagination={this.pagination} />
            </div>
        )
    }
}

export default ClassApp;