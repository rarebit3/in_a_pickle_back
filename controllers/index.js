const Recipe = require("../models/recipe");
const Project = require("../models/project");
const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const getAllRecipes = async (req, res) => {
    try {
      const recipes = await Recipe.find();
      return res.status(200).json({ recipes });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (recipe) {
      return res.status(200).json({ recipe });
    }
    return res.status(404).send("Recipe with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getAllProjects = async (req, res) => {
    try {
      const projects = await Project.find();
      return res.status(200).json({ projects });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

const createProject = async (req, res) => {
  try {
    const project = await new Project(req.body);
    await project.save();

    return res.status(201).json({
      project,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    if (project) {
      return res.status(200).json({ project });
    }
    return res.status(404).send("Pickle with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const removeProject = async (req, res) => {
  try {
    res.status(200).json(await Project.findByIdAndDelete(req.params.id));
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(req.body._id, req.body);
    user.save();
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
    createUser,
    getAllRecipes,
    getRecipeById,
    createProject,
    getAllProjects,
    getProjectById,
    removeProject,
    updateUser,
}