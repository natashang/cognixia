/* Get a single user */
// API request: https://reqres.in/api/users/2

const axios = require('axios')

// lets it select by itself, based on what the server is giving
// resp for response
const fn = (req, res) => {
    axios.get('http://reqres.in/api/users/' + req.params.userid)
        
    .then((resp) => {
        res.send(resp.data)
    }).catch((err) => {
        res.send(err)
    })
    }

module.exports = fn