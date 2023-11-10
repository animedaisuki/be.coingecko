const express = require("express");
const router = new express.Router();
const crypto = require("../../controller/Crypto");
const saasMiddleware = require("../../middleware/SaasMiddleware");

router.use(saasMiddleware.saas);
router.get("/currencies/all", crypto.findCurrencies);
router.get("/currencies/:symbol/stats", crypto.fetchStatsBySymbol);

module.exports = router;
