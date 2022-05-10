const db = require("../db");
const Project = require("../models/project");
const Recipe = require("../models/recipe");
const User = require("../models/user");


db.on("error", console.error.bind(console, "MongoDB connection error:"));


const main = async () => {
    let testUser = await User.find({name: 'Tbond'})
    let testRecipe = await Recipe.find({name: 'Dill Half Sour'})
    const recipes = [
{
    user_id: testUser[0]._id,
    recipe: testRecipe[0]._id,
    startDate: 'May 10, 2022',
    readyIn: 7,
    tooOld: 90,
    checkInterval: 14,
    reminders: false
},
];

await Project.insertMany(recipes);
console.log("Created a project!");
};
const run = async () => {
await main();
db.close();
};

run();