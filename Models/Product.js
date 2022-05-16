const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema(
    {
        id_product: { type: String },
        product_name: {type: String},
        product_price: {type: String},
        description: { type: String }
        
    },
);

// Add plugins
//mongoose.plugin(slug);
// Product.plugin(mongooseDelete, {
//     deletedAt: true,
//     overrideMethods: 'all',
// });

module.exports = mongoose.model('Product', Product);