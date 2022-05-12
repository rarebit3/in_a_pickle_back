const db = require('../db')
const Project = require("../models/project");
const Recipe = require("../models/recipe");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const updateProjects = async () => {
    const testRecipe = await Recipe.find({name: 'Dill Half Sour'})
    const updated = await Project.updateOne(
        { tooOld: 90},
        { recipe: testRecipe[0]._id }
    )
    await Project.updateOne(updated);
    console.log("Updated a project!");
}

const run = async () => {
    await updateProjects();
    db.close();
    };
    
run();