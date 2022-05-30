const express = require("express");
const routes = express.Router();
const { validatorCreateItem } = require("../validators/tracks");
const {
  getItems,
  getItem,
  createItems,
} = require("../controllers/tracks.controller");

routes.get("/", getItems);
// routes.get("/:id", getItem);
routes.post("/", validatorCreateItem, createItems);

module.exports = routes;
