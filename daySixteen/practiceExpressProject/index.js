const express = require('express')
const path = require('path')

const { html } = require('./view/view3.js')

const app = express()
const port = 3000

/*
    Challenge: use the Express template engine,
    3 views, either pug or a template string as an external 
    module, a parameterized route, and use the value from
    that route in a view
*/

app.set("view engine", "pug")
app.set("views", path.join(__dirname, "view"))

// pug
app.get('/', (req, res) => 
    res.render('view1'))

app.get('/view2', (req, res) => 
    res.render('view2'))

// parameterized route value in a view
app.get('/view3/param/:val', (req, res) => 
    res.send(html(req.params)))

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))