const express = require("express");

const { unitsController } = require("../controllers/index");

const unitRouter = express.Router();

unitRouter.get("/", unitsController.getAllUnits);

module.exports = unitRouter;
