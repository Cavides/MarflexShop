const express = require("express");

const {
  getAllCatalogoHandler,
  getCatalogoHandler,
  createCatalogoHandler,
  deleteCatalogoHandler,
  updateCatalogoHandlres,
} = require("./catalogo_controllers");

const { isAuthenticated } = require("../Auth/auth_services");

const router = new express.Router();

router.get("/", getAllCatalogoHandler);

router.get("/:id", getCatalogoHandler);

router.post("/", createCatalogoHandler);

router.patch("/", isAuthenticated, updateCatalogoHandler);

router.delete("/", isAuthenticated, deleteCatalogoHandler);

module.exports = router;