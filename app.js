const express = require("express");
const data = require("./studentData.json");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ data: "Service is running!" });
});

module.exports = app;
