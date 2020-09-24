
const mongoose = require('mongoose')
const axios = require('axios');
const PlanetSchema = require('../models/Planet');
const PlanetCounterSchema = require('../models/PlanetCounter');
var Planet = mongoose.model('Planet', PlanetSchema);
var PlanetCounter = mongoose.model('PlanetCounter', PlanetCounterSchema);


module.exports = {
    async create(request, response)
    {
        var { name, climate, terrain } = request.body
        var _id = await getNextSequence("planet_id")

        const apiResponse = await getPlanetFilmsByName(name)
        if(apiResponse.data.results[0] != undefined)
        {
            let apiFilms = apiResponse.data.results[0].films
            var films = await getFilms(apiFilms)
        }
        else
            var films = []

        var newPlanet = new Planet({_id,name,climate,terrain,films})
        newPlanet.save((error) => {
            if(error)
                return console.log(error)
            response.status(201).json({ newPlanet })
        })
    },
    
    async read(request, response)
    {
        var filter = {}
        var { name } = request.query

        if(name != undefined)
            filter = {'name': name}

        Planet.find(filter).exec((error, result) => {
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
        var { name, climate, terrain } = request.body

        const filter = { '_id': _id }
        const update = { name , climate, terrain}

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

 async function getPlanetFilmsByName(name)
 {
    return await axios.get('https://swapi.dev/api/planets/?search=' + name)
 }

 async function getFilm(film)
 {
    return await axios.get(film)
 }

 async function getFilms(films) 
 {
    let filmsData = []

    if(films === undefined || films === null)
        return filmsData

    for await (let film of films)
    {
        let filmData = await getFilm(film)
        filmsData.push(filmData.data.title)
    }

    return filmsData
 }
 

