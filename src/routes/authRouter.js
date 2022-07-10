const { Router } = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const authRouter = Router()

authRouter.post('/auth/register' , registerUser)
authRouter.post('/auth/login', loginUser)
module.exports = authRouter
