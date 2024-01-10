"use strict";
let Models = require("../models");

const getFridgeItem = (res) => {
    // get all fridgeItems
    Models.FridgeItem.find({})
    .then((data) => {
        res.send({result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ result: "Internal Server Error", data: err.message });
    })
}

const getAllFridgeItems = (res) => {
    // get all items assigned to a user
    Models.FridgeItem.find({ userID: req.params.id })
    .populate({path:'user'})
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
}

const createFridgeItem = (rep, res) => {
    new Models.FridgeItem(rep)
    .save()
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
}

const updateFridgeItem = (req, res) => {
    Models.FridgeItem.findByIdAndUpdate(req.params.id, req.body/* .id */, { new: true })
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
}

const deleteFridgeItem = (req, res) => {
    Models.FridgeItem.findByIdAndDelete(req.params.id)
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
}

module.exports = {
    getFridgeItem,
    getAllFridgeItems,
    createFridgeItem,
    updateFridgeItem,
    deleteFridgeItem,
};