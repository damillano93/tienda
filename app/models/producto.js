var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Will add the Currency type to the Mongoose Schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

module.exports = mongoose.model('Producto', {
    Plu: {
        type: Number,
        default: 0
    },
    Nombre: {
        type: String,
        default: "No name"
 },
 Valoru: {
    type: Number,
    default: 0
},
Cantidad: {
    type: Number,
    default: 1
},
Valort: {
    type: Number,
    default: 1
}
});