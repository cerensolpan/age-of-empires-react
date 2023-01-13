const express = require("express");

const unitRouter = require("./units.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/units",
    route: unitRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
