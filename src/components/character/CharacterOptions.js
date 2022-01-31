import React, { useState } from "react";
import CharacterCreation from "./CharacterCreation";
import CharacterStorage from "./CharacterStorage";
import $ from "jquery";
import { Routes, Route, useNavigate } from "react-router-dom";

const CharacterOptions = () => {
  let navigate = useNavigate();

  function modulChoice(event) {
    $("#char-choice-buttons").css({ top: "110%" });
    $(".option").css({
      "font-size": "0.8em",
      height: "25px",
      padding: "5px",
      background: "black",
      color: "white",
    });
    $(event.target).css({
      background: "white",
      color: "black",
      border: "1px solid black",
    });

    navigate(event.target.id);
  }

  return (
    <div id="character-options" className="options">
      <div id="display-module">
        <Routes>
          <Route path="/create-character" element={<CharacterCreation />} />
          <Route path="/view-characters" element={<CharacterStorage />} />
        </Routes>
      </div>
      <div id="char-choice-buttons">
        <button className="option" onClick={modulChoice} id="create-character">
          Create Character
        </button>
        <button className="option" onClick={modulChoice} id="view-characters">
          View Characters
        </button>
      </div>
    </div>
  );
};

export default CharacterOptions;