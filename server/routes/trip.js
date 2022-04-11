const express = require("express");
const router = express.Router();
const tripController = require("../controllers/trip");

router.get("/", tripController.get);
router.post("/", tripController.post);

module.exports = router;
