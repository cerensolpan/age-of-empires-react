const units = require("../../src/age-of-empires-units.json");

const getUnit = (req, res) => {
  if(!req.query.id || req.query.id===''){
    res.send("Please send valid id")
  }
    res.send(units.units.find(item => item.id.toString() === req.query.id))
};

module.exports = {
  getUnit,
};
