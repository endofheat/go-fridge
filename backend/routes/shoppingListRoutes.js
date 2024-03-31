let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/shoppingListController");

// GET all shopping lists
router.get('/', (req, res) => {
    Controllers.getLists(res);
});

// GET shopping list by name
router.get('/:listName', (req, res) => {
    Controllers.getListByName(req, res);
});

// POST add a new shopping list
router.post('/create', (req, res) => {
    Controllers.addList(req, res);
});

// PUT update a shopping list
router.put('/:id', (req, res) => {
    Controllers.updateList(req, res);
});

// DELETE delete existed shopping list
router.delete('/:id', (req, res) => {
    Controllers.deleteList(req, res);
});

module.exports = router;