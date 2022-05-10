const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
    recipe_id: { type: Schema.Types.ObjectId, ref: 'recipe_id' },
    startDate: { type: String, required: true },
    tooOld: { type: String, required: true },
    checkInterval: { type: String, required: true },
    reminders: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("projects", Project);