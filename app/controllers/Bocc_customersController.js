const Bocc_customers = require("../models/Bocc_customers");
const mongoose = require('mongoose');


//Listar por Nit
exports.list = async (req, res) => {
    try {
        const bocc_customers = await Bocc_customers.find({});
        res.json(bocc_customers);

    }catch(error){
        console.log(error);
        res.send(error);
    }
}

exports.show = async ( req, res, next) => {
    try {
        const bocc_customers = await Bocc_customers.find({"nit":req.params.nit});
        if(!bocc_customers){
            res.status(404).json({
                message:'Cliente no existe'
            });
        }res.status(200).json(bocc_customers)
    }catch(error){
        console.log(error);
        res.status(400).json({
            message:'Error al procesar la peticion'
        });
    }
}




