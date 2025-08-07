// Meal Route
const express = require('express');
const router = express.Router();
const mealController = require('../controllers/mealController');

// Base path /api/meals
router.post('/', mealController.createMeal);
router.get('/', mealController.getAllMeals);
router.get('/;id', mealController.getMealById);
router.put('/;id', mealController.updateMeal);
router.delete('/:id', mealController.deleteMeal);

module.exports = router;