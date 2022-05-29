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

    
}