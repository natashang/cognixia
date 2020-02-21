const bcrypt = require('bcrypt')

/**
 * 
 * @param {express.request} req 
 * @param {express response} res 
 * @param {a Sequelize model (a representation) of the database users (or user?)} model 
 * @param {*} callback 
 */const fn = (req, res, model, callback) => {
    model.findOne({
        where: {
            email: req.body.email
        }
    }).then( dbres => {
        if (!dbres) {
            callback('error')
        }
        else {
            let userResponse = dbres.toJSON();
            bcrypt
            .compare(req.body.password, userResponse.password)
            .then((result) => {
                if (result === true) {
                    sessionStorage.authenticated = true
                    callbacak(userResponse)
                }
                else {
                    session.authenticated = false
                    callback('noauth')
                }
            })
                
            .catch((err) => {
                session.authenticated = false
                callback('error')
            })
        }    
    })
    .catch( (err) => {
        if (err) {
            res.send(err)
            throw err
        }
    })
}

module.exports = fn