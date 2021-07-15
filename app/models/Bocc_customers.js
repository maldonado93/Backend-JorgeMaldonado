const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bocc_customersSchema = new Schema({
  nit: Number,
  nombre: String,
  capa: String,
  segmento: String,
  gerenteRelacion: String
});

module.exports = mongoose.model("bocc_customers", bocc_customersSchema);
