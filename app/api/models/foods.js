const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    user_id: {
        type: String,
        trim: true,
        required: true,
    },
    carbohydrates: {
        type: Number,
        trim: true,
        required: true,
    },
    energy: {
        type: Number,
        trim: true,
        required: true,
    },
    proteins: {
        type: Number,
        trim: true,
        required: true,
    },
    fats: {
        type: Number,
        trim: true,
        required: true,
    },
    fibers: {
        type: Number,
        trim: true,
        required: true,
    },
    p: {
        type: Number,
        trim: true,
        required: true,
    },
    ca: {
        type: Number,
        trim: true,
        required: true,
    },
    price: {
        type: Number,
        trim: true,
        required: true,
    },
    time: {
        type: Date,
        trim: true,
        required: true,
    },
});

module.exports = mongoose.model('food', foodSchema)
