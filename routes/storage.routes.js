const express = require("express");
const routes = express.Router();
const uploadFile = require("../utils/handleStorage");
const { createItems } = require("../controllers/storage.controller");

routes.post("/", uploadFile, createItems);

module.exports = routes;
