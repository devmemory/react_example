import { Component } from "react"
import Header from '../../component/class/header'
import Tasks from '../../component/class/tasks'
import AddTask from '../../component/class/add_task'
import { API } from '../../api/common'
import { Center, PageButton } from "../../style/styled"
import { MoonLoader } from "react-spinners"

class ClassApp extends Component {
    constructor() {
        super()

        this.state = {
            showAddTask: false,
            tasks: [],
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
                totalCount: result.data.totalCount,
                currentPage: result.data.currentPage,
                lastPage: Math.ceil(result.data.totalCount / 12)
            }

            this.setState({ tasks: result.data.list })
        } else {
            alert(result.data)
        }
    }

    async pagination(index) {
        if (index <= this.page.lastPage) {
            const result = await this.api.getTasks(index, 12)

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
            this.setState({ tasks: [result.data, ...this.state.tasks] })
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
        if (this.state.tasks.length === 0) {
            return (
                <Center height='100vh'>
                    <MoonLoader />
                </Center>
            )
        }

        return (
            <div className="container">
                <Header
                    onAdd={() => this.setState({ showAddTask: !this.state.showAddTask })}
                    showAdd={this.state.showAddTask} />

                {this.state.showAddTask && <AddTask onAdd={this.addTask} />}

                {this.state.tasks.length > 0 ?
                    <Tasks tasks={this.state.tasks} onDelete={this.deleteTask} onToggle={this.toggleReminder} /> : 'No tasks to show'}

                {Array.from({ length: this.page.lastPage }, (_, i) => (
                    <PageButton key={i} background={this.page.currentPage === i + 1 ? '#bebebe' : 'grey'} onClick={() => this.pagination(i + 1)}>
                        {i + 1}
                    </PageButton>
                ))}
            </div>
        )
    }
}

export default ClassApp;