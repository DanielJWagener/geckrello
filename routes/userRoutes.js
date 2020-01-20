const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.get("/logout", userController.logout);
router.get("/current_user", userController.getCurrentUser);

module.exports = router;
