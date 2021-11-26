const baseURL = "http://localhost:8080"

// 성공: code: 1, data : object
// 실패: code: -1, data : 실패 message
class API {
    getTasks = async (id) => {
        let url = `${baseURL}/task`
        if (id != null) {
            url += `/${id}`
        }

        const res = await fetch(url)

        const result = await res.json()

        return {
            data: result.data,
            code: result.code
        }
    }

    // task
    addTask = async (task) => {
        const res = await fetch(`${baseURL}/task/add`, {
            method: "POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify(task)
        })

        const result = await res.json()

        return {
            data: result.data,
            code: result.code
        }
    }

    deleteTask = async (id) => {
        const res = await fetch(`${baseURL}/task/delete`,{
            method: "POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify({id: id})
        })
        
        const result = await res.json()

        return {
            data: result.data,
            code: result.code
        }
    }

    toggleReminder = async (id) => {
        const res = await fetch(`${baseURL}/task/toggle`,{
            method: "POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify({id: id})
        })
        
        const result = await res.json()

        return {
            data: result.data,
            code: result.code
        }
    }
}

export { API }