
const Proyecto =require('../models/proyecto')
const TipoProyecto = require('../models/tipoProyecto')
const Cliente = require('../models/cliente')
const Universidad = require('../models/universidad')
const Etapas = require('../models/etapas')


const { request, response} = require('express')


// crear
const createProyecto = async (req = request, 
    res = response) => {
    try{
        const data = req.body.
        console.log(data)
        const { tipoproyecto, cliente,universidad,etapas } = data;
        //validando tipo proyecto
        const tipoProyectoDB = TipoProyecto.findOne({
            _id: tipoproyecto._id
        })
        if(!tipoProyectoDB){
            return res.status(400).json({msg: 'tipo proy invalido'})
        }
        // validando cliente
        const clienteDB = Cliente.findOne({
            _id: cliente._id
        })
        if(!clienteDB){
            return res.status(400).json({msg: 'marca invalida'})
        }
        //validando universidad

        const universidadDB = Universidad.findOne({
            _id: universidad._id

        })
        if(!universidadDB){
            return res.status(400).json({msg: 'marca invalida'})
        }

        //validando etapas
        const etapasDB = Etapas.findOne({
            _id: etapas._id
        })
        if(!etapasDB){
            return res.status(400).json({msg: 'marca invalida'})
        }



        const proyecto = new Proyecto(data)

        await proyecto.save()
        
        return res.status(201).json(proyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getProyectos = async (req = request, 
    res = response) => {
        try{
            const proyectosDB = await Proyecto.find()
                .populate({
                    path: 'tipoProyecto'
                })
                .populate({
                    path: 'cliente'
                })
                .populate({
                    path: 'universidad'
                })
                .populate({
                    path: 'etapas'
                })

            return res.json(proyectosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}


// actualizar inventario
const updateProyectoByID = async (req = request, 
    res = response) => {

    try{
        const { id } = req.params
        const data = req.body
        const proyecto  = await Proyecto.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(proyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }

}


module.exports = { 
    createProyecto, 
    getProyectos, 
    updateProyectoByID 
}