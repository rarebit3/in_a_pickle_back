const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recipe = new Schema(
  {

  },
  { timestamps: true }
);

module.exports = mongoose.model("recipe", Recipe);