const recipe = require("../models/recipe");
const activePickle = require("../models/activePickle");
const User = require("../models/user");

const createUser = async (req, res) => {
    
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

}

const getAllActivePickles = async (req, res) => {
        try {
      const pickles = await Pickles.find();
      return res.status(200).json({ pickles });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

const createActivePickle = async (req, res) => {
    
}

const getPickleById = async (req, res) => {
    
}

module.exports = {
    createUser,
    getAllRecipes,
    getRecipeById,
    createActivePickle,
    getAllActivePickles,
    getPickleById,
}