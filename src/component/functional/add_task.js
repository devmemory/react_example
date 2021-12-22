import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title){
            alert('Please add a task')
            return
        }

        onAdd({title, day, reminder})

        setTitle('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="form-add-task" onSubmit={onSubmit}>
            <div className="form-control-task">
                <label>Task</label>
                <input type="title" placeholder="Add Task" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-control-task">
                <label>Day & Time</label>
                <input type="title" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control-task form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save Task" className="btn-task-block"/>
        </form>
    )
}

export default AddTask
