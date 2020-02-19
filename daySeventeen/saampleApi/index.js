const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const scaffold = require('/api/scaffold')
const singleUser = require('/api/singleUser')

// Route Definitions
app.get('/', scaffold)
app.get('/user/:userid', singleUser)
//

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.listen(
    port,
    () => console.log(`Example app listening on port ${port}`)
)