const express = require('express');
const router = express.Router();

const ProductController = require('../Controllers/Product.Controller');

module.exports = (app) => {
    app.route('/product')
    .get(ProductController.getProduct);

    
}