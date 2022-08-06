require('./models/User')
const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const bodyParser = require('body-parser')
const requireAuth = require('./middleware/requireAuth')

const app = express()

app.use(bodyParser.json())
app.use(authRoutes)

const mongoUri = 'mongodb+srv://admin:nDWLb1SVUYXH8XUs@cluster0.zkmz6.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoUri)

mongoose.connection.on('connected',()=>{
    console.log("connected to mongose")
})

mongoose.connection.on('error',()=>{
    console.log("connection error")
})


app.get('/',requireAuth ,(req, res)=>{
    res.send(`Your Email: ${req.user.email}`)
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})
