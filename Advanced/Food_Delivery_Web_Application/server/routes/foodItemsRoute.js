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

// ADD FOODITEM
router.post('/', async (req, res) => {
    const { id, img, name, price, desc, category, rating } = req.body;

    const newItem = new FoodItemsModel({
        id, img, name, price, desc, category, rating,
    });

    await newItem.save()

    return res.json({ status: true, message: "Item added" })
})

// Update fooditem
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const updatedItem = await FoodItemsModel.findByIdAndUpdate(
            id,
            req.body,
            // {
            //     img: req.body.img,
            //     name: req.body.name,
            //     price: req.body.price,
            //     desc: req.body.desc,
            //     category: req.body.category,
            //     rating: req.body.rating
            // }
            { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.status(200).json(updatedItem);
    } catch (err) {
        console.error('Error updating food item:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete fooditem
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await FoodItemsModel.findByIdAndDelete(id); //here it Find and delete the document by its ' _id '
        // await FoodItemsModel.findOneAndDelete({ id: id }); // here it takes id like 1,2,3..
        res.json({ message: 'Food item deleted sucessfully' });
    } catch {
        res.status(500).send('Server Error');
    }
})
module.exports = router;
