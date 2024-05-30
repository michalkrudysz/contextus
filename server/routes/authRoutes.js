const express = require("express");
const router = express.Router();
const { login } = require("../controllers/login");
const { register } = require("../controllers/register");
const { checkToken } = require("../controllers/checkToken");

router.post("/login", login);
router.post("/register", register);
router.post("/check-token", checkToken);

module.exports = router;
