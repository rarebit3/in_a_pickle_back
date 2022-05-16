import './style/App.css';
import React from "react"
import { Route, Routes } from "react-router-dom"
import Landing from "./components/Landing"
import NavBar from "./components/NavBar/NavBar.jsx";
import Recipes from "./components/Recipes/Recipes.jsx"
import NewRecipe from './components/Recipes/NewRecipe.jsx'
import UpdateRecipe from './components/Recipes/UpdateRecipe.jsx'
import Projects from './components/Projects/Projects';
import NewProject from './components/Projects/NewProject';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/newrecipe" element={<NewRecipe />} />
          <Route path="/updaterecipe/:id" element={<UpdateRecipe/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
