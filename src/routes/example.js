const express = require("express");
const example = express.Router();

example.get("/", async (req, res) => {
  res.render("pages/index");
});

module.exports = example;
