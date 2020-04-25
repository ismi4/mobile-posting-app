const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./../models/userModel');

const saltRounds = 10;

exports.createUser = (req, res) => {

    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });
        user.save();
    });

};