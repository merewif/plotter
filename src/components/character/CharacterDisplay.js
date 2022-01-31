import React, { useState } from "react";

const CharacterDisplay = ({ currentCharacter, editable }) => {
  return (
    <div>
      <div id="display-fetched-character">
        <div id="display-name" className="display-current-character-element">
          <p>
            <b>Name: </b>
          </p>
          <p id="fetched-character-name" className="fetched-attribute">
            {currentCharacter.characterName}
          </p>
        </div>
        <div
          id="display-appearance"
          className="display-current-character-element"
        >
          <p>
            <b>Physical description: </b>
          </p>
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
          <p>
            <b>Monologue: </b>
          </p>
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
          <p>
            <b>Goals and Struggles: </b>
          </p>
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
          <p>
            <b>Flaws and Virtues: </b>
          </p>
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
