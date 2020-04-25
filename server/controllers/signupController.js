const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./../models/userModel');

const saltRounds = 10;

exports.createUser = (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        const user = new User({
            username,
            email,
            password: hash
        });
        user.save();
    });

};