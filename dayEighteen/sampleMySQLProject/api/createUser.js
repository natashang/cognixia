const fn = (req, res, connection) => {

    const query = `
        INSERT INTO USER (name, email, address)
        VALUES ("${req.body.name}", "${req.body.email}", "${req.body.address}") 
   `
   connection
   .query(
       query,
        (error, results) => {
            if (error) throw error
        
            console.log("1 query inserted: " + results)
            res.send("1 query inserted")
        }
    )
}

module.exports = fn