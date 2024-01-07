'use strict';

const Models = require('../models');
const bcrypt = require('bcryptjs');


const getUsers = (res) => {
    // get all users from database
    Models.User.findAll({})
    .then(function (data) {
        res.send({ result: 200, data: data });
    })
    // catch error, shows error message
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, data: err.message });
    })
};

const getUserByID = (req, res) => {
    // get user by userID from database
    Models.User.findAll({ where: { id: req.params.id}})
    .then(function (data) {
        res.send({ result: 200, data: data });
    })
    // catch error, shows error message
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, data: err.message });
    })
}

module.exports = {
    getUsers,
    getUserByID,
}