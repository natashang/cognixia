const express = require('express')
const bodyParser = require('body-parser')
const mongo = require('mongodb')

const app = express()
const port = 3000

const createUser = require('./api/createUser')
const getUsers = require('./api/getUsers')
const getUser = require('./api/getUser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017/"

/*
    MongoClient.connect(url, callback(error param, db object param))    
    callback function – this will be called after executing this method. 
    The first parameter will contain the Error object if an error occured, or null otherwise
    While the second parameter will contain the initialized db object or null if an error occured.
*/
MongoClient.connect(
    url, 
    (err, database) => {

        if (err) throw err
        
        const db = database.db('test_database')

        // Route definition
        app.post('/user', (req, res) => createUser(req, res, db))
        app.get('/users', (req, res) => getUsers(req, res, db))
        app.get('/user', (req, res) => getUser(req, res, db))

        console.log("Database created!") 

        // Close the app when node is terminated with CTRL+C or other means
        process.on('SIGTERM', () => {
            app.close( () => db.close() )
            setTimeout( () => {
                console.error("Couldn't close connections in time, forcefully shutting down")
                process.exit(1)
            }, 30*1000 )
        })

        app.listen(
            port, 
            () => console.log(`Example app listening on port ${port}!`)
        )
        //db.close()
    }
);