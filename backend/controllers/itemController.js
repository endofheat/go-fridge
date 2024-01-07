'user strict';

const Models = require('../models');

const getItems = (res) => {
    // get all items from database
    Models.Item.findAll({})
    .then(function (data) {
        res.send({result: 200, data: data })
    })
    .catch((err) => {
        console.log(err);
        res.send({ result: 500, data: err.message }); // code 500, 'Internal Server Error'
    })
}

const getItemByName = (req, res) => {
    // filter items from database by start letter
    let startLetter = req.query.letter;
    Models.Item.find({})
    .then((data) => {
        let nameMatchedItems = data.data.filter(
            char => char.itemName.toUpperCase().starsWith(startLetter.toUpperCase()) // use toUpperCase() to get exact match
            )
        res.send({ result: 200, data: nameMatchedItems })
    })
    .catch((err) => {
        console.log(err);
        res.send({result: 204, data: err.message }); // code 204, 'No Content'
    })
}

const getItemByTag = (req, res) => {
    let tagName = req.query.text;
    Models.Item.find({})
    .then((data) => {
        let tagMatchedItems = data.data.filter(

            )
        res.send({ result: 200, data: tagMatchedItems })
    })
}



module.exports = {
    getItems,
    getItemByName,
    getItemByTag,
}