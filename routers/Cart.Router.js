const express = require('express');
const router = express.Router();

const CartController = require('../Controllers/Cart.Controller');


module.exports = (app) => {
    // app.route('/user')
    // .get(UserController.getUser);
    app.route('/cart/:id')
    .get(CartController.getCartbyIDUser);
    // app.route('/comment/create')
    // .post(CommentController.createNewComment);
}