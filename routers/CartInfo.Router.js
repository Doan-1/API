const express = require('express');
const router = express.Router();

const CartInfoController = require('../Controllers/CartInfo.Controller');


module.exports = (app) => {
    // app.route('/user')
    // .get(UserController.getUser);
    app.route('/cartinfo/:id')
    .get(CartInfoController.getCartInfobyIDCart);
    // app.route('/comment/create')
    // .post(CommentController.createNewComment);
}