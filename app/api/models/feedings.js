const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const feedingSchema = new Schema({
    user_id: {
        type: String,
        trim: true,
        required: true,
    },
    animal_id: {
        type: String,
        trim: true,
        required: true,
    },
    feeding_type: {
        type: String,
        trim: true,
        required: true,
    },
    food_id: {
        type: String,
        trim: true,
        required: true,
    },
    volume: {
        type: Number,
        trim: true,
        required: true,
    },
    date: {
        type: Date,
        trim: true,
        required: true,
    },
});

module.exports = mongoose.model('feeding', feedingSchema)
