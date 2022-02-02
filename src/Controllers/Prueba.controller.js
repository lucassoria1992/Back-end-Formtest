const { send } = require("express/lib/response")
const res = require("express/lib/response")
const { Model } = require("mongoose")
const form = require('../Models/form')

const PruebaCtrl = {}

PruebaCtrl.obtener = async (req, res) => {
    res.send(await form.find({}))
}

PruebaCtrl.crear = async (req, res) => {
    const datos = form(req.body)
    datos.save()
    res.send('Todo Ok')
    console.log(datos)
}


PruebaCtrl.actualizar = (req, res) => {
    res.send('Funcionando desde Put')

}

PruebaCtrl.quitar = (req, res) => {
    res.send('Funcionando desde Delete')
}


module.exports = PruebaCtrl