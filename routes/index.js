// Este archivo es para el manejo de rutas dinamicas
const express = require("express");
const fs = require("fs");
const routes = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
  // tracks.routes.js [tracks, routes, js]
  return fileName.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file); // users, storage, tracks
  if (name !== "index") {
    routes.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = routes;
