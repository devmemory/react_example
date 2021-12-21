const express = require('express')

const app = express()

const cors = require('cors')
const router = require('./routes')

const db = require('./db/db_helper')

const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', router)

// 8000 포트로 서버 오픈
app.listen(port, () => {
    console.log(`start! express server on port ${port}`)
})