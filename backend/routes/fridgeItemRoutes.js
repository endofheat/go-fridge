let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/fridgeItemController");

// GET items assigned to the fridgeItem lists
router.get('/', (req, res) => {
    Controllers.getFridgeItem(res);
});

/* router.get('/:id', (req, res) => {
    Controllers.getAllFridgeItems(req, res);
}); */

// GET items assigned to the specific user ID
router.get('/:userID', (req, res) => {
    Controllers.getFridgeItemsByUser(req, res);
})

// POST add new fridgeItem list
router.post('/create', (req, res) => {
    Controllers.createFridgeItem(req, res);
});

// PUT update ridgeItem list
router.put('/:id', (req, res) => {
    Controllers.updateFridgeItem(req, res);
});

// DELETE delete existed fridgeItem list
router.delete('/:id', (req, res) => {
    Controllers.deleteFridgeItem(req, res);
});

module.exports = router;