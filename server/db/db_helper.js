const sqlite3 = require('sqlite3').verbose()

let db = new sqlite3.Database('./server/db/chinook.db', (error) => {
    if (error) {
        console.log(error.message)
        return
    }
    console.log('Connected to the chinook db')
})

const create = () => {
    db.run('create table if not exists task(id integer, text text,reminder integer, hide integer)')
}

create()

const getAll = () => {
    db.run('select * from task', (error) => {
        if (error) {
            console.log(error.message)
            return
        }
        console.log(`Get all`)
    })
}

const getRange = (start, end) => {
    db.run(`select * from task where id between ${start} and ${end}`, (error) => {
        if (error) {
            console.log(error.message)
            return
        }
        console.log(`Get between ${start} and ${end}`)
    })
}

const insert = (task) => {
    db.run.insert(`insert into task(id, text, reminder, hide) values(${task.id}, ${task.text}, ${task.day}, ${task.reminder ? 1 : 0}, ${task.hide ? 1 : 0})`, (error) => {
        if (error) {
            console.log(error.message)
            return
        }
        console.log(`Insert ${task}`)
    })
}

const update = (id, key, value) => {
    db.run(`UPDATE task set ${key} = ${value ? 1 : 0} where id = ${id}`, (error) => {
        if (error) {
            console.log(error.message)
            return
        }
        console.log(`Update ${{ id, key, value }}`)
    })
}

module.exports = {
    db,
    getAll,
    getRange,
    insert,
    update
}