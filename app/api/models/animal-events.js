const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const animalEventSchema = new Schema({
    user_id: {
        type: Number,
        trim: true,
        required: true,
    },
    label: {
        type: String,
        trim: true,
        required: true,
    },
    event_date: {
        type: String,
        trim: true,
        required: true,
    },
    event_type: {
        type: String,
        trim: true,
        required: true,
    },
    costs: {
        type: Number,
        trim: true,
        required: false,
    },
});

module.exports = mongoose.model('animalEvent', animalEventSchema)
