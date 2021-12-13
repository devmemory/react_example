import { useState, useEffect } from "react"
import { API } from "../../api/common"

const withTaskList = (WrappedComponent) => {
    const Component = () => {
        const api = new API()
        const [tasks, setTasks] = useState([])
    
        useEffect( async () => {
            const res = await api.getTasks();
            setTasks(res.data)
        }, [])

        const props = {tasks}

        return <WrappedComponent {...props} />
    }
    return Component
}

export default withTaskList