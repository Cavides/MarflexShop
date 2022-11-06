const express = require("express");

const {
  getAllProductsHandler,
  getProductsHandler,
  createProductsHandler,
  deleteProductsHandler,
  updateProductsHandlres,
} = require("./Products_controllers");

const { isAuthenticated } = require("../Auth/auth_services");

const router = new express.Router();

router.get("/", getAllProductsHandler);

router.get("/:id", getProductsHandler);

router.post("/", createProductsHandler);

router.patch("/", isAuthenticated, updateProductsHandler);

router.delete("/", isAuthenticated, deleteProductsHandler);

module.exports = router;