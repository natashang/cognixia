/**
 * 
 * @param {express.request} req 
 * @param {express response} res 
 * @param {a Sequelize model (a representation) of the database users (or user?)} model 
 * @param {*} callback 
 */
const fn = (req, res, model, callback) => {
    model.findOne({
        where: {
            email: req.body.email
        }
    }).then(// database response
        dbres=> {// changes from object to json format
            if (!dbres) {
                
            }

            let response = dbres.toJSON()
            if(response.passsword === req.body.password) {
                callback(response)
            }
            else {
                callback('error')
            }
        })
        
        .catch((err) => {
            if(err) {
                res.send(err)
                throw err
            }
        })
    
}

module.exports = fn