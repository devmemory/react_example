import { Component } from "react"

class AddTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            day: "",
            reminder: false
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()

        if (this.state.title === "") {
            alert('Please add a task')
            return
        }

        this.props.onAdd({ title: this.state.title, day: this.state.day, reminder: this.state.reminder })

        this.setState({
            title: "",
            day: "",
            reminder: false
        })
    }

    render() {
        return (
            <form className="add-form" onSubmit={(e) => this.onSubmit(e)}>
                <div className="form-control">
                    <label>Task</label>
                    <input type="text" placeholder="Add Task" value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} />
                </div>
                <div className="form-control">
                    <label>Day & Time</label>
                    <input type="text" placeholder="Add Day & Time" value={this.state.day} onChange={(e) => this.setState({day: e.target.value})} />
                </div>
                <div className="form-control form-control-check">
                    <label>Set Reminder</label>
                    <input type="checkbox" value={this.state.reminder} checked={this.state.reminder} onChange={(e) => this.setState({reminder: e.currentTarget.checked})} />
                </div>

                <input type="submit" value="Save Task" className="btn btn-block" />
            </form>
        )
    }
}

export default AddTask
