import withTaskList from "./with_task_list"

const TaskList = ({ tasks }) => {
    return (
        <>
            <ul>
                {tasks.map((e) => (<li key={e.id}>{e.text}</li>))}
            </ul>
        </>
    )
}

export default withTaskList(TaskList)