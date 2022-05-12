import './App.css';
import React from "react"
import { Route, Routes } from "react-router-dom"
import Landing from "./components/Landing"
import NavBar from "./components/NavBar/NavBar.js";


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
      <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/" element={< />} />
          <Route path="/" element={< />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
