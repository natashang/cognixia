/**
 * Query module for getting a user within the system
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {mysql.connection} connection 
 */
const fn = (req, res, connection) => {

    const input = req._parsedUrl.query
    //console.log(req._parsedUrl)
    let where = ``

    if (input.includes('name') || input.includes('address') || input.includes('email') ){
        let equalsIndex = input.indexOf('=')
        let param = input.substring(0, equalsIndex)
        let arg = "'"+input.substring(equalsIndex+1)+"'"
        where = param + " LIKE "+ arg
    }
    const query = `
    SELECT * FROM USER WHERE ${where};
`;
console.log(query);
    

/*
// same as 
let andstring =''
if (nidex <= (queryArray.length - 1)) {
    andstring = ' AND '
}
else {
    anstring = ''
}


    (queryArray && queryArray.length) > 0 
    ?
    queryArray.map((item, index) => {
        const andString = index <= (queryArray.length - 1) 
                                    ? ' AND ' 
                                    :
                                    where += `${item} = '${red.body[item]}'`
    })
    : 
    ''
*/

    connection
   .query(
        query,
        (err, result) => {
        if (err) throw(err)
    
        // tests in the browser, http://localhost:3000/getusers 
        res.send(result) 
    })
}

module.exports = fn