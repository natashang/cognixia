/**
 * Query module for retrieving all users in a system
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {mysql.Connection} connection 
 */
const fn = (req, res, connection) => {

    const query = `
        SELECT * FROM USER
    `
   connection
   .query(
        query,
        (err, result) => {
        if (err) throw(err)

        console.log("Users found, MySQL result: " + result)        
        // tests in the browser, http://localhost:3000/getusers 
        res.send(result) 
    })
}

module.exports = fn