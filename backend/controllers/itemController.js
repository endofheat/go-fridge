'use strict';

let Models = require('../models');

const getItems = (res) => {
    // get all items from database
    Models.Item.find({})
    .then((data) => {
        res.send({result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, data: err.message }); // code 500, 'Internal Server Error'
    })
}

const getItemByName = async (req, res) => {
    // get item by itemName, exact match
    try {
        const itemName = req.params.itemName;

        if (!itemName) {
            res.status(400).send({ result: "Item name is required" });
            return;
        }

        const matchedItem = await Models.Item.findOne({ itemName: itemName }).lean();

        if (!matchedItem) {
            res.status(204).send({ result: "No Item found with the specified name" });
            return;
        }

        res.status(200).send({ result: "Item successfully retrieved", data: matchedItem });
    } catch (err) {
        console.error(err);
        res.status(500).send({ result: "Internal Server Error", error: err.message });
    }
};

// const getItemByName = (req, res) => {
//     // filter items from database by start letter
//     let startLetter = req.query.letter;
//     Models.Item.find({})
//     .then((data) => {
//         let nameMatchedItems = data.filter(
//             item => item.itemName.toUpperCase().starsWith(startLetter.toUpperCase()) // use toUpperCase() to get exact match
//             )
//         res.send({ result: 200, data: nameMatchedItems })
//     })
//     .catch((err) => {
//         console.log(err);
//         res.send({result: 204, data: err.message }); // code 204, 'No Content'
//     })
// }

const addItem = async (req, res) => {
    try {
        const { itemName, quantity, unit, expireDate } = req.body;
        // Validate Item input
        if (!(itemName && quantity && unit && expireDate)) {
            res.status(400).json({ result: "All input is required" }); // code 400, 'Bad Request'
            return; // when sending responses and finishing early, manually return or end the function to stop further processing
        }

    // Validate if Item exists in database
    const oldItem = await Models.Item.findOne({ itemName: itemName });

    if (oldItem) {
        res.status(409).json({ result: "Item already exists. " }); // code 409, 'Conflict'
        return;
    }

    // Create Item in database
    const newItem = new Models.Item({
        itemName,
        quantity,
        unit,
        expireDate,
    });
    const savedItem = await newItem.save(); // get just the Item fields, no extra sequelize metadata

    // return new Item
    res.status(201).json({ result: "Item successfully added", data: savedItem });
    } catch (err) {
    console.log(err);
    res.status(500).json({ result: err.message });
    }
};

const updateItem = (req, res) => {
    Models.Item.findByIdAndUpdate(req.params.id, req.body, {new: true} 
        ).then((data) => {
            res.status(202).json({result: 'Item updated successfully', data: data })
        }).catch(err => {
            res.status(500).json({ result: err.message })
    })
}

const deleteItem = (req, res) => {
    Models.Item.findByIdAndDelete(req.params.id
    ).then((data) => {
        res.status(200).json({ result: 'Item deleted successfully', data: data })
    }).catch(err => {
        res.status(500).json({ result: err.message })
    })
}

module.exports = {
    getItems,
    getItemByName,
    // getItemByItem,
    addItem,
    updateItem,
    deleteItem,
}