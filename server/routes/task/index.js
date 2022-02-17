const express = require('express');
const router = express.Router();

const db = require('../../db/db_helper')

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

    let totalCount

    console.log('start')

    try {
        totalCount = await db.getLength() ?? 0
    } catch (error) {
        return res.send({ data: error, code: -1 })
    }

    if (!pageNo) {
        try {
            list = await db.getAllTasks()
        } catch (error) {
            return res.send({ data: error, code: -1 })
        }

        res.send({ data: list, code: 1, currentPage: -1, totalCount: totalCount })
    } else {
        // 전체 페이지수가 요청수보다 적을 때
        if (pageSize > totalCount) {
            try {
                list = await db.getAllTasks()
            } catch (error) {
                return res.send({ data: error, code: -1 })
            }

            return res.send({ data: { list: list, currentPage: Number(pageNo), totalCount: totalCount }, code: 1 })
        }

        try {
            list = await db.getRange((pageNo - 1) * pageSize, pageSize)
        } catch (error) {
            return res.send({ data: error, code: -1 })
        }

        res.send({ data: { list: list, currentPage: Number(pageNo), totalCount: totalCount }, code: 1 })
    }
})

router.get('/task/:no', async (req, res) => {
    let task

    try {
        task = await db.getSingleTask(req.params.no)
    } catch (error) {
        return res.send({ data: error, code: -1 })
    }

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

    if (validateData(data.title, 'string') && validateData(data.day, 'string') && validateData(data.reminder, 'boolean')) {
        let id

        try {
            id = await db.getLength() ?? 1
        } catch (error) {
            return res.send({ data: error, code: -1 })
        }

        const newTest = { id: id + 1, ...data }

        let isDone

        try {
            isDone = await db.insert(newTest)
        } catch (error) {
            return res.send({ data: error, code: -1 })
        }

        if (isDone) {
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

    let task
    
    try {
        task = await db.getSingleTask(data.id)
    } catch (error) {
        return res.send({ data: error, code: -1 })
    }

    if (validateData(task, 'object')) {
        let isDone

        try {
            isDone = await db.updateTask('hide', true, task.id)
        } catch (error) {
            return res.send({ data: error, code: -1 })
        }

        if (isDone) {
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

    let task
    
    try {
        task = await db.getSingleTask(data.id)
    } catch (error) {
        return res.send({ data: error, code: -1 })
    }

    if (validateData(task, 'object')) {
        let isDone

        try {
            isDone = await db.updateTask('reminder', !task.reminder, task.id)
        } catch (error) {
            return res.send({ data: error, code: -1 })
        }

        if (isDone) {
            res.send({ data: task.id, code: 1 })
        } else {
            res.send({ data: `Request failed. (DB update failed)`, code: -1 })
        }
    } else {
        res.send({ data: `Request failed. (${JSON.stringify(data)})`, code: -1 })
    }
})

module.exports = router