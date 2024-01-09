let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/fridgeController");

// GET all fridges
router.get('/', (req, res) => {
    Controllers.getFridges(res);
});

// GET items assigned to the fridge
router.get('/fridgeItem/:id', (req, res) => {
    Controllers.getFridgeItem(req, res);
});

// POST add a new fridge
router.post('/create', (req, res) => {
    Controllers.createFridge(req, res);
});

// PUT update an fridge
router.put('/:id', (req, res) => {
    Controllers.updateFridge(req, res);
});

// DELETE delete existed fridge
router.delete('/:id', (req, res) => {
    Controllers.deleteFridge(req, res);
});

module.exports = router;