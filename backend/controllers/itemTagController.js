'use strict';
let Models = require('../models');

const getItemTags = (res) => {
    // get all itemTags from database
    Models.ItemTag.find({})
        /* .populate('itemID', 'itemName -_id')
    .populate('tagID', 'tagName -_id') */
    .then((data) => {
        res.send({result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, data: err.message }); // code 500, 'Internal Server Error'
    })
}

const getItemByTag = async(req, res) => {
    // get all items assigned to one tag
    try {
        const tagID = req.params.tagID;
        
        if(!tagID) {
            res.status(400).send({ result: 'Tag ID is required'});
            return;
        }

        const matchedItem = await Models.ItemTag.find({ tagID: tagID }).lean()
        .populate('itemID', 'itemName')
        .populate('tagID', 'tagName -_id');


        if (!matchedItem) {
            res.status(204).send({ result: 'No item found with the specified tag id'});
            return;
        }

        res.status(200).send({ result: "Items successfully retrieved", data: matchedItem });
    } catch (err) {
        console.error(err);
        res.status(500).send({ result: "Internal Server Error", error: err.message });
    }
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
    Models.ItemTag.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
    getItemByTag,
    createItemTag,
    updateItemTag,
    deleteItemTag,
};