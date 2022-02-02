const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyparser= require('body-parser')
const route = require('./Routes/prueba.route')
require('./database')




app.set('Port', 4000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(express.json())
app.use(cors())

//Routes

app.use('/api/',require('./Routes/prueba.route.js'))


//Start Server

app.listen(app.get('Port'),() => {
    console.log('escuchando por el puerto', app.get('Port'))
})