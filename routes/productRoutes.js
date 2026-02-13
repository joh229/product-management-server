const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/productController");

const auth = require("../middleware/auth");
const role = require("../middleware/role");
const validate = require("../middleware/validate");

const {
  createProductSchema,
  updateProductSchema
} = require("../validators/productSchema");


// ======================================
// PUBLIC ROUTES
// Anyone can view products
// ======================================

router.get("/", ctrl.getProducts);

router.get("/:id", ctrl.getProduct);


// ======================================
// ADMIN ONLY ROUTES
// Requires login + admin role
// ======================================

// Create Product
router.post(
  "/",
  auth,
  role("admin"),
  validate(createProductSchema),
  ctrl.createProduct
);

// Update Product
router.put(
  "/:id",
  auth,
  role("admin"),
  validate(updateProductSchema),
  ctrl.updateProduct
);

// Delete Product
router.delete(
  "/:id",
  auth,
  role("admin"),
  ctrl.deleteProduct
);


module.exports = router;