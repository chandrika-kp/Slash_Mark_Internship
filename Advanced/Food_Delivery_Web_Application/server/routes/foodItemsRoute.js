const express = require('express');
const router = express.Router();
const FoodItemsModel = require('../models/foodItemsModel');

// Route to fetch all food items
router.get('/', async (req, res) => {
    try {
        const foodItems = await FoodItemsModel.find();
        // console.log('FoodItems:', foodItems.length); 
        // console.log('All:', foodItems); // actual food items retrieved
        res.json(foodItems); 
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Route to fetch a specific food item by its ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params;
        const foodItem = await FoodItemsModel.findOne(id);
        console.log(foodItem)
        // Find the food item by its ID
        if (!foodItem) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.json(foodItem);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
