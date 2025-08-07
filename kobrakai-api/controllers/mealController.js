// Meal Controller

const Meal = require('../models/mealModel');

// CREATE
exports.createMeal = async (req, res) => {
    try {
        const meal = new Meal(req.body);
        const savedMeal = await meal.save();
        res.status(201).json(savedMeal);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// READ - ALL MEALS
exports.getAllMeals = async (req, res) => {
    try {
        const meals = await Meal.find().populate('provider', 'name email');
        res.json(meals); 
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

// READ - Single Meal by ID
exports.getMealById = async (req, res) => {
    try {
        const meal = await Meal.findById(req.params.id).populate('provider', 'name');
        if (!meal) return res.status(404).json({ message: 'Meal Not Found'});
        res.json(meal);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE
exports.updateMeal = async (req, res) => {
    try {
        const updated = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true});
        updated ? res.json(updated) : res.status(404).json({ message: "Meal not found" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE
exports.deleteMeal = async (req, res) => {
    try {
        await Meal.findByIdAndDelete(req.params.id);
        res.json({ message: 'Meal Deleted '});
    } catch (err) {
        res.status(404).json({ error: err.message});
    }
};
