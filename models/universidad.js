const {Schema, model} = require('mongoose')

const universidadSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    direccion: {
        type: String,
        required: [true, 'direccion requerida'],
    },
    telefono: {
        type: String,
        required: [true, 'telefono requerido'],
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Universidad', universidadSchema)
