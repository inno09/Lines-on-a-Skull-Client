import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Search from './Search';
import Authors from './Authors';
import Genre from './Genre';
import Favorites from './Favorites';
import NewPoem from "./NewPoem";


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/authors" element={<Authors />} />
          <Route exact path="/genre" element={<Genre />} />
          <Route exact path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
      <NewPoem />
    </div>
  );
}

export default App;
