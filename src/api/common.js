import {tryFetch} from '../util/util'
const baseURL = "http://localhost:8080"

// 성공: code: 1, data : object
// 실패: code: -1, data : 실패 message
class API {
    getTasks = async (id) => {
        let url = `${baseURL}/task`
        if (id != null) {
            url += `/${id}`
        }
        const res = await tryFetch(url)

        return {
            data: res.data,
            code: res.code
        }
    }

    // task
    addTask = async (task) => {
        const res = await tryFetch(`${baseURL}/task/add`, {
                method: "POST",
                headers: { "content-type": "application/json"},
                body: JSON.stringify(task)})

        return {
            data: res.data,
            code: res.code 
        }
    }

    deleteTask = async (id) => {
        const res = await tryFetch(`${baseURL}/task/delete`,{
                method: "POST",
                headers: { "content-type": "application/json"},
                body: JSON.stringify({id: id})
            })

        return {
            data: res.data,
            code: res.code
        }
    }

    toggleReminder = async (id) => {
        const res = await tryFetch(`${baseURL}/task/toggle`,{
                method: "POST",
                headers: { "content-type": "application/json"},
                body: JSON.stringify({id: id})
            })

        return {
            data: res.data,
            code: res.code
        }
    }
}

export { API }