const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    name: String
}, 
{ timestamps : true }
)

const User = model('User', userSchema)

module.exports = User