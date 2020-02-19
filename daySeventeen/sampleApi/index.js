/* exercises from https://reqres.in/ */

const express = require('express')
const bodyParser = require('body-parser')
const jwt        = require('express-jwt')

const app = express()
const port = 3000

//const scaffold = require('/api/scaffold')
const scaffold       = require('./api/scaffold.js')
const multipleUsers  = require('./api/multipleUsers.js')
const singleUser     = require('./api/singleUser.js') 
const sUserNotFound  = require('./api/singleUserNotFound.js')
const singleResource = require('./api/singleResource.js')
const createUser     = require('./api/createUser.js')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// Route Definitions
app.get('/', scaffold)
app.get('/user/:userid', singleUser)
app.get('/users/page=:pagenum', multipleUsers)
app.get('/users/:userid', sUserNotFound)
//app.get('/unknown/:userid', singleResource)
app.post('/createuser/', createUser)

// how to add a jwt route
/*
app.get('/protected',
    jwt({secret: 'shhhhhared-secret'}),
    (req, res) => {
        if (!req.user.admin) return 
    }
)
*/

// routes put after the wildcard will not get accessed
// wildcard
// app.get('*', error404)



app.listen(
    port,
    () => console.log(`Example app listening on port ${port}`)
)