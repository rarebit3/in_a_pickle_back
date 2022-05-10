const db = require("../db");
const Recipe = require("../models/cellar");


db.on("error", console.error.bind(console, "MongoDB connection error:"));


const main = async () => {
    let testUser = await User.find({name: 'Tbond'})
    const recipes = [
{
    user_id: testUser[0]._id,
    name: 'Sauerkraut',
    description: 'A very basic sauerkraut.',
    recipe: 'cabbage, water, salt,',
    typeOfPickle: 'fermented, 2',
    likes: 0,
},
{
    user_id: testUser[0]._id,
    name: 'Dill Half Sour',
    description: 'Half sour cucumbers.',
    recipe: 'cucumbers, black peppercorn, coriander, bay leaf, garlic, dill, hot pepper salt, water',
    typeOfPickle: 'fermented, 3.5',
    likes: 0,
},
{
    user_id: testUser[0]._id,
    name: 'Spicy full sour',
    description: 'Half sour cucumbers.',
    recipe: 'cucumbers, black peppercorn, coriander, bay leaf, garlic, dill, lots if hot pepper, salt, water',
    typeOfPickle: 'fermented, 5',
    likes: 0,
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