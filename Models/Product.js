const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        id_product: { type: String },
        product_name: {type: String},
        product_price: {type: String},
        description: { type: String },
        slug:{type: String},
        product_img: {type: String},
        categories: {type: String}
        
    },
);



module.exports = mongoose.model('Product', Product);