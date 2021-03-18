const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const User = require('../../models/Users');

const EmailExists = (_emailAddress) => {
    if (_emailAddress)
        return true;
}

//Signup
router.post("/register", async (req, res) => {
    const email = await User.findOne({email: req.body.email});

    if (EmailExists(email)){
        res.status(400).send(`${req.body.email} is already in Use`);
        return ;
    }

    const salt = await bcrypt.genSalt(42);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //adding a new user

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    })

    try {
        const saveUser = await user.save();
        res.status(200).send("New user created")

    } catch (error){
        req.status(500).send(error)
    }
});

module.exports = router;