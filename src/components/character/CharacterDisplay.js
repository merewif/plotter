import React, { useState } from "react";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

const CharacterDisplay = ({ currentCharacter, editable }) => {
  const LABELS = [
    "Name",
    "Physical description: ",
    "Goals and Struggles: ",
    "Flaws and Virtues: ",
    "Monologue: ",
  ];
  const IDs = ["name", "appearance", "goals", "traits", "monologue"];
  const TOOLTIPTEXTS = [
    "First things first, tell me the name of your character.",
    "Write down everything about how they look like. Try to describe them from the perspective of a stranger who is looking at your character for the first time.",
    "Write down all about the goals and struggles your character faces. What are their internal or external needs? Every interesting character has something to fight for and strive towards. What's your character's? Why are they motivated to achieve their goals? What obstacles stand in their way?",
    "Think about the moral aspect of your character. Write a list of their moral flaws and moral virtues. If you don't know where to begin, consult a list of aristotelian virtues and vices for inspiration. Keep in mind that by defining their flaws, you are defining the baseline of their character arc, and by defining their virtues, you are defining the means by which your character changes into someone else (or vice versa).",
    "Write a monologue with your character's voice, exploring their speech patterns and spoken mannerisms.",
  ];
  const KEYS = [
    "characterName",
    "characterAppearance",
    "characterGoals",
    "characterTraits",
    "characterMonologue",
  ];

  return (
    <div>
      <div id="display-fetched-character" style={{ transitionDuration: "0s" }}>
        {KEYS.map((e, i) => {
          if (KEYS[i] === "characterName" || KEYS[i] === "images") return;
          return (
            <div
              key={i}
              id={"display-" + IDs[i]}
              className="display-current-character-element"
            >
              <p>
                {LABELS[i]}
                <Tooltip
                  className="tooltip"
                  title={TOOLTIPTEXTS[i]}
                  placement="bottom"
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  arrow={true}
                >
                  <IconButton>
                    <HelpIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                </Tooltip>
              </p>
              <p
                id={"fetched-character-" + IDs[i]}
                className="fetched-attribute"
                contentEditable={editable}
                suppressContentEditableWarning={true}
              >
                {currentCharacter[KEYS[i]]}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterDisplay;
