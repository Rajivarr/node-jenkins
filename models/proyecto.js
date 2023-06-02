const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Numero requerido'],
        unique: [true, 'Proyecto creado']
    },
    titulo: {
        type: String,
        required: [true, 'titulo requerido']
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },

    fechaDeIniciacion: {
        type: Date,
        default: new Date()
    },

    fechaDeEntrega: {
        type: Date,
        default: new Date()
    },
    Valor: {
        type: Number,
        required: true
        
    },

    fechadeCreacion: {
        type: Date,
        default: new Date()
    },
    fechadeActualizacion: {
        type: Date,
        default: new Date()
    },

    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },

    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapas',
        required: true
    }

})

module.exports = model('Proyecto', ProyectoSchema)
