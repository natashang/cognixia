
const fn = (req, res, db) => {

   db.collection("users").find({}).toArray( function (err, result){
        if (err) {
            res.send(err)
            throw(err)
        }
        console.log("Documents found, mongo result: " + result)
        
        // tests in the browser, http://localhost:3000/getusers 
        res.send(result) 
    })
}

module.exports = fn

