const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recipe = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
    name: { type: String, required: true },
    description: { type: String, required: true },
    recipe: { type: String, required: true },
    typeOfPickle: { type: String, required: true },
    comments: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'comments',
    }],
    likes: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("recipes", Recipe);