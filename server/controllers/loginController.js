const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./../models/userModel');

exports.loginValidation = async (req, res) => {

    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) res.status(500).json({
            status: 'failure',
            message: 'The account does not exist'
        });

        await passwordValidation(res, req.body.password, user.password); 
        
    } catch (err) {
        res.status(500).json({
            status: 'failure',
            message: 'There was an error'
        });
    };
};

async function passwordValidation(res, password, dbPassword) {

    const result = await new Promise((resolve, reject) => {
        bcrypt.compare(password, dbPassword, (err, res) => {
            if (err) reject(err);
            resolve(res);
        }); 
    });
    
    if (!result) res.status(500).json({
        status: 'failure',
        message: 'The password is incorrect'
    });

    res.status(200).json({
        status: 'success'
    });
};