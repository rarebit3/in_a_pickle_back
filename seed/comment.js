const db = require("../db");
const Comment = require("../models/comment");


db.on("error", console.error.bind(console, "MongoDB connection error:"));


const main = async () => {
    // let testUser = await User.find({name: 'Tbond'})
    let testRecipes = await Recipe.find()
    const comments = [
{
    user_id: testUser[0]._id,
    recipe_id: testRecipes[0]._id,
    commentBody: 'Good simple Sauerkraut'
},
{
    user_id: testUser[0]._id,
    recipe_id: testRecipes[1]._id,
    commentBody: 'Crowd pleaser. Quick turnaround.'
},
{
    user_id: testUser[0]._id,
    recipe_id: testRecipes[2]._id,
    commentBody: 'Salty and Sour and hot. Not good descriptors for a person; great descriptors for a pickle.'
},
];

await Comment.insertMany(comments);
console.log("Created some pickle comments!");
};
const run = async () => {
await main();
db.close();
};

run();