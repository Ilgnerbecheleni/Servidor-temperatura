const mongoose = require('mongoose');

const dadosSchema = new mongoose.Schema({
    temperature: Number ,
    timestamp : {type: Date , default: Date.now}
});

const Dados = mongoose.model('Dados', dadosSchema);


module.exports = Dados ;