const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    user_id: {
        type: Number,
        trim: true,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    type: {
        type: String,
        trim: true,
        required: true,
    },
    capacity: {
        type: Number,
        trim: true,
        required: true,
    },
    status: {
        type: Number,
        trim: true,
        required: true,
    },
});

module.exports = mongoose.model('animal', animalSchema)
