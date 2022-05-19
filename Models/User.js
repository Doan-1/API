const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        id_user: { type: String },
        user_name: {type: String},
        user_password: {type: String},
        user_email: {type: String},
        user_phone: {type: String},
        user_address: {type: String}
        
    },
);


module.exports = mongoose.model('User', User);