/* Get a single resource */
// API request: https://reqres.in/api/unknown/2

/*
    example
    {
        "data": {
            "id": 2,
            "name": "fuchsia rose",
            "year": 2001,
            "color": "#C74375",
            "pantone_value": "17-2031"
        }
    }
*/

const axios = require('axios')

const fn = (req, res) => {
    axios
    .get('http://reqres.in/api/unknown/' + req.params.userid)
        
    .then((resp) => {
        res.send(resp.data)
    }).
    
    catch((err) => {
        res.send(err)
    })
}

module.exports = fn