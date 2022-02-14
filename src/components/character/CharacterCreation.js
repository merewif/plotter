import React, { useState, useEffect } from "react";
import $ from "jquery";
import CharacterDisplay from "./CharacterDisplay";
import CharacterInput from "./CharacterInput";
import CharacterCreationNavigation from "./CharacterCreationNavigation";
import MoodBoard from "../../MoodBoard";

const Charactercreation = () => {
  const [buttonText, setButtonText] = useState("Submit");
  const [labelid, setLabelId] = useState("name");
  const [input, setInput] = useState("");
  const [text, setText] = useState(
    "First things first, tell me the name of your character."
  );
  const [name, setName] = useState("");
  const [looks, setLooks] = useState("");
  const [goals, setGoals] = useState("");
  const [traits, setTraits] = useState("");
  const [monologue, setMonologue] = useState("");
  const [display, setDisplay] = useState("");
  const [textareaClass, setTextareaClass] = useState("textarea-name");
  const [saveButtonText, setSaveButtonText] = useState("Save character");
  const [characterImages, setCharacterImages] = useState([
    "https://i.imgur.com/w1AGMhl.png",
  ]);
  const [activeStep, setActiveStep] = useState(0);
  const [currentValue, setCurrentValue] = useState("");

  const fetchedCharObject = localStorage.getItem("characters") ?? "{}";
  const storedCharObject = JSON.parse(fetchedCharObject) ?? {};

  useEffect(() => {
    setDisplay("");

    if (activeStep === 0) setTextareaClass("textarea-name");
    if (activeStep > 0) setTextareaClass("textarea-text");

    if (activeStep > 4) {
      document.getElementById("textarea-finished").style.display = "none";
    }
    if (activeStep <= 4) {
      console.log("show");
      document.getElementsByTagName("textarea")[0].style.display = "auto";
    }
  }, [activeStep]);

  const characterCreationTextObject = [
    {
      labelid: "name",
      text: "First things first, tell me the name of your character.",
      state: name,
    },
    {
      labelid: "looks",
      text: "Now tell me everything about how they look like. Try to describe them from the perspective of a stranger who is looking at your character for the first time.",
      state: looks,
    },
    {
      labelid: "goals",
      text: "Now tell me all about the goals and struggles your character faces. What are their internal or external needs? Every interesting character has something to fight for and strive towards. What's your character's? Why are they motivated to achieve their goals? What obstacles stand in their way?",
      state: goals,
    },
    {
      labelid: "traits",
      text: "Now think about the moral aspect of your character. Assemble a list of their moral flaws and moral virtues. Morality is a complicated subject and if you feel like you don't know where to begin, consult a list of aristotelian virtues and vices for inspiration. Keep in mind that by defining their flaws, you are defining the start of their character arc, the baseline from which they will change into someone else, and by defining their virtues, you are defining the means by which your character changes.",
      state: traits,
    },
    {
      labelid: "monologue",
      text: "Write a monologue with your character's voice, exploring their speech patterns and spoken mannerisms.",
      state: monologue,
    },
  ];

  const labelarray = ["name", "looks", "goals", "traits", "monologue"];

  function stepHandling(step) {
    $(textareaClass).show();
    if (step > 4) {
      setText("");
      setLabelId("textarea-finished");
      setCurrentValue("");
      $("#textarea-finished").hide();
      return;
    }
    setText(characterCreationTextObject[step].text);
    setLabelId(characterCreationTextObject[step].labelid);
    setCurrentValue(characterCreationTextObject[step].state);
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
    if (event.target.id === "name") setName(event.target.value);
    if (event.target.id === "looks") setLooks(event.target.value);
    if (event.target.id === "goals") setGoals(event.target.value);
    if (event.target.id === "traits") setTraits(event.target.value);
    if (event.target.id === "monologue") setMonologue(event.target.value);
    setCurrentValue(event.target.value);
  }

  return (
    <div id="character-creation">
      <CharacterCreationNavigation
        saveCharacter={saveCharacter}
        saveButtonText={saveButtonText}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        stepHandling={stepHandling}
      />
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
          currentValue={currentValue}
        />
      </div>
    </div>
  );
};

export default Charactercreation;
