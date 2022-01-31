import React, { useState } from "react";
import $ from "jquery";
import CharacterDisplay from "./CharacterDisplay";
import MoodBoard from "../../MoodBoard";

const CharacterFetch = (props) => {
  const charID = props.charID;
  const displayCharacter = localStorage.getItem(charID).slice(0, -1);
  const [parseCharacter, setParseCharacter] = useState(
    JSON.parse(displayCharacter)
  );

  const [saveButtonText, setSaveButtonText] = useState("Save your changes");
  const [deleteButtonText, setDeleteButtonText] = useState(
    "Delete this character"
  );

  const [characterImages, setCharacterImages] = useState([]);

  function saveChanges() {
    let changedCharacter = {
      characterName: $("#fetched-character-name").text(),
      characterAppearance: $("#fetched-character-appearance").text(),
      characterGoals: $("#fetched-character-goals").text(),
      characterTraits: $("#fetched-character-traits").text(),
      characterMonologue: $("#fetched-character-monologue").text(),
      images: characterImages,
    };

    let name = props.charID;

    localStorage.setItem(name, JSON.stringify(changedCharacter) + ",");

    setSaveButtonText("Saved");
    setTimeout(() => {
      setSaveButtonText("Save your changes");
    }, 1500);
  }

  return (
    <div>
      <MoodBoard
        images={parseCharacter.images}
        ChangeData={(characterImages) => setCharacterImages(characterImages)}
      />

      <CharacterDisplay currentCharacter={parseCharacter} editable={"true"} />

      <button id="save-changes" onClick={saveChanges}>
        {saveButtonText}
      </button>
      <button id="delete-character" onClick={props.deleteCharacter}>
        {deleteButtonText}
      </button>
    </div>
  );
};

export default CharacterFetch;
