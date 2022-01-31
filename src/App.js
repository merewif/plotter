import "./App.css";
import React, { useState } from "react";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Plotter</h1>
      </header>
      <main>
        <Menu />
      </main>
    </div>
  );
}
//

export default App;
