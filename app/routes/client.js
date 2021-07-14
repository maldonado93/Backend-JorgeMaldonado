const express = require('express');
const ClientCtrl = require('../controllers/ClienteController');

const Router = express.Router();
Router.get('/:nit', ClientCtrl.findById)

module.exports = Router;