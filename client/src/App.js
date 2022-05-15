import './style/App.css';
import React from "react"
import { Route, Routes } from "react-router-dom"
import Landing from "./components/Landing"
import NavBar from "./components/NavBar/NavBar.jsx";
import Recipes from "./components/Recipes/Recipes.jsx"
import NewRecipe from './components/Recipes/NewRecipe.jsx'
import UpdateRecipe from './components/Recipes/UpdateRecipe.jsx'

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/newrecipe" element={<NewRecipe />} />
          <Route path="/updaterecipe" element={<UpdateRecipe/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
