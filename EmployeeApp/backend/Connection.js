const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://hadithameezkhan093:Hadi@htk.34iie.mongodb.net/?retryWrites=true&w=majority&appName=htk")
    .then(() => {
    console.log("connected to mongodb")
})