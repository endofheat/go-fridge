const express = require("express");
let router = express.Router();
const Controllers = require("../controllers/tagController");

// GET all tags
router.get('/', (req, res) => {
    Controllers.getTags(res);
});

// GET tag by name
router.get('/', (req, res) => {
    Controllers.getTagByName(req, res);
});

// POST add a new tag
router.post('/create', (req, res) => {
    Controllers.addTag(req, res);
});

// PUT update a tag
router.put('/:id', (req, res) => {
    Controllers.updateTag(req, res);
});

// DELETE delete existed tag
router.delete('/:id', (req, res) => {
    Controllers.deleteTag(req, res);
});

module.exports = router;