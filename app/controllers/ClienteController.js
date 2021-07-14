const clientes = require("../models/Clientes");
// const mongoose = require('mongoose');
// const clientes = mongoose.model('cliente');

function findById (req, res,next){
    let query= {};
    query[req.params.nit] = req.params.nit;
    clientes.findById(query).then(clientes => {
        if(!clientes.length) return next();
        req.body.clientes = clientes;
        return next();
    }).catch(error => {
        req.body.error = error;
        next();
    })
}
module.exports= {
    findById,
}

// exports.findById = function (req, res) {
//   console.log(req.params.nit);
//   cliente.findById(req.params.nit, function (err, tvshow) {
//     if (err) return res.send(500, err.message);

//     console.log("GET /nit/" + req.params.id);
//     res.status(200).jsonp(tvshow);
//   });
// };
