
const mongoose = require('mongoose')
const PlanetSchema = require('../models/Planet');
const { response } = require('express');
var Planet = mongoose.model('Planet', PlanetSchema);

module.exports = {
    async create(request, response)
    {
        var { name, weather, terrain } = request.body
        var newPlanet = new Planet({name,weather,terrain})
        newPlanet.save((error) => {
            if(error)
                console.log(error)
            else
            {
                console.log("Successfully created new planet.")
                response.status(201).json({ newPlanet })
            }
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
    
    async update(request, response)
    {
    
    },
    
    async deleta(request, response)
    {
        
    },
}

