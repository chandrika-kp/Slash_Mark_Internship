const mongoose = require("mongoose");

const foodItemsSchema = new mongoose.Schema({
    id: {type: Number},
    img: {type: String},
    name: {type: String},
    price: {type: Number},
    desc: {type: String},
    category: {type: String},
    rating: {type: Number},

});

const FoodItemsModel = mongoose.model("foodItems", foodItemsSchema);

module.exports = FoodItemsModel;