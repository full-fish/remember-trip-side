const express = require("express");
const router = express.Router();
const accountrController = require("../controllers/mypage/index");

router.get("/", accountrController.get);
router.post("/", accountrController.post);

module.exports = router;
