const express = require('express');
const router = express.Router();

const ProductController = require('../Controllers/Product.Controller');


module.exports = (app) => {
    app.route('/product')
    .get(ProductController.getProduct);
    app.route('/product/:slug')
    .get(ProductController.getProductbyID);
    app.route('/product/create')
    .post(ProductController.cretenewProduct);
    app.route('/product/category/:categories')
    .get(ProductController.getProductbyCategory);
    app.route('/product/price/greater/:id')
    .get(ProductController.getProductbyPriceGreaterthan);
    app.route('/product/price/smaller/:id')
    .get(ProductController.getProductbyPriceSmallerthan);
    app.route('/product/price/between/:gt/:lt')
    .get(ProductController.getProductbyPriceBetween); 
    app.route('/product/updatestatus')
    .post(ProductController.updateProductStatus);

    
}