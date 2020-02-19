/* Get a single user, not found */
// API request: https://reqres.in/api/users/23

const axios = require('axios')

const fn = (req, res) => {
    axios
    .get('http://reqres.in/api/users/' + req.params.userid)
        
        .then((resp) => {
            res.send(resp.data)
        }).catch((err) => {
            console.log(err.response)
            res.send(err.response.status)
        })
    }

module.exports = fn
