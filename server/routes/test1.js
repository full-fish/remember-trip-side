const express = require("express");
const router = express.Router();
const test1Controller = require("../controllers/test1/index");

router.get("/", test1Controller.get);
// router.post("/", userController.post);

module.exports = router;
