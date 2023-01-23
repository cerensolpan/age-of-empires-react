const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UnitsSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  expansion: {
    type: String
  },
  age: {
    type: String
  },
  cost: {
    type: Object
  },
  reload_time: {
    type: Number
  },
  movement_rate: {
    type: Number
  },
  line_of_sight: {
    type: Number
  },
  hit_points: {
    type: Number
  },
  attack: {
    type: Number
  },
  armor: {
    type: String
  },
})

const Units = mongoose.model('Units', UnitsSchema)

module.exports = Units