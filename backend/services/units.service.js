const { Units } = require("../models");

const getAllUnits = async () => {
  const units = await Units.find();
  return units;
};

const getFilteredUnits = async (query) => {
  const units = await Units.find(query);
  return units;
};

const getUnit = async (id) =>{
  const unit = await Units.find(id);
  return unit
}

module.exports = { getAllUnits, getFilteredUnits, getUnit };
