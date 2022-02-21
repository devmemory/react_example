const express = require('express')

const app = express()

const cors = require('cors')
const api = require('./routes/task/index')
const image = require('./routes/image/index')

require('./db/db_helper')

const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', api)
app.use('/image', image)

const server = app.listen(port, () => {
    console.log(`start! express server on port ${port}`)
})

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        credentials: true
    }
})

io.on('connection', (socket) => {
    console.log('connected id :', socket.id)

    socket.on('message', (data) => {
        console.log('message',{data})

        socket.broadcast.emit('message', data)
        // io.emit('message', data)
    })
})