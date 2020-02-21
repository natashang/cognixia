const bcrypt = require('bcrypt')

/**
 * Creates a user in the database of users
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {*} model 
 */
const saltRounds = 10
const fn = (req, res, model, callback) => {
    bcrypt
    .hash(
        req.body.password, 
        saltRounds)
        .then( (hash) => {
            return model.create({
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,       
                name: req.body.name
            })
        })
        .catch( (err) => {
            if (err) {
                res.send(err)
                throw err
            }
        })  
}
module.exports = fn