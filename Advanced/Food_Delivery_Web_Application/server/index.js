const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config()
// require("dotenv").config();


// Mongoose connection
require("./DB/connection")
// require("./models")
const userRoutes = require("./routes/user.js")


app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));

app.use(express.json());
app.use('/auth', userRoutes);

app.get('/',(req,res)=>{
    res.status(200).json("server is running")
});

const PORT = process.env.PORT || 6005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

