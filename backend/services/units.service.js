const { Units } = require("../models");

const getAllUnits = async () => {
  const units = await Units.find();
  return units;
};

const getFilteredUnits = async (query) => {
  const units = await Units.find(query);
  return units;
};

module.exports = { getAllUnits, getFilteredUnits };
