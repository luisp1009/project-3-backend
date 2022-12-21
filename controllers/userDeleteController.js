const User = require('../models/User.model')
const bcryptjs = require('bcryptjs')



const deleteUser = (req, res, next) => {
    User.findByIdAndDelete(req.params.id) 
        .then(deletedUser => {
            res.json(deletedUser)
        })
        .catch(err => res.send(err))
}




module.exports= {   
    deleteUser,
}