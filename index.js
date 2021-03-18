const app = require('express')();

const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//import routes

const authRoutes = require('./routes/auth/auth');

//connection to the database

mongoose.connect(
    process.env.MONGODB_CONNECT,
    { useNewUrlParser : true, useUnifiedTopology: true},
    () => {
        console.log("Connected to the database ...")
    }
    )

const PORT = process.env.PORT || 4242

app.get('/', (req, res) => {
    console.log('New request done to the server ==> ')
    res.send("Hello Backend World")
})

app.listen(PORT, () => {
    console.log(`Server is listenning on poryt ${PORT}`)
})