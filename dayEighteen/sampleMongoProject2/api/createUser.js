
// business logic
const fn = (req, res, db) => {

    // enforcing DB model this way instead of INSERTs,
    // for security and enforcing your own schema purposes
   const myobj = {
       email: req.body.email,
       name: req.body.name,
       address: req.body.address
   }

   // insert a document into a collection
   // if the collection does not exist, insertOne() method creates a collection
   db.collection("users").insertOne(
       myobj,
       (err, result) => {
            if (err) {
                res.send(err)
                throw err
           }

           console.log("1 document inserted, mongo result: " + result)
           res.send("1 document inserted")
       }
   )
}

module.exports = fn