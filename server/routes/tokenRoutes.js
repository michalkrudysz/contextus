const express = require("express");
const router = express.Router();
const { checkToken } = require("../controllers/checkToken");

router.post("/check-token", checkToken);

module.exports = router;
