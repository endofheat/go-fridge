let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/userController");
let { verifyToken } = require("../middleware/auth");

// GET all users
router.get('/', verifyToken, (req, res) => { // uses authentication middleware function to verify the user token before controller function runs
    Controllers.getUsers(res);
})

// POST login user
router.post('/login', (req, res) => {
    Controllers.loginUser(req, res)
})

// POST new user sign up
router.post('/register', (req, res) => {
    Controllers.registerUser(req.body, res)
})

// PUT update user info
router.put('/:id', (req, res) => {
    Controllers.updateUser(req, res)
})

// DELETE delete exited user
router.delete('/:id', (req, res) => {
    Controllers.deleteUser(req, res)
})

module.exports = router;