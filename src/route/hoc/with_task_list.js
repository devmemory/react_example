import { useState, useEffect } from "react"
import API from "api/common"

const withTaskList = (WrappedComponent) => {
    const Component = () => {
        const [tasks, setTasks] = useState([])

        useEffect(() => {
            async function fetchData() {
                const api = new API()
                const res = await api.getTasks();
                setTasks(res.data)
            }

            fetchData()
        }, [])

        const props = { tasks }

        return <WrappedComponent {...props} />
    }
    return Component
}

export default withTaskList