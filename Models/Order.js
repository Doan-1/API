const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const Order = new Schema(
    {
        id_user: {type: String},
        id_product: {type: String},
        product_name: { type: String },
        product_price:{type: String},
        product_img: { type: String },
        quantity: {type: String}
    
    },
);

Order.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});


module.exports = mongoose.model('Order', Order);