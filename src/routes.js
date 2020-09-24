const express = require('express');
const PlanetService = require('./api/services/PlanetService');
const Planet = require('./api/models/Planet');

const routes = express.Router();

routes.get('/');
routes.get('/planet', PlanetService.read);
routes.get('/planet/:_id', PlanetService.readById);
routes.post('/planet', PlanetService.create);
routes.put('/planet/:_id', PlanetService.update);
routes.delete('/planet/:_id', PlanetService.delete);

module.exports = routes;
