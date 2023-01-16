const express = require("express");

const unitsRouter = require("./units.route");
const unitRouter = require("./unit.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/units",
    route: unitsRouter,
  },
  {
    path: "/unit",
    route: unitRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
