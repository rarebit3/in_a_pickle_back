const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Commet = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
    commentBody: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);