const express = require('express');
const loginRouter = require('./routes/loginRoutes');
const signupRouter = require('./routes/signupRoutes');

const app = express();
app.use(express.json());
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

module.exports = app;