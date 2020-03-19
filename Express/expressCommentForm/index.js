// import block -- for all of the dependencies and module
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const fs = require('fs')
const bodyParser = require('body-parser')


//const html  = require('./appView/formview.js')


const app = express()
const port = 3000

//app.use(express.urlencoded())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

/*
app.set("view engine", "html")
app.set("views", path.join(__dirname + "appView"))
app.use(express.static(path.join(__dirname, 'public')))
*/

app.get('/', (req, res) => { 
    console.log("dirname: ", __dirname)
    //    res.sendFile(path.join(__dirname+'/appView/formview.js'));
    res.sendFile(path.join(__dirname+'/appView/form.html'));

})

app.get('/history', (req, res) => {
    console.log("at history")
})

app.post('/history', (req, res) => {
    console.log('oi')
    console.log(req.body.emailfield)
    console.log(req.body.commentfield)
})

app.listen(
    port,
    () => console.log(`App listening on port ${port}`)
)