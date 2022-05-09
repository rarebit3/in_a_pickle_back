const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    recipeCollection: [{ type: Schema.Types.ObjectId, ref: 'recipes' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);