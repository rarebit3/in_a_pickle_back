const db = require("../db");
const Recipe = require("../models/recipe");
const User = require("../models/user");


db.on("error", console.error.bind(console, "MongoDB connection error:"));


const main = async () => {
    let testUser = await User.find({name: 'Tbond'})
    const recipes = [
{
    user_id: testUser[0]._id,
    name: 'Sauerkraut',
    description: 'A very basic sauerkraut.',
    ingredientList: 'cabbage, water, salt,',
    brineStrength: '2'
},
{
    user_id: testUser[0]._id,
    name: 'Dill Half Sour',
    description: 'Half sour cucumbers.',
    ingredientList: 'cucumbers, black peppercorn, coriander, bay leaf, garlic, dill, hot pepper salt, water',
    brineStrength: '3.5',
},
{
    user_id: testUser[0]._id,
    name: 'Spicy full sour',
    description: 'Half sour cucumbers.',
    ingredientList: 'cucumbers, black peppercorn, coriander, bay leaf, garlic, dill, lots if hot pepper, salt, water',
    brineStrength: '5',
},
];

await Recipe.insertMany(recipes);
console.log("Created some pickle recipes!");
};
const run = async () => {
await main();
db.close();
};

run();