// Meal Model

const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    title: String, required: true,
    description: String,
    dietaryTags: [String], // Vegan, Vegetarian, Gluten-Free etc.
    portionsAvailable: { type: Number, default: 0 },
    deliveryDays: [String],
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: trusted
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Meal', mealSchema);