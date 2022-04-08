const express = require("express");
const router = express.Router();
const test2Controller = require("../controllers/test2/index");

router.get("/", test2Controller.get);
// router.post("/", userController.post);

module.exports = router;
