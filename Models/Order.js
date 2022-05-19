const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema(
    {
        id_order: { type: String },
        id_user: {type: String},
        id_product: {type: String},
        product_img: { type: String },
        product_price:{type: String},
        quantity: {type: String}
    
    },
);



module.exports = mongoose.model('Order', Order);