const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
   nit: Number,
   nombre: String,
   capa: String,
   segmento:String,
   gerenteRelacion: String
})