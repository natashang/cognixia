const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const sequelize = require('./database')

const app = express()
const port = 3000

//routes
// in an MVC structure, think of the API routes as the controllers
const createUser = require('./api/createUser')
const authenticate = require('./api/authenticate')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'css')))

//models
const User = require('./models/user')

//Put routes here
//get
//console.log("dirname: " + __dirname)


app.get('./css/login.css', (req, res) => res.sendfile(__dirname + './css/login.css'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/homepage.html')))
app.get('/createUser', (req, res) => res.sendFile(path.join(__dirname + '/views/createUser.html')))
app.get('/login', (req, res) => res.sendFile(path.join(__dirname + '/views/login.html')))
app.get('/members', (req, res) => res.sendFile(path.join(__dirname + '/views/members.html')))

// post
app.post('/user', (req, res) => {
    createUser(req, res, User)
    .then(() => {
        res.sendFile(path.join(__dirname + '/views/members.html'))
    })
})

//api
app.post('/api/user', (req, res) => {
    createUser(req, res, User)
    .then(dbres => {
        console.log(dbres.toJSON())
        res.send(dbres.toJSON())
    }).catch((err) => {
        if(err){
            res.send(err)
        }
    })
})

//shutdown procedure code
process.on('SIGTERM', function() {
  app.close(() => {
      connection.end()
  })
  setTimeout( () => {
      console.error('couldnt close connections in time, forcefully shutting down')
      process.exit(1)
  }, 30*1000)
})

sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
})
//sequelize syncs the data
