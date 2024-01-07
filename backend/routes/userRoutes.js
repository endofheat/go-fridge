const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/userController");
const { verifyToken } = require("../middleware/auth");

router.get('/', verifyToken, (req, res) => { // uses authentication middleware function to verify the user token before controller function runs
    Controllers.getUsers(res);
})

router.post('/login', (req, res) => {
    Controllers.loginUser(req, res)
})

router.post('/register', (req, res) => {
    Controllers.registerUser(req, res)
})

router.put('/:id', (req, res) => {
    Controllers.updateUser(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.deleteUser(req, res)
})

module.exports = router;