const express = require('express');
const router = express.Router();

const OrderController = require('../Controllers/Order.Controller');


module.exports = (app) => {
    // app.route('/user')
    // .get(UserController.getUser);
    app.route('/order/:id')
    .get(OrderController.getOrderbyIDUser);
    // app.route('/comment/create')
    // .post(CommentController.createNewComment);
}