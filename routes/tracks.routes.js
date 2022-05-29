const express = require("express");
const routes = express.Router();
const {
  getItems,
  getItem,
  createItems,
} = require("../controllers/tracks.controller");

routes.get("/", getItems);
// routes.get("/:id", getItem);
routes.post("/", createItems);

module.exports = routes;
