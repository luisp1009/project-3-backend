const express = require("express");

const { isAuthenticated } = require("../middleware/jwt.middleware");
const bcryptjs = require("bcryptjs");
const User = require("../models/User.model");
const {
  signupController,
  loginController,
} = require("../controllers/auth.controller");

const { 
    updateUser,

    } = require('../controllers/userUpdateController')

const { deleteUser } = require('../controllers/userDeleteController')

const router = express.Router();
router.post("/signup", signupController);
router.post("/login", loginController);
router.get("/verify", isAuthenticated, (req, res, next) => {
  console.log(req.payload);
  res.status(200).json(req.payload);
});

router.get('/:id/delete' , deleteUser)

router.post('/:userId', updateUser);

module.exports = router;
