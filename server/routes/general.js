const express = require("express");

const General = require("../controllers/General")

const router = express.Router();

router.get('/', General.home);
router.get('*', General.notFound);

module.exports = router