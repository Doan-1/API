const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartInfo = new Schema(
    {
        id_cart: { type: String },
        id_product: {type: String},
        product_name: {type: String},
        product_price: {type: String},
        productt_img: {type: String},
        quantity: {type: String}
    
    },
);



module.exports = mongoose.model('CartInfo', CartInfo);