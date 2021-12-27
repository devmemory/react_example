const express = require('express');
const router = express.Router();

const db = require('../db/db_helper')

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

router.get('/task', async (req, res) => {
    console.log('get all tasks')

    const pageNo = req.query.pageNo
    const pageSize = req.query.pageSize ?? 12

    let list

    const totalCount = await db.getLength() ?? 0

    if (!pageNo) {
        list = await db.getAllTasks()

        res.send({ data: list, code: 1, currentPage: -1, totalCount: totalCount })
    } else {

        // 전체 페이지수가 요청수보다 적을 때
        if (pageSize > totalCount) {
            list = await db.getAllTasks()

            res.send({ data: { list: list, currentPage: Number(pageNo), totalCount: totalCount }, code: 1 })
            return
        }

        // const start = (pageNo - 1) * pageSize + 1
        // const end = pageSize * pageNo

        // console.log('page : ', { start, end })

        list = await db.getRange((pageNo - 1) * pageSize, pageSize)

        res.send({ data: { list: list, currentPage: Number(pageNo), totalCount: totalCount }, code: 1 })
    }
})

router.get('/task/:no', async (req, res) => {
    const task = await db.getSingleTask(req.params.no)

    console.log('get task', task)

    if (task) {
        res.send({ data: task, code: 1 })
    } else {
        res.send({ data: "No data", code: -1 })
    }
})

router.post('/task/add', async (req, res) => {
    const data = req.body

    console.log('task add', data)

    if (validateData(data.title, 'string') && validateData(data.day, "string") && validateData(data.reminder, "boolean")) {
        const id = await db.getLength() ?? 1

        const newTest = { id: id + 1, ...data }

        if (await db.insert(newTest)) {

            res.send({ data: newTest, code: 1 })
        } else {
            res.send({ data: `Request failed. (DB insert failed)`, code: -1 })
        }
    } else {
        res.send({ data: `Request failed. (${JSON.stringify(data)})`, code: -1 })
    }
})

router.post('/task/delete', async (req, res) => {
    const data = req.body
    console.log('task delete', data)

    const task = await db.getSingleTask(data.id)

    if (validateData(task, 'object')) {
        if (await db.updateTask('hide', true, task.id)) {
            task.hide = true
            res.send({ data: task.id, code: 1 })
        } else {
            res.send({ data: `Request failed. (DB update failed)`, code: -1 })
        }
    } else {
        res.send({ data: `Request failed. (${JSON.stringify(data)})`, code: -1 })
    }
})

router.post('/task/toggle', async (req, res) => {
    const data = req.body
    console.log('task toggle', data)

    const task = await db.getSingleTask(data.id)

    if (validateData(task, 'object')) {
        if (await db.updateTask('reminder', !task.reminder, task.id)) {
            task.reminder = !task.reminder
            res.send({ data: task.id, code: 1 })
        } else {
            res.send({ data: `Request failed. (DB update failed)`, code: -1 })
        }
    } else {
        res.send({ data: `Request failed. (${JSON.stringify(data)})`, code: -1 })
    }
})

module.exports = router