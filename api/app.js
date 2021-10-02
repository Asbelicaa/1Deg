const express = require("express");
const helmet = require("helmet");
const path = require("path");
const sanitize = require("sanitize");

const app = express();
//ROUTES

const exampleRoute = require("./routes/exampleRoute");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());
app.use(helmet());
app.use(sanitize.middleware);

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api", exampleRoute);

module.exports = app;
