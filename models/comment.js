const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
    recipe_id: { type: Schema.Types.ObjectId, ref: 'recipe_id' },
    commentBody: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("comments", Comment);