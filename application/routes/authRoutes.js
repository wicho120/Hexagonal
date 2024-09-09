const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authenticateToken = require("../middlewares/authMiddleware").authenticateToken;
const UserController = require("../controllers/UserController");
const UserValidator = require("../validator/userValidator")

const UserController = new UserController();
const UserValidator = new UserValidator();

router.post("/user/v1", UserValidator.validateUserData(), (req, res) => UserController.createUser(res, res));

router.post("/login/v1", async (req, res) => {
    const {username, password} = req.body;
    const user = user.find((value, index, array) => {})
})