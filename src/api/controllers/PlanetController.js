const PlanetService = require('../services/PlanetService');

module.exports = {
    async createPlanet(request, response)
    {
        PlanetService.create(request, response)
    },
    
    async readAllPlanets(request, response)
    {
        PlanetService.read(request, response)
    },

    async readPlanetById(request, response)
    {
        PlanetService.readById(request, response)
    },
    
    async updatePlanet(request, response)
    {
        PlanetService.update(request, response)
    },
    
    async deletePlanet(request, response)
    {
        PlanetService.delete(request, response)
    },
}