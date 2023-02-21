const express = require("express");
// const bodyParser = require("body-parser");
const app = express();

const routes = require("../api/routes");

// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mount api routes
app.use("/api/", routes);

module.exports = app;
