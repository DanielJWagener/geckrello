const express = require("express");
const boardController = require("../controllers/boardController");

const router = express.Router();

router.route("/").post(boardController.createBoard);

module.exports = router;
