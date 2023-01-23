const { Units } = require("../models");

const getAllUnits = async () => {
  const units = await Units.find();
  return units;
};

module.exports = { getAllUnits };
