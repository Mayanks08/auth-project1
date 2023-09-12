const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new Schema(
    {
    name:{
        type: String,
        require: [true ,'username is required'],
        minLength:[5, 'Name must at least 5 char'],
        maxLength:[50,'Name must be less than 50 char'],
        trim: true
    },
    Email:{
        type: String,
        require: [true ,'user email is required '],
        unique : true,
      

    },
    password:{
        type: String,
        select:false,
    },
    forgotPasswordToken:{
        type: String,
    },
    forgotPasswordExpiryDate:{
        type: Date,
    }
}, {
    timestamps : true,
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;