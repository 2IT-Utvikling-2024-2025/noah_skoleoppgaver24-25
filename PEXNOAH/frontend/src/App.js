import React from "react";
import Register from "./Register";  // ✅ Riktig import
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MC Registeringssystem</h1>
        <Register /> {/* Viser registreringsskjemaet */}
      </header>
    </div>
  );
}

export default App;

