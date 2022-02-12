import "./App.css";
import React, { useEffect, useState } from "react";
import Characters from "./Characters";
import Plot from "./Plot";
import Worldbuilding from "./Worldbuilding";
import { Routes, Route, useNavigate } from "react-router-dom";
import SimpleBottomNavigation from "./components/mui/BottomNavigation";

const Menu = () => {
  const [current, setCurrent] = useState(
    "Hi there. I will help you organize and systematize the elements of your novel. Please choose a module below."
  );
  const [value, setValue] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("characters");
    if (value === 1) navigate("plot");
    if (value === 2) navigate("worldbuilding");
  }, [value]);

  return (
    <>
      <div id="current-container">
        <Routes>
          <Route path="/" element={current} />
          <Route path="/characters/*" element={<Characters />} />
          <Route path="/plot/*" element={<Plot />} />
          <Route path="/worldbuilding/*" element={<Worldbuilding />} />
        </Routes>
      </div>
      <div id="main-menu-container">
        <SimpleBottomNavigation value={value} setValue={setValue} />
      </div>
    </>
  );
};

export default Menu;
