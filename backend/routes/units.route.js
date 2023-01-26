const express = require("express");

const { unitsController } = require("../controllers/index");

const unitsRouter = express.Router();

unitsRouter.get("/", unitsController.getAllUnits);
unitsRouter.post("/", unitsController.getFilteredUnits);
unitsRouter.get("/:id", unitsController.getUnit);

module.exports = unitsRouter;
