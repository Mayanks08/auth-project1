const express = require('express');
const  app = express();
const authRouter =require('./rotuer/authRotuer.js');
const databaseconnect = require('./config/databaseconfig.js');

databaseconnect();

app.use(express.json());

app.use('/api/auth',authRouter)

app.use('/',(req , res) => {
    res.status(200).json({data: 'jwtauth server'});
})

module.exports = app;