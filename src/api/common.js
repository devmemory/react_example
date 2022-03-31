import { response } from 'util/util'
import Api from './api'
const imageURL = 'image'

// 성공: code: 1, data : object
// 실패: code: -1, data : 실패 message
class CommonApi extends Api {
    getTasks = async (pageNo, pageSize) => {
        let url = `/api/task`

        if (pageNo) {
            url += `?pageNo=${pageNo}`
        }

        if (pageSize) {
            url += `&pageSize=${pageSize}`
        }

        console.log(url)

        const res = await super.get(url)

        return {
            data: res.data,
            code: res.code
        }
    }

    getSingleTask = async (id) => {
        const res = await super.get(`/api/task/${id}`)

        return {
            data: res.data,
            code: res.code
        }
    }

    // task
    addTask = async (task) => {
        const res = await super.post(`/api/task/add`, task)

        return {
            data: res.data,
            code: res.code
        }
    }

    deleteTask = async (id) => {
        const res = await super.post(`/api/task/delete`, { id })

        return {
            data: res.data,
            code: res.code
        }
    }

    toggleReminder = async (id) => {
        const res = await super.post(`/api/task/toggle`, { id })

        return {
            data: res.data,
            code: res.code
        }
    }

    getImageList = async () => {
        const res = await response(`${imageURL}/get-imglist`)

        return {
            code: res.code,
            data: res.data
        }
    }

    uploadImage = async (file, type) => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('type', type)

        const res = await response(`${imageURL}/upload`, 'POST', formData, { 'Content-Type': 'multipart/form-data;' })

        return {
            code: res.code,
            data: res.data
        }
    }
}

export default CommonApi