const express = require('express');
const PlanetService = require('./api/services/PlanetService');
const Planet = require('./api/models/Planet');


const routes = express.Router();

routes.get('/');
routes.get('/planet', PlanetService.read);
routes.post('/planet', PlanetService.create);

module.exports = routes;
