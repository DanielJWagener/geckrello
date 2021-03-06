const express = require("express");
const cardController = require("../controllers/cardController");
const { requireLogin } = require("../controllers/authController");

const router = express.Router();

router.use(requireLogin);

router
  .route("/")
  .get(cardController.getAllCards)
  .post(requireLogin, cardController.createCard);

router
  .route("/:id")
  .get(cardController.getCard)
  .patch(cardController.updateCard)
  .delete(cardController.deleteCard);

router
  .route("/:cardId/checklist/:itemId")
  .patch(cardController.updateChecklistItem)
  .delete(cardController.deleteChecklistItem);

module.exports = router;
