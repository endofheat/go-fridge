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

// const getItemByTag = (req, res) => {
//     let tagName = req.query.text;
//     Models.Item.find({})
//     .then((data) => {
//         let tagMatchedItems = data.data.filter(

//             )
//         res.send({ result: 200, data: tagMatchedItems })
//     })
// }

const registerItem = async (req, res) => {
    try {
        const { ItemName, email, password } = req.body;
        // Validate Item input
        if (!(email && password && ItemName)) {
            res.status(400).json({ result: "All input is required" }); // code 400, 'Bad Request'
        return; // when sending responses and finishing early, manually return or end the function to stop further processing
    }

    // Validate if Item exists in database
    const oldItem = await Models.Item.findOne({ where: { email } });

    if (oldItem) {
        res.status(409).json({ result: "Item already exists. Please login" }); // code 409, 'Conflict'
        return; // when sending responses and finishing early, manually return or end the function to stop further processing
    }
    // Verify email using Kickbox
    const kickboxResponse = await kickbox.verify(email);

    if (!kickboxResponse.success || kickboxResponse.result === "undeliverable" || kickboxResponse.disposable) {
        res.status(400).json({ result: "Invalid email address" });
        return;
    }

    // Encrypt Item password
    let encryptedPassword = await bcrypt.hash(password, 10);

    // Create Item in database
    const ItemMetadata = await Models.Item.create({
        itemName,
        quantity, // sanitize: convert email to lowercase
        password: encryptedPassword,
    });
    const Item = ItemMetadata.get({ plain: true }); // get just the Item fields, no extra sequelize metadata

    // Create token
    const token = createToken(Item.id, email);

    // save Item token to send back to front-end
    Item.token = token;

    // return new Item
    res.status(201).json({ result: "Item successfully registered", data: Item });
    } catch (err) {
    console.log(err);
    res.status(500).json({ result: err.message });
    }
};

module.exports = {
    getItems,
    getItemByName,
    // getItemByTag,
}