const mongoose = require ("mongoose");

var Planet = new mongoose.Schema
({
    _id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    climate: { type: String, required: true },
    terrain: { type: String, required: true },
    films: [{type:String, required: false}]
});

module.exports = Planet