const express = require("express")
require("./connection")
//Paymentmodel import
var Paymentmodel = require("./models/PaymentPage")
const{error} = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello world")
})
app.get("/trial",(req,res)=>{
    res.send("trial api")
})
//add
app.post("/add",async (req,res)=>{
    try{
        await new Paymentmodel(req.body).save()
        res.send({message:"data added"})
    }catch(error){
        console.log(error)
    }
})

//view
app.get("/view",async(req,res)=>{
    try{
        var data = await Paymentmodel.find()
        res.send(data)
    }catch (error){
        console.log(error)
    }
})

app.listen(3004,()=>{
    console.log("server is running on 3004")
})