const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/signup", userController.signup.post);
router.post("/login", userController.login.post);
// router.post("/logout", userController.logout.post);
router.delete("/withdrawal/:userId", userController.withdrawal.delete);

module.exports = router;
