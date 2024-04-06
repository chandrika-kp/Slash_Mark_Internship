const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    razor_id: {type: String,required: true},
    razor_payment_id: {type: String,required: true},
    razor_signature: {type: String,required: true},
});

const PaymentModel = mongoose.model("RazorPayment", PaymentSchema);

module.exports = PaymentModel;