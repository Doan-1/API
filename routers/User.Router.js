const express = require('express');
const router = express.Router();

const UserController = require('../Controllers/User.Controller');


module.exports = (app) => {
    app.route('/user')
    .get(UserController.getUser);
    app.route('/user/:id')
    .get(UserController.getUserbyID);

    
}