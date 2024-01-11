"use strict";
let Models = require("../models");

const getFridgeItem = (res) => {
    // get all fridgeItems with the assigned item name and user name
    Models.FridgeItem.find({})
    /* .populate('itemID', 'itemName -_id')
    .populate('userID', 'userName -_id') */
    .then((data) => {
        res.send({result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ result: "Internal Server Error", data: err.message });
    })
}

const getFridgeItemsByUser = async(req, res) => {
    // get all items assigned to a user
    try {
        const userID = req.params.userID;
        
        if(!userID) {
            res.status(400).send({ result: 'User ID is required'});
            return;
        }

        const matchedItem = await Models.FridgeItem.find({ userID: userID }).lean()
        .populate('itemID', 'itemName -_id')
        .populate('userID', 'userName -_id');


        if (!matchedItem) {
            res.status(204).send({ result: 'No item found with the specified user id'});
            return;
        }

        res.status(200).send({ result: "Items successfully retrieved", data: matchedItem });
    } catch (err) {
        console.error(err);
        res.status(500).send({ result: "Internal Server Error", error: err.message });
    }
}

const createFridgeItem = (rep, res) => {
    new Models.FridgeItem(rep.body)
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
    Models.FridgeItem.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
        res.status(202).json({ result: 'Fridge item updated successfully', data: data })
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
    // getAllFridgeItems,
    getFridgeItemsByUser,
    createFridgeItem,
    updateFridgeItem,
    deleteFridgeItem,
};