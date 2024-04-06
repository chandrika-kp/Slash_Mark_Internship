const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser');

const dotenv = require("dotenv");
dotenv.config()
// require("dotenv").config();

// Mongoose connection
require("./DB/connection")

// require('./routes)
const userRoutes = require("./routes/user.js")
const foodRouter = require("./routes/foodItemsRoute.js")
const paymentRouter = require('./routes/paymentsRoute.js');

// view engine
app.set('view engine', 'ejs');

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use('/auth', userRoutes);
app.use('/foodItems', foodRouter);
app.use('/payment',paymentRouter);
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.status(200).json("server is running")
});

const PORT = process.env.PORT || 6005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

