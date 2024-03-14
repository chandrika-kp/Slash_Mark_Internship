const express = require("express");
const bcrypt = require('bcrypt');
const UserModel = require("../models/userModel");

const router = express.Router();

router.post('/signup', async (req,res) => {
    const {username, email, password} = req.body;
    const user = UserModel.find({email});
    if(user){
        return res.json({message: "user already existed"})
    }
    const hashpassword = await bcrypt.hash(password,10)
    const newUser = new User({
        username,
        email,
        password:hashpassword,

    })

    await newUser.save()
    return res.json({message: "Registered"})
})

module.exports = router;