import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const NewProject = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    //user state

    const [recipe, setRecipe] = useState();

    const [formValues, setFormValues] = useState({
        //initial project state
      });

    const getRecipeById = async () => {
        let data = await axios.get(`http://localhost:3001/data/recipe/${id}`);
        setRecipe(data.data.recipe);
      };

      useEffect(() => {
        getRecipeById();
      }, []);

    //   const formUpdate = (e) => {
    //     setFormValues({
    //       ...formValues,
    //       [e.target.name]: e.target.value,
    //     });
    //   };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post(
          `http://localhost:3001/data/newproject/${id}`,
        //   formValues
        );
        navigate("/recipes");
    }

    //perform your PICKLEMATH here

    return (
        <div>
            
        </div>
    )
}

export default NewProject