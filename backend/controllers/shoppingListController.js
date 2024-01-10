'use strict';

let Models = require('../models');

const getLists = (res) => {
    // get all shopping lists from database
    Models.ShoppingList.find({})
    .then((data) => {
        res.send({result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ result: "Internal Server Error", data: err.message });
    })
}

const getListByName = async (req, res) => {
    // get list by listName, exact match
    try {
        const listName = req.query.name;

        if (!listName) {
            res.status(400).send({ result: "Shopping list name is required" });
            return;
        }

        const matchedList = await Models.ShoppingList.findOne({ listName: listName }).lean();

        if (!matchedList) {
            res.status(204).send({ result: "No shopping list found with the specified name" });
            return;
        }

        res.status(200).send({ result: "List successfully retrieved", data: matchedList });
    } catch (err) {
        console.error(err);
        res.status(500).send({ result: "Internal Server Error", error: err.message });
    }
};


const addList = async (req, res) => {
    console.log(req.body);
    try {
        const listName = req.body;
        // Validate List input
        if (!listName ) {
            res.status(400).send({ result: "Shopping list name is required" }); // code 400, 'Bad Request'
            return; // when sending responses and finishing early, manually return or end the function to stop further processing
        }

    // Validate if List exists in database
    const oldList = await Models.ShoppingList.findOne({ listName: listName.listName });

    if (oldList) {
        res.status(409).send({ result: "List already exists." }); // code 409, 'Conflict'
        return;
    }

    // Create List in database
    const newList = new Models.ShoppingList(req.body);
    const savedList = await newList.save(); // get just the List fields

    // return new List
    res.send({ result: "List successfully added", data: savedList });
    } catch (err) {
    console.log(err);
    res.status(500).send({ result: "Internal Server Error", error: err.message });
    }
};

const updateList = (req, res) => {
    Models.ShoppingList.findByIdAndUpdate(req.params.id, req.body, {new: true} 
        ).then((data) => {
        res.send({result: 'List updated successfully', data: data })
        }).catch(err => {
            res.status(500).send({ result: "Internal Server Error", error: err.message });
    })
}

const deleteList = (req, res) => {
    Models.ShoppingList.findByIdAndDelete(req.params.id
    ).then((data) => {
        res.send({ result: 'List deleted successfully', data: data })
    }).catch(err => {
        res.status(500).send({ result: "Internal Server Error", error: err.message });
    })
}

module.exports = {
    getLists,
    getListByName,
    addList,
    updateList,
    deleteList,
}