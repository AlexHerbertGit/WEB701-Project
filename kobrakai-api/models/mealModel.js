// Meal Model

const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    dietaryTags: { type: [String], default: [] }, // Vegan, Vegetarian, Gluten-Free etc.
    portionsAvailable: { type: Number, default: 0, min: 0 },
    deliveryDays: { type: [String], default: [] },
    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Meal', mealSchema);