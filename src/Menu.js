import "./App.css";
import React, { useState } from "react";
import Characters from "./Characters";
import Plot from "./Plot";
import Worldbuilding from "./Worldbuilding";
import $ from "jquery";
import { Routes, Route, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Menu = () => {
  const [current, setCurrent] = useState(
    "Hi there. I will help you organize and systematize the elements of your novel. Please choose a module below."
  );
  let navigate = useNavigate();

  function handleClick(event) {
    $(".main-menu").css({ background: "white", color: "black" });
    $(event.target).css({ background: "black", color: "white" });
    $(
      "#plot-nav, #set-story-arcs, #set-books, .option, #char-choice-buttons"
    ).removeAttr("style");
    $(".plot-options").removeClass("white-active-btn");

    navigate(event.target.id);
  }

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
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{ fontWeight: "bold" }}
        >
          <Button id="characters" onClick={handleClick}>
            Characters
          </Button>
          <Button id="plot" onClick={handleClick}>
            Plot
          </Button>
          <Button id="worldbuilding" onClick={handleClick}>
            Worldbuilding
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default Menu;

/*

<div className="main-menu" id="characters" onClick={handleClick}>
          Characters
        </div>
        <div className="main-menu" id="plot" onClick={handleClick}>
          Plot
        </div>
        <div className="main-menu" id="worldbuilding" onClick={handleClick}>
          Worldbuilding
        </div>

*/
