import React, { useState } from "react";
import $ from "jquery";
import CharacterDisplay from "./CharacterDisplay";
import CharacterInput from "./CharacterInput";
import CharacterCreationNavigation from "./CharacterCreationNavigation";
import MoodBoard from "../../MoodBoard";

const Charactercreation = () => {
  const [buttonText, setButtonText] = useState("Submit");
  const [label, setLabel] = useState("Name");
  const [labelid, setLabeld] = useState("name");
  const [input, setInput] = useState("");
  const [text, setText] = useState(
    "First things first, tell me the name of your character."
  );
  const [name, setName] = useState("");
  const [nameFormatted, setNameFormatted] = useState("");
  const [looks, setLooks] = useState("");
  const [goals, setGoals] = useState("");
  const [traits, setTraits] = useState("");
  const [monologue, setMonologue] = useState("");
  const [currentCharacter, setCurrentCharacter] = useState({
    characterName: "",
    characterAppearance: "",
    characterGoals: "",
    characterMonologue: "",
    characterTraits: "",
  });
  // const [savedCharacters, setSavedCharacters] = useState([]);
  const [display, setDisplay] = useState("");
  const [textareaClass, setTextareaClass] = useState("textarea-name");
  const [saveButtonText, setSaveButtonText] = useState("Save character");
  const [characterImages, setCharacterImages] = useState([]);
  const fetchedCharObject = localStorage.getItem("characters") ?? "{}";
  const storedCharObject = JSON.parse(fetchedCharObject) ?? {};

  function nameInput(event) {
    $(".character-creation-button").css({
      background: "white",
      color: "black",
    });
    $(event.target).css({ background: "black", color: "white" });

    $(".textarea").show();
    setText("First things first, tell me the name of your character.");
    setTextareaClass("textarea-name");
    setDisplay("");

    setLabeld("name");
    $("textarea").val(name);
  }

  function appearanceInput(event) {
    $(".character-creation-button").css({
      background: "white",
      color: "black",
    });
    $(event.target).css({ background: "black", color: "white" });

    $(".textarea").show();
    setDisplay("");

    setTextareaClass("textarea-text");
    setLabeld("looks");
    setText(
      "Now tell me everything about how they look like. Try to describe them from the perspective of a stranger who is looking at your character for the first time."
    );

    $("textarea").val(looks);
  }

  function goalsInput(event) {
    $(".character-creation-button").css({
      background: "white",
      color: "black",
    });
    $(event.target).css({ background: "black", color: "white" });

    $("textarea").show();
    setDisplay("");

    setTextareaClass("textarea-text");
    setLabeld("goals");
    setText(
      "Now tell me all about the goals and struggles your character faces. Every interesting character has something to fight for and strive towards. What's yours'? Why are they motivated to achieve their goals? What obstacles stand in their way?"
    );

    $("textarea").val(goals);
  }

  function traitsInput(event) {
    $(".character-creation-button").css({
      background: "white",
      color: "black",
    });
    $(event.target).css({ background: "black", color: "white" });

    $(".textarea").show();
    setTextareaClass("textarea-text");
    setDisplay("");

    setLabel("Flaws and Virtues ✔");
    setLabeld("traits");
    setText(
      "Now think about the moral aspect of your character. Assemble a list of their moral flaws and moral virtues,their secrets and their inner needs. Morality is a complicated subject and if you feel like you don't know where to begin, consult a list of aristotelian virtues and vices for inspiration. Keep in mind that by defining their flaws, you are defining the start of their character arc, the baseline from which they will change into someone else, and by defining their virtues, you are defining the means by which your character changes."
    );

    $("textarea").val(traits);
  }

  function monologueInput(event) {
    $(".character-creation-button").css({
      background: "white",
      color: "black",
    });
    $(event.target).css({ background: "black", color: "white" });

    $(".textarea").show();
    setTextareaClass("textarea-text");
    setDisplay("");

    setLabel("Monologue ✔");
    setLabeld("monologue");
    setText(
      "Write a monologue with your character's voice, exploring their speech patterns and spoken mannerisms."
    );

    $("textarea").val(monologue);
  }

  function saveCharacter() {
    if (name.length === 0) {
      setSaveButtonText("Name required");
      setTimeout(() => {
        setSaveButtonText("Save character");
      }, 2000);
      return;
    }

    $("textarea").hide();
    setText("Just a moment...");
    setSaveButtonText("Saving...");

    const regex = /[\r\n]+/gm;
    let newCharacter = {
      characterName: name,
      characterAppearance: looks,
      characterGoals: goals,
      characterMonologue: monologue,
      characterTraits: traits,
      images: characterImages,
    };

    let newCharMergedWithStoredChars = {
      ...storedCharObject,
      [name.replace(/\s+/g, "-").toLowerCase()]: newCharacter,
    };

    setTimeout(() => {
      localStorage.setItem(
        "characters",
        JSON.stringify(newCharMergedWithStoredChars)
      );
    }, 2000);
    setTimeout(() => {
      setDisplay(
        <CharacterDisplay currentCharacter={newCharacter} editable={"false"} />
      );

      characterSaved();
    }, 500);
  }

  function characterSaved() {
    setTimeout(() => {
      setText(
        "All done! You'll be able to access and edit your character information later."
      );
      setSaveButtonText("Save character");
    }, 2000);

    setInput("");
  }

  function textInput(event) {
    if (event.target.id === "name") {
      setName(event.target.value);
    } else if (event.target.id === "looks") {
      setLooks(event.target.value);
    } else if (event.target.id === "goals") {
      setGoals(event.target.value);
    } else if (event.target.id === "traits") {
      setTraits(event.target.value);
    } else if (event.target.id === "monologue") {
      setMonologue(event.target.value);
    } else return;
  }

  return (
    <div id="character-creation">
      <div>{display}</div>

      <div>
        <MoodBoard
          ChangeData={(characterImages) => setCharacterImages(characterImages)}
        />
      </div>

      <p id="character-prompt">{text}</p>
      <div>
        <CharacterInput
          labelid={labelid}
          buttonText={buttonText}
          textareaClass={textareaClass}
          textInput={textInput}
        />
      </div>
      <CharacterCreationNavigation
        nameInput={nameInput}
        appearanceInput={appearanceInput}
        goalsInput={goalsInput}
        traitsInput={traitsInput}
        monologueInput={monologueInput}
        saveCharacter={saveCharacter}
        saveButtonText={saveButtonText}
      />
    </div>
  );
};

export default Charactercreation;
