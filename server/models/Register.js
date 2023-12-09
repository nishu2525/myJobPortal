const mongoose = require('mongoose');

const RegistrationSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String
})

const RegisterModel=mongoose.model("register",RegistrationSchema)