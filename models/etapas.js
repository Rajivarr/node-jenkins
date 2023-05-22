const {Schema, model} = require('mongoose')

const etapasSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre de la etapa del proyecto']
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

module.exports = model('Etapas', etapasSchema)
