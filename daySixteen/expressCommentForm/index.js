const express = require('express')
const path = require('path')
const app = express()
const port = 3000

var fs = require('fs')

const { html } = require('./appView/view')


app.set("view engine", "pug")
app.set("views", path.join(__dirname, "appView"))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {

  /*  
fs.readFile('./filesystemtext.txt', (err,data) => {
    process.stdout.write(data)
})
*/
    fs.readFile('./form.html', (error, data) => {
        /*
        if (error) {
            console.log("houston we got a problem")
            res.writeHead(500)
            res.end()
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(content, 'utf-8')
        }
        */
       res.writeHead(200, {'Content-Type': 'text/html'})
    })
})

app.get('/history', (req, res) => {
    //res.render('history');
    console.log("at history")
})

app.post('/history', (req, res) => {
    console.log('oi')
//    console.log(req.body.commentfield)
    //var comment = req.body.commentfield
   //console.log("the comment is: %s", comment)
})

//app.post('/histor')

app.listen(
    port,
    () => console.log(`App listening on port ${port}`)
)
