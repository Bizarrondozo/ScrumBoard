const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

//GET POST PUT DELETE
// http://localhost:3001/api/role/registerRole
router.post("/registerUser", UserController.registerUser);
// http://localhost:3001/api/role/listRole
router.get("/listUser/:name?", UserController.listUser);

module.exports = router;