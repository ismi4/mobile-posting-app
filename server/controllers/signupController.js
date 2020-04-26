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

        user.save().catch((err) => {

            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(500).json({
                    status: 'failure',
                    message: 'There was an error with the database - Duplication Key Error'
                });
            };

            return res.status(500).json({
                status: 'failure',
                message: 'There was an error with the database'
            });

        });


        // res.status(201).json({
        //     status: 'success',
        //     message: 'User successfully created!'
        // });



    });

};