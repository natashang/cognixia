const http = require('http')

// lets it select by itself, based on what the server is giving
// https://reqres.in/api/users?page=2 
// resp for response
const fn = (req, res) => {
    http.get('//reqres.in/api/users/2' + req.params.userid, 
            (resp) => {
                res.send(resp)
    })
}

module.exports = fn