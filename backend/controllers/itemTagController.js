'use strict';
let Models = require('../models');

const getItemTags = (res) => {
    // get all items from database
    Models.ItemTag.find({})
    .then((data) => {
        res.send({result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, data: err.message }); // code 500, 'Internal Server Error'
    })
}

const getAllItemTags = (res) => {
    // get all items assigned for tag
    Models.ItemTag.find({ itemID: req.params.id })
    .populate({path:'item'})
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
}

const createItemTag = (rep, res) => {
    new Models.ItemTag(rep)
    .save()
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
}

const updateItemTag = (req, res) => {
    Models.ItemTag.findByIdAndUpdate(req.params.id, req.body.id, { new: true })
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
}

const deleteItemTag = (req, res) => {
    Models.ItemTag.findByIdAndDelete(req.params.id)
    .then((data) => {
        res.send({ result: 200, data: data });
    })
    .catch((err) => {
    console.log(err);
        res.send({ result: 500, data: err.message });
    });
}

module.exports = {
    getItemTags,
    getAllItemTags,
    createItemTag,
    updateItemTag,
    deleteItemTag,
};