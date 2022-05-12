import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Recipe.css";

const Recipes = () => {
    let navigate = useNavigate()

    //define the states
    const [recipes, setRecipes] = useState([])

    //function that makes an axios call to set the state
    const getRecipes = async () => {
        const recipeList = await axios.get("/recipes")
        setRecipes(recipeList.data.recipes)
    }

    //make the axios call on pageload
    useEffect(() => {
        getRecipes()
    }, [])

    //Your on-clicks and other event listeners will go here

    if (!recipes) {
        return <h1>Loading your recipes</h1>
    } else {
        return (
            <div>{/*Map your recipes ya fool! */}</div>
        )
    
    }

}

export default Recipes