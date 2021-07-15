const mongoose = require('mongoose');
const CONFIG = require('./config');

module.exports = {
    // connection,
    // connect : function(){
    //     if(this.connection) return this.connection;
    //     return mongoose.connect(CONFIG.DB).then(connection => {
    //         this.connection = connection;
    //         console.log("Connexion a DB con Exito!!");
    //     }).catch(error => console.log(error));
    // }
    connect : function(){

        mongoose.connect(CONFIG.DB, {}).then(()=>console.log("Conectado")).
        catch((e)=> console.log('error', e))   
       
    }
}