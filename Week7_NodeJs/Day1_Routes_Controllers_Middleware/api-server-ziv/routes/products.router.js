const express = require("express");
// const { products } = require("../config/data.js");

const { auth } = require("../middlewares/utils.js");

const {
  getAllProducts,
  getProductById,
  searchProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products.controller.js");

const router = express.Router();

router.delete("/api/:id", deleteProduct);
/** update product */
router.put("/:id", updateProduct);
/** Create new product - POST */
router.post("/", createProduct);
// router.get()
router.get("/api/", auth, getAllProducts);
router.get("/:id", getProductById);
router.get("/search", searchProduct);

module.exports = router;
