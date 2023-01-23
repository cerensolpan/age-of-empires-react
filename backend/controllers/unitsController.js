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

module.exports = {
  getAllUnits
};
