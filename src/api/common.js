import { response, tryFetch } from '../util/util'
const baseURL = "api"

// 성공: code: 1, data : object
// 실패: code: -1, data : 실패 message
class API {
    getTasksAjax = (id) => {
        let req = new XMLHttpRequest()

        let url = `${baseURL}/task`
        if (id != null) {
            url += `/${id}`
        }

        // 내부 데이터에 따라서 별도 처리 필요..
        req.onreadystatechange = () => {
            if (req.readyState == XMLHttpRequest.DONE) {
                if (req.status == 200) {
                    console.log(req.response)
                } else {
                    console.log(`error', 'status code : ${req.status}`)
                }
            }
        }

        req.open('GET', url)
        req.send()
    }

    getTasks = async (pageNo, pageSize) => {
        let url = `${baseURL}/task`

        url += `?pageNo=${pageNo}`


        url += `&pageSize=${pageSize}`


        console.log(url)

        const res = await response(url)
        //await tryFetch(url)

        return {
            data: res.data,
            code: res.code
        }
    }

    getSingleTask = async (id) => {
        const res = await response(`${baseURL}/task/${id}`)

        return {
            data: res.data,
            code: res.code
        }
    }

    // task
    addTask = async (task) => {
        const res = await response(`${baseURL}/task/add`, 'POST', task)
        // await tryFetch(`${baseURL}/task/add`, {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(task)
        // })

        return {
            data: res.data,
            code: res.code
        }
    }

    deleteTask = async (id) => {
        const res = await response(`${baseURL}/task/delete`, 'POST', { id })
        // await tryFetch(`${baseURL}/task/delete`, {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify({ id: id })
        // })

        return {
            data: res.data,
            code: res.code
        }
    }

    toggleReminder = async (id) => {
        const res = await response(`${baseURL}/task/toggle`, 'POST', { id })
        // await tryFetch(`${baseURL}/task/toggle`, {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify({ id: id })
        // })

        return {
            data: res.data,
            code: res.code
        }
    }
}

export { API }