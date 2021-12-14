const express = require('express');
const router = express.Router();
const url = require('url')

let tasks = require('./tasks')

const validateData = (data, type) => {
    if (typeof data != type || typeof data == 'undefined' || data === '') {
        console.log('Failed 1', {
            1: typeof data != type,
            2: typeof data == 'undefined',
            3: data === ''
        })
        return false
    }

    if (typeof data == 'object' && Object.keys(data).length == 0) {
        console.log('Failed 2', {
            1: typeof data == 'object',
            2: Object.keys(data).length == 0
        })
        return false
    }

    return true
}

router.get('/task', (req, res) => {
    console.log('get all tasks', req)

    const pageNo = req.query.pageNo
    const pageSize = req.query.pageSize ?? 12

    const list = tasks.filter((element) => !element.hide)

    if (!pageNo) {
        res.send({ data: list, code: 1 })
    } else {

        // 전체 페이지수가 요청수보다 적을 때
        if (pageSize > list.length) {
            res.send({ data: list, code: 1 })
            return
        }

        const size = pageSize * pageNo - 1

        const start = (pageNo - 1) * pageSize
        const end = size > list.length ? list.length : size

        console.log('page : ', { start, end })

        res.send({ data: { list: list.slice(start, end), currentPage: Number(pageNo), totalCount: tasks.length }, code: 1 })
    }
})

router.get('/task/:no', (req, res) => {
    const task = tasks.find((element) => element.id == req.params.no)

    console.log('get task', task)

    if (task) {
        res.send({ data: task, code: 1 })
    } else {
        res.send({ data: "No data", code: -1 })
    }
})

router.post('/task/add', (req, res) => {
    const data = req.body

    console.log('task add', data)

    if (validateData(data.text, 'string') && validateData(data.day, "string") && validateData(data.reminder, "boolean")) {
        const newTest = { id: tasks.length + 1, ...data }

        tasks.push(newTest)

        res.send({ data: newTest, code: 1 })
    } else {
        res.send({ data: `Request failed. (${JSON.stringify(data)})`, code: -1 })
    }
})

router.post('/task/delete', (req, res) => {
    const data = req.body
    console.log('task delete', data)

    const task = tasks.find((element) => element.id == data.id)

    if (validateData(task, 'object')) {
        task.hide = true
        res.send({ data: task.id, code: 1 })
    } else {
        res.send({ data: `Request failed. (${JSON.stringify(data)})`, code: -1 })
    }
})

router.post('/task/toggle', (req, res) => {
    const data = req.body
    console.log('task toggle', data)

    const task = tasks.find((element) => element.id == data.id)

    if (validateData(task, 'object')) {
        task.reminder = !task.reminder
        res.send({ data: task.id, code: 1 })
    } else {
        res.send({ data: `Request failed. (${JSON.stringify(data)})`, code: -1 })
    }
})

module.exports = router