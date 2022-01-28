const mongoose = require('mongoose')

URI=('mongodb://localhost/Test_base')

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(db=> console.log('base de datos conectada'))
.catch(error=>console.log(error))

module.exports = mongoose


