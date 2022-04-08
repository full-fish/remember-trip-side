// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/user/index");
// const userController = require("../controllers/user/index");
// const userController = require("../controllers/user/index");

// router.post("/signUp", userController.post);
// router.post("/logIn", userController.post);
// router.post("/logOut", userController.post);
// router.delete("/withdrawal", userController.delete);
// // router.post("/", userController.post);

// module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/mypage", userController.mypage.get);
router.post("/signup", userController.signup.post);
router.post("/login", userController.login.post);
router.post("/logout", userController.logout.post);
router.delete("/withdrawal", userController.withdrawal.delete);

module.exports = router;
