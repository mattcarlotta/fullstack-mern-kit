const express = require("express");
const consign = require("consign");

const app = express();

consign({
  cwd: `${process.cwd()}`,
  extensions: [".js"],
  locale: "en-us",
  verbose: false
})
  .include("middlewares")
  .then("database")
  .then("seeds")
  .then("utils")
  .then("models")
  .then("controllers")
  .then("routes")
  .then("server")
  .into(app);
