const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./server/db/task.db')

const create = () => {
    db.run('create table if not exists task(id integer, title text, day text, reminder integer, hide integer)', (err) => {
        if (err) {
            console.log(err.message)
        }

        console.log('db created')
    })
}

create()

const insert = async (task) => {
    return new Promise((res, rej) => {
        db.run(`insert into task(id,title,day,reminder,hide) values (?,?,?,?,?)`, [task.id, task.title, task.day, task.reminder ? 1 : 0, task.hide ? 1 : 0], (err) => {
            if (err) {
                console.log(err.message)
                return res(err)
            }

            console.log(`insert task(${JSON.stringify(task)})`)
            return res(true)
        })
    })
}

const getAllData = async () => {
    return new Promise((res, rej) => {
        return db.all('select * from task', (err, rows) => {
            if (err) {
                console.log(err.message)
                return rej(err)
            }

            console.log(`result : ${JSON.stringify(rows)}`)
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
// setTimeout(() => updateTask('hide', false, 3), 4000)

// setTimeout(() => insert({ id: 1, title: 'Title - 1', day: 'Dec 17', reminder: false, hide: false }), 4000)

// setTimeout(() => insert({ id: 2, title: 'Title - 2', day: 'Dec 19', reminder: true, hide: false }), 4000)

// setTimeout(() => getAllData(), 6000)

module.exports = {
    create,
    insert,
    getAllData,
    updateTask
}