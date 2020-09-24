const mongoose = require ("mongoose");

var PlanetCounter = new mongoose.Schema
({
    _id: { type: String, required: true },
    sequence_value: { type: Number, required: true , default: 0, unique: true}
});

module.exports = PlanetCounter