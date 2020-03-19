const express = require('express')
const path = require('path')

//const { html } = require('./html-view.js')
//import {html} from './html-view.js'
const {html} = require('./html-view.js')


const app = express()
const port = 3000

// set configuration details
app.set("view engine", "pug")
app.set("views", path.join(__dirname, "view"));

// setting 
// if '/' is the path, it will print 'Hello World!'
// browser address: http://localhost:3000/
app.get('/', (req, res) => 
    res.render('example'))

// browser address: http://localhost:3000/route1
app.get('/route1', (req, res) => 
    res.send('Hello Route 1!'))

// by using ':', Express will know to take :parameter as data to use
// browser address: http://localhost:3000/param/123
app.get('/param/:val', (req, res) => 
    res.send(html(req.params)))


app.listen(port, 
    () => console.log(`Example app listening on port ${port}!`))