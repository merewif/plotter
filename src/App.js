import "./App.css";
import React, { useState } from "react";
import Menu from "./Menu";
import TemporaryDrawer from "./components/menu/Drawer";

function App() {
  return (
    <div>
      <div id="drawer-btn-container">
        <TemporaryDrawer />
      </div>
      <div className="App">
        <header className="App-header">
          <h1>Plotter</h1>
        </header>
        <main>
          <Menu />
        </main>
      </div>
    </div>
  );
}
//

export default App;
