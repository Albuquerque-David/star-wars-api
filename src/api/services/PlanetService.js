
const mongoose = require('mongoose')
const PlanetSchema = require('../models/Planet');
const PlanetCounterSchema = require('../models/PlanetCounter');
var Planet = mongoose.model('Planet', PlanetSchema);
var PlanetCounter = mongoose.model('PlanetCounter', PlanetCounterSchema);


module.exports = {
    async create(request, response)
    {
        var { name, weather, terrain } = request.body
        var _id = await getNextSequence("planet_id")
        console.log("SOU O ID: " + _id)
        var newPlanet = new Planet({_id,name,weather,terrain})
        newPlanet.save((error) => {
            if(error)
                return console.log(error)
            response.status(201).json({ newPlanet })
        })
    },
    
    async read(request, response)
    {
        Planet.find({}).exec((error, result) => {
            if(error)
                return console.log(error)
            return response.status(200).json({ result })
        })

    },

    async readById(request, response)
    {
        var { _id } = request.params
        Planet.findById(_id).exec((error,result) => 
        {
            if(error)
                return console.log(error)
            return response.status(200).json({ result })
        })

    },
    
    async update(request, response)
    {
        var { _id } = request.params
        var { name, weather, terrain } = request.body

        const filter = { '_id': _id }
        const update = { name , weather, terrain}

        Planet.findOneAndUpdate(filter,update, {new: true}).exec((error, result) =>
        {
            if(error)
                return console.log(error)
            response.status(200).json({result})
        })
    },
    
    async delete(request, response)
    {
        var { _id } = request.params
        Planet.findByIdAndDelete(_id).exec((error, result) => 
        {
            if(error)
                return console.log(error)
            response.status(200).json({ result })
        })
    },
}

async function getNextSequence(sequence_name) {
    let promise = new Promise((resolve, reject) => {
        let filter = { '_id': sequence_name }
        let update = {$inc: {sequence_value: 1}}
        PlanetCounter.findOneAndUpdate(filter, update, {new:true}).exec((error,result) => {
            if(error)
                console.log(error)            
            if(result === null || result === undefined)
            {
                var newPlanetCounter = new PlanetCounter({_id:sequence_name})
                newPlanetCounter.save((error) => {
                    if(error)
                        console.log(error)
                    return resolve(newPlanetCounter.sequence_value)
                })
            }
            else
                resolve(result.sequence_value)
        })
    })
    
    return await promise;
 }
 

