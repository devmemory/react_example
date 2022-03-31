const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./server/db/task.db')

const create = () => {
    db.run('create table if not exists task(id integer, title text, day text, reminder integer, hide integer)', (err) => {
        if (err) {
            console.log(err.message)
            return
        }

        console.log('db created')
        // for(let i = 1 ; i < 45 ; i++){
        //     insert({ id: i, title: `Test - ${i}`, day: `test date - ${i}`, reminder: Math.random() < 0.4, hide: Math.random() < 0.2 })
        // }
    })
}

create()

const insert = async (task) => {
    return new Promise((res, rej) => {
        db.run(`insert into task(id,title,day,reminder,hide) values (?,?,?,?,?)`, [task.id, task.title, task.day, task.reminder ? 1 : 0, task.hide ? 1 : 0], (err) => {
            if (err) {
                console.log(err.message)
                return rej(err)
            }

            console.log(`insert task(${JSON.stringify(task)})`)
            return res(true)
        })
    })
}

const getLength = async () => {
    return new Promise((res, rej) => {
        return db.get('select count(*) from task where hide = 0', (err, row) => {
            if (err) {
                console.log(err.message)
                return rej(err)
            }

            console.log(`length : ${row['count(*)']}`)
            return res(row['count(*)'])
        })
    })
}

const getLastIndex = async () => {
    return new Promise((res, rej) => {
        return db.get('select count(*) from task', (err, row) => {
            if (err) {
                console.log(err.message)
                return rej(err)
            }

            console.log(`length : ${row['count(*)']}`)
            return res(row['count(*)'])
        })
    })
}

const getAllTasks = async () => {
    return new Promise((res, rej) => {
        return db.all('select * from task where hide = 0 order by id desc', (err, rows) => {
            if (err) {
                console.log(err.message)
                return rej(err)
            }

            console.log(`get all result : ${rows?.length}`)

            rows.forEach((e, i) => {
                rows[i].reminder = e.reminder === 1
                rows[i].hide = e.hide === 1
            })

            return res(rows)
        })
    })
}

const getSingleTask = async (id) => {
    return new Promise((res, rej) => {
        const sql = `select * from task where id = ${id} and hide = 0`

        return db.get(sql, (err, row) => {
            if (err) {
                console.log(err.message)
                return rej(err)
            }

            if (row) {
                row.reminder = row?.reminder === 1
                row.hide = row?.hide === 1
            }

            console.log(`get single result : ${JSON.stringify(row)}`)
            return res(row)
        })
    })
}

const getRange = async (offset, limit) => {
    return new Promise((res, rej) => {
        const sql = `select * from task where hide = 0 order by id desc limit ${limit} offset ${offset}`

        return db.all(sql, (err, rows) => {
            if (err) {
                console.log(err.message)
                return rej(err)
            }

            rows.forEach((e, i) => {
                rows[i].reminder = e.reminder === 1
                rows[i].hide = e.hide === 1
            })

            console.log(`get range result : ${rows.length}`)
            return res(rows)
        })
    })
}

const updateTask = async (key, value, index) => {
    return new Promise((res, rej) => {
        const sql = `update task set ${key} = ${value ? 1 : 0} where id = ${index}`
        return db.run(sql, (err) => {
            if (err) {
                console.log(err.message)
                return rej(err)
            }


            console.log(`update at ${index} => ${key} : ${value}`)
            return res(true)
        })
    })
}

module.exports = {
    create,
    insert,
    getAllTasks,
    updateTask,
    getRange,
    getSingleTask,
    getLength,
    getLastIndex
}