const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recipe = new Schema(
  {
    createdByUser: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    recipe: { type: String, required: true },
    typeOfPickle: { type: String, required: true },
    comments: { type: String, required: false },
    likes: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("recipe", Recipe);