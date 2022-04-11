const express = require("express");
const router = express.Router();
const mypageController = require("../controllers/mypage/index");
const tripController = require("../controllers/mypage/trip");

router.get("/", mypageController.get);
router.get("/trip", tripController.get);
router.post("/trip", tripController.post);
// router.post("/", mypageController.post);

module.exports = router;
