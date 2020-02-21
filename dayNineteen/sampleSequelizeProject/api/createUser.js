/**
 * Creates a user in the database of users
 * @param {Express.Request} req 
 * @param {Express.Response} res 
 * @param {*} model 
 */
const fn = (req, res, model) => {
    return model.create({
        username: req.body.username,
        password: req.body.password,       
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    })
}

module.exports = fn