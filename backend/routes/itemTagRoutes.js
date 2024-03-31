let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/itemTagController");

// GET items assigned to the ItemTag list
router.get('/', (req, res) => {
    Controllers.getItemTags(res);
});

// GET items assigned to the specific tag ID
router.get('/:tagID', (req, res) => {
    Controllers.getItemByTag(req, res);
});

// POST add new ItemTag list
router.post('/create', (req, res) => {
    Controllers.createItemTag(req.body, res);
});

// PUT update ridgeItem list
router.put('/:id', (req, res) => {
    Controllers.updateItemTag(req, res);
});

// DELETE delete existed ItemTag list
router.delete('/:id', (req, res) => {
    Controllers.deleteItemTag(req, res);
});


module.exports = router;