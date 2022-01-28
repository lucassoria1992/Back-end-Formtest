

const {Router}= require('express')
const route=Router()
const PruebaCtrl = require('../Controllers/Prueba.controller.js')

route.get('/ver', PruebaCtrl.obtener)
route.post('/crear', PruebaCtrl.crear)
route.put('/', PruebaCtrl.actualizar)
route.delete('/', PruebaCtrl.quitar)

module.exports=route