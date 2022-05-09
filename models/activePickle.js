const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pickle = new Schema(
  {
    uesr: { type: String, required: true },
    recipe: { type: String, required: true },
    startDate: { type: String, required: true },
    tooOld: { type: String, required: true },
    checkInterval: { type: String, required: true },
    reminders: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("pickles", Pickles);