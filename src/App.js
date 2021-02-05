import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/index";

function App() {
  return (
    <>
      {/* contain all pages and parts */}
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
