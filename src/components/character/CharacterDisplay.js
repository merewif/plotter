import React, { useState } from "react";

const CharacterDisplay = ({ currentCharacter, editable }) => {
  return (
    <div>
      <div id="display-fetched-character">
        <div id="display-name" className="display-current-character-element">
          <p id="fetched-character-name">{currentCharacter.characterName}</p>
        </div>
        <div
          id="display-appearance"
          className="display-current-character-element"
        >
          <p>Physical description:</p>
          <p
            id="fetched-character-appearance"
            className="fetched-attribute"
            contentEditable={editable}
            suppressContentEditableWarning={true}
          >
            {currentCharacter.characterAppearance}
          </p>
        </div>
        <div
          id="display-monologue"
          className="display-current-character-element"
        >
          <p>Monologue:</p>
          <p
            id="fetched-character-monologue"
            className="fetched-attribute"
            contentEditable={editable}
            suppressContentEditableWarning={true}
          >
            {currentCharacter.characterMonologue}
          </p>
        </div>
        <div id="display-goals" className="display-current-character-element">
          <p>Goals and Struggles:</p>
          <p
            id="fetched-character-goals"
            className="fetched-attribute"
            contentEditable={editable}
            suppressContentEditableWarning={true}
          >
            {currentCharacter.characterGoals}
          </p>
        </div>
        <div id="display-traits" className="display-current-character-element">
          <p>Flaws and Virtues:</p>
          <p
            id="fetched-character-traits"
            className="fetched-attribute"
            contentEditable={editable}
            suppressContentEditableWarning={true}
          >
            {currentCharacter.characterTraits}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDisplay;
