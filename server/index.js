const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');

const app=express();
app.use(cors());
app.use(express.json());

app.get('/',(res,req)=>{
    req.send('Welcome ')
})

app.listen(4000,()=>{
    console.log("Server running on http://Localhost:4000")
})
