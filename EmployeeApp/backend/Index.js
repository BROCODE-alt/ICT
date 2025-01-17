//import
const express = require("express")
require("./Connection")
var EmployeeModel = require("./models/Employ")
const { Error } = require("mongoose")
const cors = require("cors")

//initialise
const app = express()

//middleware
app.use(express.json())
app.use(cors())

//api create
app.get("/", (req, res) => {
    res.send("Hello world")
})
app.get("/trial", (req, res) => {
    res.send("trial api")
})

//add
app.post("/add", async (req, res) => {
    try {
        await new EmployeeModel(req.body).save()
        res.send({ message: "data added" })
    } catch (error) {
        console.log(error)
    }
})
//view
app.get("/view", async (req, res) => {
    try {
        var data = await EmployeeModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
//port setting
app.listen(3004, () => {
    console.log("server is running on 3004")
})
//delete
app.delete("/remove/:id", async (req, res) => {
    try {
        await EmployeeModel.findByIdAndDelete(req.params.id)
        res.send({ message: "data deleted" })
    }
    catch (error) {
        console.log(error)
    }
})
//update
app.put("/update/:id", async (req, res) => {
    try {
        var data = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({ data })
    }
    catch (error) {
        console.log(error)
    }
})