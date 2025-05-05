const express = require("express");
const cors = require("cors");
const v1Routes = require("./api/v1/routes/products");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1", v1Routes);

module.exports = app;
