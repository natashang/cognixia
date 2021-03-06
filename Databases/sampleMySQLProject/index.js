const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = 3000

const createUser = require('./api/createUser')
const getUsers = require('./api/getUsers')
const getUser = require('./api/getUser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sample_app',
    password: '1234'
})

connection.connect();

// Route definition
app.post('/user', (req, res) => createUser(req, res, connection))
app.get('/users', (req, res) => getUsers(req, res, connection))
app.get('/user', (req, res) => getUser(req, res, connection))

process.on('SIGTERM', () => {
    app.close( () => connection.end() )
    setTimeout( () => {
        console.error("Couldn't close connections in time, forcefully shutting down")
        process.exit(1)
    }, 30*1000 )
})

app.listen(
    port, 
    () => console.log(`Example app listening on port ${port}!`)
)   
