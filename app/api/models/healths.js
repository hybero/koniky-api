const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const healthSchema = new Schema({
    user_id: {
        type: Number,
        trim: true,
        required: true,
    },
    animal_id: {
        type: Number,
        trim: true,
        required: true,
    },
    label: {
        type: String,
        trim: true,
        required: true,
    },
    health_type: {
        type: String,
        trim: true,
        required: true,
    },
    date: {
        type: Date,
        trim: true,
        required: true,
    },
    costs: {
        type: Number,
        trim: true,
        required: false,
    },
});

module.exports = mongoose.model('health', healthSchema)
