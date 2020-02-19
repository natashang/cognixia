/* Get a list of users */
// API request: https://reqres.in/api/users?page=2 

const axios = require('axios')

const fn = (req, res) => {
    axios
    .get('https://reqres.in/api/users?page=' + req.params.pagenum)

    .then((resp) => {
        res.send(resp.data)
    })
    
    .catch((err) => {
        res.send(err)
    })
}

module.exports = fn