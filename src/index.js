const express = require('express')
const mongoose = require('mongoose')
const app = express()


const mongoUri = 'mongodb+srv://admin:nDWLb1SVUYXH8XUs@cluster0.zkmz6.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoUri)

mongoose.connection.on('connected',()=>{
    console.log("connected to mongose")
})

mongoose.connection.on('error',()=>{
    console.log("connection error")
})


app.get('/',(req,res)=>{
    res.send('Test')
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})
