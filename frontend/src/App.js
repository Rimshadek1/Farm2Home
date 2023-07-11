import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/index";
import Userindex from './Components/Userindex/userindex'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./Pages/login";
import Signup from './Pages/signup'
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Userindex />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

    </div >
  );
}

export default App;
