import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateRecipe = () => {
  const navigate = useNavigate();

  const { id } = useParams();


  // console.log(useParams())
  const [recipe, setRecipe] = useState();

  // console.log(id)

  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    ingredientList: "",
    brineRatio: "",
  });

  const getRecipeById = async () => {
    let data = await axios.get(`http://localhost:3001/data/recipe/${id}`);
    setRecipe(data.data.recipe);
  };

  useEffect(() => {
    getRecipeById();
  }, []);

  const formUpdate = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:3001/data/updaterecipe/${id}`,
      formValues
    );
    navigate("/recipes");
  };
console.log(recipe)
  if (!recipe) {
    return <h1>Loading your recipe</h1>;
  } else {
    return (
      <div className="form-box">
        <h1 className="form-title">Update {recipe.name}:</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={formValues.name}
            onChange={formUpdate}
            name={"name"}
            placeholder={`${recipe.name}`}
          />
          <input
            type="field"
            value={formValues.description}
            onChange={formUpdate}
            name={"description"}
            placeholder={`${recipe.description}`}
          />
          <input
            type="field"
            value={formValues.ingredientList}
            onChange={formUpdate}
            name={"ingredientList"}
            placeholder={`${recipe.ingredientList}`}
          />
          <input
            type="text"
            value={formValues.brineStrength}
            onChange={formUpdate}
            name={"brineStrength"}
            placeholder={`${recipe.brineStrength}`}
          />
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
};
export default UpdateRecipe;
