const express = require('express') 
const bodyParser = require('body-parser')

const App = express();
const routes= require('./routes/bocc_customers');
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: true}));
App.use('/', routes());
module.exports= App;