const express = require("express");

const { unitsController } = require("../controllers/index");

const unitsRouter = express.Router();

unitsRouter.get("/", unitsController.getAllUnits);
unitsRouter.post("/", unitsController.getFilteredUnits);

module.exports = unitsRouter;
