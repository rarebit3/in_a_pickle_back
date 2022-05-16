import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const NewRecipe = () => {
    let navigate = useNavigate()

    const [newRecipe, setNewRecipe] = useState({
        name: "",
        description: "",
        ingredientList: "",
        brineRatio: '',
    })

    const formUpdate = (e) => {
        setNewRecipe({
            ...newRecipe, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001/data/newrecipe', newRecipe)
        navigate('/recipes')
        
    } 

    return (
        <div className='form-box'>
            <h1 className='form-title'>
                Add a new recipe.
            </h1>
            <form className="from" onSubmit={handleSubmit}>
                <input 
                type="text"
                value={newRecipe.name}
                onChange={formUpdate}
                name={"name"}
                placeholder={"Recipe Name"}
                />
                 <input 
                type="text"
                value={newRecipe.description}
                onChange={formUpdate}
                name={"description"}
                placeholder={"Recipe Description"}
                />
                <input 
                type="text"
                value={newRecipe.ingredientList}
                onChange={formUpdate}
                name={"ingredientList"}
                placeholder={"Ingredient List"}
                />
                <input 
                type="text"
                value={newRecipe.brineStrength}
                onChange={formUpdate}
                name={"brineStrength"}
                placeholder={"Brine Strength"}
                />
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default NewRecipe