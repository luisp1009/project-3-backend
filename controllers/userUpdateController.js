const User = require('../models/User.model')
const bcryptjs = require('bcryptjs')



const updateUser = (req, res, next) => {
    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password ? bcryptjs.hashSync(req.body.password) : req.session
        
    }, { new : true } )
    .then(updatedUser => {
      console.log(req.body)
        res.json(updatedUser)
    })
    .catch(err => res.send(err))
}




module.exports= {   
    updateUser,
}



