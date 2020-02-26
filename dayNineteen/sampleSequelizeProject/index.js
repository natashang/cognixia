const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const sequelize = require('./database')
const session = require('express-session')

const app = express()
const port = 3000

//routes
// in an MVC structure, think of the API routes as the controllers
const createUser = require('./api/createUser')
const authenticate = require('./api/authenticate')
app.use(session({secret: "Shh, it's a secret!"}))

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
app.get('/signin', (req, res) => res.sendFile(path.join(__dirname + '/views/signin.html')))
app.get('/members', (req, res) => {
    if (session.authenticated === true) 
        return res.sendFile(path.join(__dirname + '/views/members.html'))
    
    else 
        res.redirect(301, '/')
    
})

// post
app.post('/user', (req, res) => {
    createUser(req, res, User, () => {
        res.sendFile(path.join(__dirname + '/views/members.html'))
    })
})

app.post('/login'), (req, res) => {
    authenticate(req, res, User, session, (response) => {
        const authenticated = []

        if (response === 'error') {
            authenticated.push(response)
            res.status(500).sendFile(path.join(__dirname + '/views/login.html'))
        }
        else if(response === 'noauth') {
            res.status(401).sendFile(path.join(__dirname + '/views/login.html'))
        }
        else {
            //res.redirect(301, '/members')
            res.status(301).sendFile(path.join(__dirname + '/views/members.html'))
        }
    })
}

app.post('/logout', (req, res) => {
    session.authenticated = false
    res.redirect(301, '/')
})

//api
app.post('/api/user', (req, res) => {
    createUser(req, res, User, (response) => {
        res.send(response)
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

// maybe have this? //sequelize.sync().then(() => {
sequelize.sync({force: true}).then(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  })
  //sequelize syncs the data
  