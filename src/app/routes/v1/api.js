const express = require("express");
const router = new express.Router();
const crypto = require("../../controller/Crypto");

router.post("/fetch", crypto.fetch);
module.exports = router;
