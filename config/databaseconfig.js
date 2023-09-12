const mongoose = require("mongoose");
require('dotenv').config(); 
const MONGODB_URL = process.env.MONGODB_URL  ;

const databaseconnect = () => {
    mongoose
        .connect(MONGODB_URL)
        .then((conn) =>  console.log(`connected to DB: ${conn.connection.host}`))
        .catch((err) => console.log(err.message));
}
module.exports= databaseconnect;

