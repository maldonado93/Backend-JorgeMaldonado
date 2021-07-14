const express = require('express') 
const bodyParser = require('body-parser')

const App = express();
const Client= require('./routes/client');
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));
App.use('/client',Client );
module.exports= App;