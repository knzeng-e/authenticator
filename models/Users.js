const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        min: 4,
        max: 255,
        required: true
    },

    lastName: {
        type: String,
        min: 4,
        max: 255,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        min: 6,
        max: 1024,
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
});

const userModel = mongoose.model("user", userSchema)

module.exports = userModel;