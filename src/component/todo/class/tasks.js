import { Component } from 'react'
import Task from './task'

class Tasks extends Component {
    render() {
        const { tasks, onDelete, onToggle } = this.props
        return (
            <div>
                {tasks.map((task) => (
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
                ))}
            </div>
        )
    }
}

export default Tasks