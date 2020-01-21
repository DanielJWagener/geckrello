const express = require("express");
const boardController = require("../controllers/boardController");
const { requireLogin } = require("../controllers/userController");

const router = express.Router();

router
  .route("/")
  .get(boardController.getAllBoards)
  .post(requireLogin, boardController.createBoard);

router
  .route("/:id")
  .get(boardController.getBoard)
  .patch(requireLogin, boardController.updateBoard)
  .delete(requireLogin, boardController.deleteBoard);

module.exports = router;
