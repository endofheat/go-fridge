"use strict";
let Models = require("../models");

const getFridges = (res) => {
    // get all fridges from database
    Models.Fridge.find({})
    .then((data) => {
        res.send({result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, data: err.message }); // code 500, 'Internal Server Error'
    })
}


const getFridgeItem = (req, res) => {
    // finds all items for a given fridge and populates with details
    Models.Fridge.find({ fridgeItemID: req.params.id })
    .populate({path:'fridgeItem'})
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
};

const createFridge = (data, res) => {
    new Models.Fridge(data)
    .save()
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
}

const updateFridge = (req, res) => {
    Models.Fridge.findByIdAndUpdate(req.params.id, req.body.id, { new: true })
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
}

const deleteFridge = (req, res) => {
    Models.Fridge.findByIdAndDelete(req.params.id)
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
}

module.exports = {
    getFridges,
    getFridgeItem,
    createFridge,
    updateFridge,
    deleteFridge,
};