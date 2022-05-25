const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        id_product: { type: String },
        product_name: {type: String},
        product_price: {type: String},
        description: { type: String },
        slug:{type: String},
        categories: {type: String},
        color: {type: String},
        style: {type: String},
        detail_info: {type: String},
        discount: {type: Boolean},
        discount_percent: {type: String},
        thumbnail: {type: String}
        
        
    },
);



module.exports = mongoose.model('Product', Product);