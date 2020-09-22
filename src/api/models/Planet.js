const mongoose = require ("mongoose");

var Planet = new mongoose.Schema
({
    name: { type: String, required: true },
    weather: { type: String, required: true },
    terrain: { type: String, required: true }
});

module.exports = Planet