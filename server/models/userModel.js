const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'The username is missing!'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'The email is missing!']
    },
    password: {
        type: String,
        required: [true, 'The password is missing!']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;