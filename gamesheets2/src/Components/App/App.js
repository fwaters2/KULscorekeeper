import React from "react";
import "./App.css";
import Router from "../Router";

function App() {
  return (
    <div className="App">
      <div className="Header">Header/Navigation</div>
      <div className="Body">
        Body Area
        <Router />
      </div>
      <div className="Footer">Footer Area</div>
    </div>
  );
}

export default App;
