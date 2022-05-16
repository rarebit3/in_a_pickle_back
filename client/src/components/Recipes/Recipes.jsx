import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams, } from "react-router-dom";
import axios from "axios";
// import "./Recipe.css";

const Recipes = () => {
  let navigate = useNavigate();

  //define the states
  const [recipes, setRecipes] = useState([]);

  //function that makes an axios call to set the state
  const getRecipes = async () => {
    const recipeList = await axios.get("http://localhost:3001/data/recipes");
    setRecipes(recipeList.data.recipes);
  };

  //make the axios call on pageload
  useEffect(() => {
    getRecipes();
  }, []);

  //Your on-clicks and other event listeners will go here

  const removeRecipe = async (recipe) => {
    await axios.delete(`http://localhost:3001/data/removerecipe/${recipe._id}`);
    getRecipes();
  };


  if (!recipes) {
    return <h1>Loading your recipes</h1>;
  } else {
    return (
      <div className="recipe-grid">
        <Link className="addRecipe" to="/newrecipe">Add a Recipe</Link>
        {recipes.map((recipe, id) => (
          <div className="recipe-card" key={id}>
            <h2>{recipe.name}</h2>
            <div>
              <h3>Brine Strength: {recipe.brineStrength}%</h3>
              <p>Ingredients: {recipe.ingredientList}</p>
              <p>Description: {recipe.description}</p>
            </div>
            <button
              className="remove-button in-box-button"
              label="Remove Recipe"
              onClick={() => {
                if (
                  window.confirm("Are you sure you wish to delete this item?")
                )
                  removeRecipe(recipe);
              }}
            >
              Remove Recipe
            </button>
            <button
              className="update-button in-box-button"
              label="Update Recipe"
              onClick={() => {
                  navigate(`/updaterecipe/${recipe._id}`);
              }}
            >
              Update Recipe
            </button>
          </div>
        ))}
      </div>
    );
  }
};

export default Recipes;
