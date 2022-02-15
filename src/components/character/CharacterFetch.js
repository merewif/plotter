import React, { useState } from "react";
import $ from "jquery";
import CharacterDisplay from "./CharacterDisplay";
import MoodBoard from "../../MoodBoard";
import CircularIntegration from "../mui/AnimatedSaveButton";
import DeleteButton from "../mui/AnimatedDeleteButton";

const CharacterFetch = (props) => {
  const charID = props.charID;
  const fetchCharObject = localStorage.getItem("characters");
  const storedCharObject = JSON.parse(fetchCharObject);
  const [parseCharacter, setParseCharacter] = useState(
    storedCharObject[charID]
  );
  const [saveButtonText, setSaveButtonText] = useState("Save your changes");
  const [deleteButtonText, setDeleteButtonText] = useState(
    "Delete this character"
  );
  const [characterImages, setCharacterImages] = useState([
    "https://i.imgur.com/w1AGMhl.png",
  ]);

  function saveChanges() {
    let name = props.charID;

    let changedCharacter = {
      ...storedCharObject,
      [name]: {
        characterName: $("#fetched-character-name").text(),
        characterAppearance: $("#fetched-character-appearance").text(),
        characterGoals: $("#fetched-character-goals").text(),
        characterTraits: $("#fetched-character-traits").text(),
        characterMonologue: $("#fetched-character-monologue").text(),
        images: characterImages,
      },
    };

    localStorage.setItem("characters", JSON.stringify(changedCharacter));

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

      <div
        id="btn-container"
        style={{ position: "absolute", top: "80%", left: "92.5%" }}
      >
        <DeleteButton
          clickFunction={props.deleteCharacter}
          returnToggle={"circle"}
          tooltipText={"Delete this character permanently"}
        />
        <CircularIntegration
          returnToggle={"circle"}
          clickFunction={saveChanges}
        />
      </div>
    </div>
  );
};

export default CharacterFetch;
