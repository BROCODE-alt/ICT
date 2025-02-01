const mongoose = require("mongoose")

var schema = mongoose.Schema({
    Name:String,
    Address:String,
    Phone:Number,
    Card:Number
})
var Paymentmodel = mongoose.model("paymentpage",schema)
module.exports = Paymentmodel