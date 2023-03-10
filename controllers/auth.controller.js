const bcryptjs = require('bcryptjs')
const User = require('../models/User.model')
const jwt = require('jsonwebtoken')


const signupController = ( req, res, next) => {

    const { email, password, name } = req.body

    if(!email || !password || !name) {
return res.status(400).json({
    error: {
        message: 'Missing email, name or password'
    }
})
    }

   bcryptjs.hash(password, 10)
   .then(hashedPassword => {
    return User.create({
        email,
        name,
        password: hashedPassword
    })
   })
   .then(createdUser => {
    res.json(createdUser)
   })
   .catch(err => res.send(err))
}


const loginController = (req, res, next) => {

    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({
            error: {
                message: "missing email or password"
            }
        })
    }

    let myUser;
    User.findOne({ email: email })
    .then((foundUser) => {
        if(!foundUser){
            return Promise.reject('Invalid email or password')
        }
        myUser = foundUser
        return bcryptjs.compare(password, foundUser.password)
    })
.then(isValidPassword => {
    if (!isValidPassword){
    return Promise.reject('Invalid email or password')
    }
   const payload ={
    _id: myUser._id,
    name: myUser.name,
    email: myUser.email
   }

   const authToken = jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256', expiresIn: "6h" }
   )

   res.json ({
    authToken: authToken
   })
})
.catch(err => res.send(err))

    .catch((err) => {
        console.log(err)
    })
}

module.exports = {
    signupController,
    loginController
}