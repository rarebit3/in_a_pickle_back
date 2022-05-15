const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    ingredientList: { type: String, required: true },
    brineStrength: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("recipes", Recipe);