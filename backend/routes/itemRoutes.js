let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/itemController");

// GET all items
router.get('/', (req, res) => {
    Controllers.getItems(res);
});

// GET items by name
router.get('/name', (req, res) => {
    Controllers.getItemByName(req, res);
});

// POST add a new item
router.post('/', async (req, res) => {
    await Controllers.addItem(req, res);
});

// PUT update an item
router.put('/:id', (req, res) => {
    Controllers.updateItem(req, res);
});

// DELETE delete existed item
router.delete('/:id', (req, res) => {
    Controllers.deleteItem(req, res);
});

module.exports = router;