// Example: http://localhost:3000/user?name=Minnie 
// have to type in user?name=NAME
// also, /user?address=Disneyland --> returns all users with a Disneyland address

const fn = (req, res, db) => {

    let type = req.query    
    
    if (type) {
        db
        .collection("users")
        .find(type)
        .toArray( 
            (err, result) => {
            if (err) {
                res.send(err)
                throw(err)
            }
            console.log("Documents found, mongo result: " + result)
            res.send(result)
        })
    }

    // status codes are more for the person consuming than developing
    else 
        res.send(400)
}

module.exports = fn