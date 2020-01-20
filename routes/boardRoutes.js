const express = require("express");
const boardController = require("../controllers/boardController");
const userController = require("../controllers/userController");

const router = express.Router();

router
  .route("/")
  .post(userController.requireLogin, boardController.createBoard);

module.exports = router;
