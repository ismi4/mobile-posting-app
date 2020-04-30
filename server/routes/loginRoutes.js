const express = require('express');
const loginController = require('./../controllers/loginController');
const router = express.Router();

router.route('/').post(loginController.getLogin);

module.exports = router;