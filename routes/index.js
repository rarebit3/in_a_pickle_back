const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is root!"));

router.post("/newuser", controllers.createUser)

router.get("/recipes", controllers.getAllRecipes)

router.get("/recipe/:id", controllers.getRecipeById)

router.post("/newrecipe", controllers.createRecipe)

router.put("/updaterecipe/:id", controllers.updateRecipe)

router.delete("/removerecipe/:id", controllers.removeRecipe)

router.post("/newproject", controllers.createProject)

router.get("/projects",controllers.getAllProjects)

router.get("/project/:id", controllers.getProjectById)

router.delete("/removeproject/:id", controllers.removeProject)

router.post("/updateuser", controllers.updateUser)

module.exports = router;