const fn = (req, res, connection) => {

    const query = `
        SELECT * FROM USER
    `
   connection
   .query(
        query,
        (err, result) => {
        if (err) throw(err)
        
            /* from mongofiles:
              console.log("1 query inserted: " + results)
                res.send("1 query inserted")
            */

        console.log("Users found, mongo result: " + result)        
        // tests in the browser, http://localhost:3000/getusers 
        res.send(result) 
    })
}

module.exports = fn