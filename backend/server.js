const express = require("express");
const router = require("./routes/index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const Units = require("./models/units.model");
var bodyParser = require('body-parser')

dotenv.config({ path: "../.env" });

const mongoURI = process.env.MONGODB_URL;

const app = express();
const PORT = process.env.PORT || 3500;

app.use(bodyParser())

mongoose
  .connect(mongoURI)
  .then(() => console.log("db connected"))
  .catch((e) => console.log("e", e));
// const data = JSON.parse(
//   fs.readFileSync("./age-of-empires-units.json", "utf-8")
// );

// import data to MongoDB
// const importData = async () => {
//   try {
//     await Units.create(data.units);
//     console.log("data successfully imported");
//     // to exit the process
//     process.exit();
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// importData();

app.use(router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
