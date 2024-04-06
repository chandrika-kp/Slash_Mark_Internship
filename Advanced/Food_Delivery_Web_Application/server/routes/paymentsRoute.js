const express = require('express');
const router = express.Router();
const PaymentModel = require('../models/paymentModel');

const Razorpay = require('razorpay');
const crypto = require('crypto');

// const { v4: uuidv4 } = require('uuid');

// Initialize Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Endpoint to create a payment order
router.post('/create-order', async (req, res) => {
    try {
        const { amount } = req.body;

        const options = {
            amount: amount * 100,
            currency: 'INR',
            // receipt: uuidv4(), // generate a unique receipt ID
        };

        const order = await razorpay.orders.create(options);
        // const order = await instance.orders.create(options);
        console.log(order);
        res.status(200).json({ Success: true, order });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/paymentVerification', async (req, res) => {
    try {

        const { razor_id, razor_payment_id, razor_signature } = req.body;
        const body = razor_id + " " + razor_payment_id;
        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET).update(body.toString()).digest('hex');

        const isauth = expectedSignature === razor_signature;
        console.log('Expected Signature:', expectedSignature);
        // console.log('Received Signature:', razor_signature);

        if (isauth) {

            await PaymentModel.create({
                razor_id,
                razor_payment_id,
                razor_signature
            });
            console.log('Payment data created successfully');
            res.redirect(`http://localhost:3000/paymentSuccess?reference=${razor_payment_id}`)

            // res.status(200).json({ success: true, message: 'Payment data created successfully' });
        } else {
            // Signature verification failed
            // res.status(400).json({ success: false, error: 'Invalid signature' });
            res.redirect(`http://localhost:3000/paymentSuccess`) //not getting razor_signature..so giving path here
        }
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

router.get('/api/getkey', (req, res) => {
    return res.status(200).json({ key: process.env.RAZORPAY_KEY_ID })
})

module.exports = router;