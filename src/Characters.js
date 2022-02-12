import React, { useState, useEffect } from "react";
import CharacterOptions from "./components/character/CharacterOptions";

const Characters = () => {
  useEffect(() => {
    if (localStorage.getItem("characters") === "{}") {
      localStorage.removeItem("characters");
    }
  }, []);

  return (
    <div id="character-module" className="module">
      <CharacterOptions />
    </div>
  );
};

export default Characters;
