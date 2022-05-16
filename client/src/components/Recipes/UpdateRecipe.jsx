import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateRecipe = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    ingredientList: "",
    brineRatio: "",
  });

  const getRecipeById = async (id) => {
    let data = await axios.get(`http://localhost:3001/data/recipe/${id}`);
    setFormValues(data);
  };

  useEffect(() => {
    getRecipeById(id);
  }, []);

  const formUpdate = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      `http://localhost:3001/data/updaterecipe/${e._id}`,
      formValues
    );
    navigate("/recipes");
  };

  if (!formValues) {
    return <h1>Loading your recipe</h1>;
  } else {
    return (
      <div className="form-box">
        <h1 className="form-title">Update {formValues.name}:</h1>
        <form className="from" onSubmit={handleSubmit}>
          <input
            type="text"
            value={formValues.name}
            onChange={formUpdate}
            name={"name"}
            placeholder={"Recipe Name"}
          />
          <input
            type="field"
            value={formValues.description}
            onChange={formUpdate}
            name={"description"}
            placeholder={"Description"}
          />
          <input
            type="field"
            value={formValues.ingredientList}
            onChange={formUpdate}
            name={"ingredientList"}
            placeholder={"Ingredient List"}
          />
          <input
            type="text"
            value={formValues.brineStrength}
            onChange={formUpdate}
            name={"brineStrength"}
            placeholder={"Brine Strength"}
          />
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
};
export default UpdateRecipe;
