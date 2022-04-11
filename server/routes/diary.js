const express = require("express");
const router = express.Router();
const diaryController = require("../controllers/diary");

router.get("/", diaryController.get);
router.post("/", diaryController.post);

module.exports = router;
