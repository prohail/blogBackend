const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");
const {
  createUser,
  updateUser,
  getUserByID,
  getAllUsers,
  deleteUser,
} = require("../controllers/UserController");

// category routes
router.post("/store/category", createCategory);
router.get("/get/categories", getAllCategories);
router.post("/update/category", updateCategory);
router.get("/delete/category/:id", deleteCategory);

// User Routes
router.post("/user", createUser);
router.post("/user/update", updateUser);
router.get("/user/:id", getUserByID);
router.get("/users", getAllUsers);
router.delete("/delete/user/:id", deleteUser);

module.exports = router;
