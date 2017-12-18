var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DocSchema = new Schema({ tipo: 'string',numero: 'number', _id: false});
var NomSchema = new Schema({ nombre1: 'string',nombre2: 'string', apellido1: 'string',apellido2: 'string', _id: false});
var ConSchema = new Schema({ telefono: 'number', celular: 'number', email: 'string', _id: false});
module.exports = mongoose.model('Cliente', {
  
    Documento: {
        type: Number,
        require: true
    },
    tipo: {
        type: String,
        default: "CC"
    },
    Nombre: NomSchema,
    Contacto: ConSchema
    
});