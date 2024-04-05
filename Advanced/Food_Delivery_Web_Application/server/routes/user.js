const express = require("express");
const bcrypt = require('bcrypt');
const UserModel = require("../models/userModel");
const userController = require('../controllers/userController')
const jwt = require("jsonwebtoken");
require('dotenv').config();

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, email, password ,userType} = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
        return res.json({ message: "Email already existed" })
    }
    // Hash the password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
        username,
        email,
        password: hashPassword,
        userType,

    });

    await newUser.save()

    return res.json({ status: true, message: "Registered" })
})


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.json({ message: "Not registered" })
    }
    // else{
    // return res.json({message: "user already existed"})

    // }
    const validpassword = await bcrypt.compare(password, user.password)
    if (!validpassword) {
        return res.json({ message: "Incorrect Password" })
    }
    const token = jwt.sign({ username: user.username }, process.env.JWTKEY, { expiresIn: '1h' })
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 })
    return res.json({ status: true, message: "Login sucessfully", username: user.username, type:user.userType })

})

const verifyUser = (req, res, next) => {
    try {
        const token = req.cookies.token;
        // console.log(token)
        if (!token) {
            return res.status(401).json({ status: false, message: "No token provided" });
        }
        let decoded = jwt.verify(token, process.env.JWTKEY);
        req.user = decoded; 
        next();
        // jwt.verify(token,  process.env.JWTKEY, (err,decoded ) => {
        //     if (err) {
        //         return res.status(401).json({ status: false, message: "Invalid or expired token" });
        //     } else {

        //     }
        // });
    } catch (err) {
        return res.status(401).json({ status: false, message: "Invalid or expired token" });
    }
};

router.get('/verify', verifyUser, (req, res) => {
    const userData = req.user;
    return res.json({ status: true, message: "Authorized", user: userData });
});

router.get('/logout', (req, res) => {
    try {
        // Clear the 'token' cookie
        res.clearCookie('token');
        return res.json({ status: true, message: "Logout successful" });
    } catch (error) {
        console.error('Logout failed:', error);
        return res.status(500).json({ status: false, message: 'Logout failed. Please try again later.' });
    }
});

// list of all users
router.get('/usersList', async (req,res)=> {
    try {
        const users = await UserModel.find();
        res.json(users); 
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
})

router.get('/signup', userController.signup_get);
module.exports = router;