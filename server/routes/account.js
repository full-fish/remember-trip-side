const express = require("express");
const router = express.Router();
const mypageController = require("../controllers/account/index");

router.get("/", mypageController.get);
// router.post("/", mypageController.post);

module.exports = router;
