// const units = require("../../src/age-of-empires-units.json");
const { unitsService } = require("../services");

const getAllUnits = async (req, res) => {
  try {
    const units = await unitsService.getAllUnits();
    return res.send(units);
  } catch (err) {
    res.send({
      error: "Units get operation is failed" + err,
    });
  }
};

const getFilteredUnits = async (req, res) => {
  const ageFilter = req.body.age;
  const costFilter = req.body.cost;

  let query = {};
  if (ageFilter && ageFilter !== "All") query.age = ageFilter;
  if (costFilter?.Wood)
    query = Object.assign(query, {
      "cost.Wood": { $gte: costFilter.Wood },
    });
  if (costFilter?.Food)
    query = Object.assign(query, {
      "cost.Food": { $gte: costFilter.Food },
    });
  if (costFilter?.Gold)
    query = Object.assign(query, {
      "cost.Gold": { $gte: costFilter.Gold },
    });

  try {
    const units = await unitsService.getFilteredUnits(query);
    res.send(units);
  } catch (err) {
    res.send({
      error: "Units filtered post operation is failed" + err,
    });
  }
};

const getUnit = async (req, res) => {
  try {
    const unit = await unitsService.getUnit({id:req.params.id});
    return res.send(unit);
  } catch (err) {
    res.send({
      error: "Unit get operation is failed" + err,
    });
  }
};

module.exports = {
  getAllUnits,
  getFilteredUnits,
  getUnit
};
