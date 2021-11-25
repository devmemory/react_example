import { Component } from "react"

class AddTask extends Component {
    constructor(props) {
        super(props)

        console.log(this.props)

        this.state = {
            text: "",
            day: "",
            reminder: false
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
        e.preventDefault()

        if (this.state.text === "") {
            alert('Please add a task')
            return
        }

        this.props.onAdd({ text: this.state.text, day: this.state.day, reminder: this.state.reminder })

        this.setState({
            text: "",
            day: "",
            reminder: false
        })
    }

    render() {
        return (
            <form className="add-form" onSubmit={(e) => this.onSubmit(e)}>
                <div className="form-control">
                    <label>Task</label>
                    <input type="text" placeholder="Add Task" value={this.state.text} onChange={(e) => this.setState({text: e.target.value})} />
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
