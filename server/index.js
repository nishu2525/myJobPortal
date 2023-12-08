const express = require('express');
const mongoose = require('mongoose');

// const cors =require('cors');
const dotenv = require('dotenv')
dotenv.config;

const app=express();
// app.use(cors());
app.use(express.json());

app.get('/',(res,req)=>{
    req.send('Welcome To My Job Portal')
})

app.get('/health', (req, res) => {
    const serverInfo = {
        serverName: 'My Job Portal ',
        currentTime: new Date(),
        state: 'active',
    };
    res.json(serverInfo);
});


app.listen(4000,()=>{
    mongoose.connect('mongodb+srv://Nishad:nishad123@cluster0.cswx3s3.mongodb.net/?retryWrites=true&w=majority')
    .then(() =>  console.log('Server running on http://localhost:4000'))
    .catch((error) => console.log(error))
    // console.log(`Server running on http://Localhost:4000`)
})


