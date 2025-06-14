const express = require("express");
const { authCheck } = require("../middleware/auth.middleware");
const { getCurrentUser } = require("../controller/user.controller.js");
const userRouter = express.Router();
userRouter.get("/currentuser", authCheck, getCurrentUser);

module.exports = userRouter;
