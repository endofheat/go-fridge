"use strict";

let Models = require("../models");
const { param } = require('../routes/userRoutes');
const bcrypt = require("bcryptjs");
const { createToken } = require("../middleware/auth");
const kickbox = require("kickbox").client(process.env.KICKBOX_API_KEY).kickbox();

const getUsers = (res) => {
    // get all users from database
    Models.User.find({})
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    // catch error, shows error message
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, data: err.message });
    });
};

const getUserByID = (req, res) => {
    // get user by userID from database
    Models.User.findOne({ _id: req.params.id })
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    // catch error, shows error message
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
};

const registerUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        // Validate user input
        if (!(email && password && userName)) {
            res.send({ result: "All input is required" }); // code 400, 'Bad Request'
        return; // when sending responses and finishing early, manually return or end the function to stop further processing
    }

    // Validate if user exists in database
    const oldUser = await Models.User.findOne({ where: { email } });

    if (oldUser) {
        res.send({ result: "User already exists. Please login" }); // code 409, 'Conflict'
        return; // when sending responses and finishing early, manually return or end the function to stop further processing
    }
    // Verify email using Kickbox
    const kickboxResponse = await kickbox.verify(email);

    if (!kickboxResponse.success || kickboxResponse.result === "undeliverable" || kickboxResponse.disposable) {
        res.send({ result: "Invalid email address" });
        return;
    }

    // Encrypt user password
    let encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in database
    const userMetadata = await Models.User.create({
        userName,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
    });
    const user = userMetadata.get({ plain: true }); // get just the user fields, no extra sequelize metadata

    // Create token
    const token = createToken(user.id, email);

    // save user token to send back to front-end
    user.token = token;

    // return new user
    res.send({ result: "User successfully registered", data: user });
    } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message })
    }
};

const updateUser = (req, res) => {
    Models.User.findByIdAndUpdate(req.params.id, req.body, { new: true }
    ).then((data) => {
        res.send({ result: 'User updated successfully', data: data })
    }).catch(err => {
        res.send({ result: 500, error: err.message })
    })
}

const deleteUser = (req, res) => {
    Models.User.findByIdAndDelete(req.params.id
    ).then(function (data) {
        res.status(200).json({ result: 'User deleted successfully', data: data })
    }).catch(err => {
        res.send({ result: 500, error: err.message })
    })
}


const loginUser = async (req, res) => {
    try {
        // Get user input from request body
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.send({ result: "All input is required" });
            return; // when sending responses and finishing early, manually return or end the function to stop further processing
        }
        // Validate if user exists in our database
        const user = await Models.User.findOne({ email: email }).lean();

        // if they do exist, make sure their password matches - need to check encrypted version of password
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token for use based on their id and email
            const token = createToken(user.id, email);
            // save user token
            user.token = token;

            console.log(user)

            // send back logged in user details including token
            res.send({ result: 'User successfully logged in', data: user });
        }
        else res.send({ result: "Invalid user credentials" });
    } catch (err) {
        console.log(err);
        res.send({ result: 500, error: err.message })
    }
}

module.exports = {
    getUsers,
    getUserByID,
    registerUser,
    updateUser,
    deleteUser,
    loginUser,
};
