const { Schema } = require('mongoose');
const { model } = require('mongoose');
const { stringify } = require('nodemon/lib/utils');


const formSchema = new Schema(
{
    id : String,
    nombre : String,
    description: String,
    disponible: String,
    imagen : String,
    price: Number,
}

);

const modelo = model('form',formSchema);


module.exports = modelo;
