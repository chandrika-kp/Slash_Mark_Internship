const express = require('express');
const router = express.Router();
const FoodItemsModel = require('../models/foodItemsModel');

// Route to fetch all food items
router.get('/', async (req, res) => {
    try {
        const foodItems = await FoodItemsModel.find();
        console.log('FoodItems:', foodItems.length); // Add this line to log the number of food items retrieved
        console.log('All:', foodItems); // Add this line to log the actual food items retrieved
        res.json(foodItems); // Change 'jobs' to 'foodItems'
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
