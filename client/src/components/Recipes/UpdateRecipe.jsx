import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const UpdateRecipe = () => {
    const navigate = useNavigate()

    const { id } = useParams()

    const [formValues, setFormValues] = useState({   
        name: "",
        description: "",
        ingredientList: "",
        brineRatio: "",
    })


    const formUpdate = (e) => {
        setFormValues({
            ...formValues, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('/data/updaterecipe', formValues)
        navigate('/recipes')
    } 

    return (
        <div className='form-box'>
            <h1 classname='form-title'>
                Add a new recipe.
            </h1>
            <form className="from" onSubmit={handleSubmit}>
                <input 
                type="text"
                value={formValues.name}
                onChange={formUpdate}
                name={""}
                placeholder={""}
                />
                 <input 
                type="text"
                value={formValues.description}
                onChange={formUpdate}
                name={""}
                placeholder={""}
                />
                <input 
                type="text"
                value={formValues.ingredientList}
                onChange={formUpdate}
                name={""}
                placeholder={""}
                />
                <input 
                type="text"
                value={formValues.brineStrength}
                onChange={formUpdate}
                name={""}
                placeholder={""}
                />
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default UpdateRecipe