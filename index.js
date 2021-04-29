'use strict'

var mongoose = require('mongoose');
require('dotenv').config()
var app = require('./app');
var port = '3700';
//conection to data base
// '<ADD CONECTION STRING TO .ENV FILE>' (check .env_sample)
const connectionString = process.env.CONECTION_STRING;

mongoose.Promise = global.Promise;
mongoose.connect(connectionString)
        .then(()=>{
            console.log("DataBase Online...");
            app.listen(port, () =>{
                console.log("servidor corriendo correctamente en la url: localhost:3700");
            });
        })
        .catch(err => console.log(err));

        console.log(process.env)

