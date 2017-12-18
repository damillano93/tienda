var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Will add the Currency type to the Mongoose Schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

module.exports = mongoose.model('Factura', {
    Fecha: {
        type: Date,
        default: Date.now()
    },
    Cliente: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
 },
    Productos: {
        type: Array
    },
    Total: {
        type: Number,
        default: 0
    },
});