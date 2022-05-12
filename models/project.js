const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Project = new Schema(
  { 
    user_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
    recipe_id: { type: Schema.Types.ObjectId, ref: 'recipe_id', required: true },
    startDate: {type: Date, default:Date(), required: true},
    tooOld: { type: Number, required: false },
    readyIn: { type: Number, required: false },
    checkInterval: { type: Number, required: false },
    reminders: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("projects", Project);