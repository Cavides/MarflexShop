const express = require("express");

const {
  getAllProductsHandler,
  getProductsHandler,
  createProductsHandler,
  deleteProductsHandler,
  updateProductsHandler,
} = require("./Products_controllers");

const { isAuthenticated } = require("../Auth/auth_services");

const router = new express.Router();

router.get("/", getAllProductsHandler);

router.get("/:_id", getProductsHandler);

router.post("/", createProductsHandler);

router.patch("/", isAuthenticated, updateProductsHandler);

router.delete("/", deleteProductsHandler);

module.exports = router;