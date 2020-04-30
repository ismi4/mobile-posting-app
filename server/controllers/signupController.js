const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./../models/userModel');

exports.createUser = async (req, res) => {
    try {
        const password = await hashPassword(req.body.password);

        await User.create({
            username: req.body.username,
            email: req.body.email,
            password
        })

        res.status(201).json({
            status: 'success',
            message: 'The account was created!'
        });

    } catch (err) {
        res.status(500).json({
            status: 'failure',
            message: 'There was an error with the database',
            error: err
        });
    };

};

async function hashPassword(password) {

    const saltRounds = 10;

    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) reject(err);
            resolve(hash);
        });
    });

    return hashedPassword;
};