import React, { useState } from "react";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CharacterCreation from "./CharacterCreation";

const CharacterCreationNavigation = ({
  nameInput,
  appearanceInput,
  goalsInput,
  traitsInput,
  monologueInput,
  saveCharacter,
  saveButtonText,
}) => {
  return (
    <div id="character-creation-navigation">
      <button className="character-creation-button" onClick={nameInput}>
        Name
      </button>
      <button className="character-creation-button" onClick={appearanceInput}>
        Physical Description
      </button>
      <button className="character-creation-button" onClick={goalsInput}>
        Goals and Struggles
      </button>
      <button className="character-creation-button" onClick={traitsInput}>
        Flaws and Virtues
      </button>
      <button className="character-creation-button" onClick={monologueInput}>
        Monologue
      </button>
      <button
        className="character-creation-save-button"
        onClick={saveCharacter}
      >
        <FontAwesomeIcon icon={faSave} id="fa-icon" />
        {saveButtonText}
      </button>
    </div>
  );
};

export default CharacterCreationNavigation;

/* 

*/
