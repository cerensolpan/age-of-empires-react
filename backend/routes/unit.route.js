const express = require("express");

const { unitController } = require("../controllers/index");

const unitRouter = express.Router();

unitRouter.get("/", unitController.getUnit);

module.exports = unitRouter;
