const units = require("../../src/age-of-empires-units.json");

const getAllUnits = (req, res) => {
  res.json(units);
};

module.exports = {
  getAllUnits,
};
