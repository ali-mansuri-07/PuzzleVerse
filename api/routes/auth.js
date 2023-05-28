const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const fetchuser = require('../middleware/fetchuser');
// const fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = "puzzlenia";

//creating a new user using POST:"/api/auth/createUser"
router.post('/createUser', [
    body('username', 'Enter a username of atleast 5 characters').notEmpty(),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 8 characters').isLength({ min: 1 }),
], async (req, res) => {
    //if there are errors return the errors
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //check if the user with same email  or username exits
    let check1 = await User.findOne({ username: req.body.username })
    if (check1) {
        return res.status(400).json({ error: "A user with same username already exits" });
    }
    let check2 = await User.findOne({ email: req.body.email })
    if (check2) {
        return res.status(400).json({ error: "A user with same email already exits" });
    }
    //create a user
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: secPass,
    })
    const data = {
        user: {
            id: user.id
        }
    }
    //creating a token for authorization
    const authToken = jwt.sign(data, JWT_SECRET);
    const success = true;
    res.json({ success, authToken });
})

// Login a user Post request:/api/auth/loginUser

router.post('/loginUser', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    //if there are any errors return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //compare email and password
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: "Invalid Credentials" });
    }
    //if the user is found check the passsword
    const passswordCompare = await bcrypt.compare(password, user.password);
    if (!passswordCompare) {
        return res.status(400).json({ error: "Invalid Credentials" });
    }

    const data = {
        user: {
            id: user.id
        }
    }

    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({ authToken });
})

//route to fetch the user from request to :/api/auth/getuser
//Logged in user details

router.get('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (err) {
        res.status(500).send('internal server error');
    }
})

module.exports = router;