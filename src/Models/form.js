const { Schema } = require('mongoose');
const { model } = require('mongoose');


const formSchema = new Schema(
{
    nombre : String,
    description: String,
    disponible: Boolean,
}

);

const modelo = model('form',formSchema);


module.exports = modelo;