const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./server/db/task.db')

const create = () => {
    db.run('create table if not exists task(id integer, title text, day text, reminder integer, hide integer)', (err) => {
        if (err) {
            console.log(err.message)
            return
        }

        console.log('db created')
    })
}

create()

const insert = (task) => {
    db.run(`insert into task(id,title,day,reminder,hide) values (?,?,?,?,?)`, [task.id, task.title, task.day, task.reminder ? 1 : 0, task.hide ? 1 : 0], (err) => {
        if (err) {
            console.log(err.message)
            return
        }

        console.log(`insert task(${JSON.stringify(task)})`)
    })
}

const getAllData = () => {
    // db.get('select * from task', (err, row) => {
    //     if (err) {
    //         console.log(err.message)
    //         return
    //     }

    //     console.log(`result : ${JSON.stringify(row)}`)
    // })
    db.all('select * from task', (err, rows) => {
        if (err) {
            console.log(err.message)
            return
        }

        console.log(`result : ${JSON.stringify(rows)}`)
    })
}

const updateTask = (key, value, index) => {
    const sql = `update task set ${key} = ${value ? 1 : 0} where id = ${index}`

    db.run(sql, (err) => {
        if (err) {
            console.log(err.message)
        }
        return
    })

    console.log(`update at ${index} => ${key} : ${value}`)
    // db.run(`update task set ${key} = (?) where id = (?)`,[key,value,index], (err) => {
    //     if(err){
    //         console.log(err.message)
    //         return
    //     }

    //     console.log(`update at ${index} => ${key} : ${value}`)
    // })
}

setTimeout(() => getAllData(), 2000)
// setTimeout(() => updateTask('reminder', false, 1), 4000)

// setTimeout(() => insert({ id: 1, title: 'Title - 1', day: 'Dec 17', reminder: false, hide: false }), 4000)

// setTimeout(() => insert({ id: 2, title: 'Title - 2', day: 'Dec 19', reminder: true, hide: false }), 4000)

// setTimeout(() => getAllData(), 6000)

module.exports = db