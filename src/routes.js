const express = require('express');
const PlanetController = require('./api/controllers/PlanetController');
const Planet = require('./api/models/Planet');

const routes = express.Router();

routes.get('/');
routes.get('/planet', PlanetController.readAllPlanets);
routes.get('/planet/:_id', PlanetController.readPlanetById);
routes.post('/planet', PlanetController.createPlanet);
routes.put('/planet/:_id', PlanetController.updatePlanet);
routes.delete('/planet/:_id', PlanetController.deletePlanet);

module.exports = routes;
