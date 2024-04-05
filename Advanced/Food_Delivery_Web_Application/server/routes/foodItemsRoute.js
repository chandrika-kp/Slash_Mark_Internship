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

// 
router.post('/', async (req, res) => {
    const { id,img, name, price, desc ,category,rating} = req.body;

    const newItem = new FoodItemsModel({
        id,img, name, price, desc ,category,rating,
    });

    await newItem.save()

    return res.json({ status: true, message: "Item added" })
})

module.exports = router;
