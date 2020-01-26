const express = require("express");
const listController = require("../controllers/listController");
const { requireLogin } = require("../controllers/authController");

const router = express.Router();

router.use(requireLogin);

router
  .route("/")
  .get(listController.getAllLists)
  .post(requireLogin, listController.createList);

router
  .route("/:id")
  .get(listController.getList)
  .patch(listController.updateList)
  .delete(listController.deleteList);

module.exports = router;
