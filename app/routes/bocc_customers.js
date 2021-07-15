const express = require('express');
const router = express.Router();
const bocc_customersController = require('../controllers/Bocc_customersController');

module.exports = function(){
    router.get('/bocc_customers',bocc_customersController.list );
    router.get('/bocc_customers/:nit',bocc_customersController.show );
    return router
};