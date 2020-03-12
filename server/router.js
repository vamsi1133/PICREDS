const express = require("express");
const router = express.Router();
const register_user = require("./services/register")
const login = require("./services/login")
const verifyToken = require("./verifyToken");

module.exports = router;

router.post("/register", register_user.register);

router.get("/mytest", verifyToken, register_user.me);

router.post("/authenticate", login.authenticate);