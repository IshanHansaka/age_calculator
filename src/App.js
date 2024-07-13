import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Calculator />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
