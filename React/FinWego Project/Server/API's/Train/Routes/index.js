const express = require("express");
const router = express.Router();

//Controllers
const getAllTrainController = require("../Controller/GetAllTrainsController");

router.get("/", (req, res) => {
    res.send("You are in Train Service");
});
router.get("/train-list", getAllTrainController);

module.exports = router;