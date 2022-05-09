const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pickle = new Schema(
  {

  },
  { timestamps: true }
);

module.exports = mongoose.model("pickles", Pickles);