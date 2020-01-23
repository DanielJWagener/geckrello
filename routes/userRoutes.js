const express = require("express");

const userController = require("../controllers/userController");
const { requireLogin } = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser)
  .patch(requireLogin, userController.updateCurrentUser)
  .delete(requireLogin, userController.deleteCurrentUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.get("/logout", userController.logout);
router.get("/current_user", userController.getCurrentUser);
router.delete("/delete_user", userController.deleteCurrentUser);

module.exports = router;
