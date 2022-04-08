const express = require("express");
const router = express.Router();
const test3Controller = require("../controllers/test3/index");

router.get("/", test3Controller.get);
// router.post("/", userController.post);

module.exports = router;
