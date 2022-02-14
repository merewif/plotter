import React, { useState } from "react";
import HorizontalNonLinearStepper from "../mui/Stepper";
import CircularIntegration from "../mui/AnimatedSaveButton";

const CharacterCreationNavigation = ({
  saveCharacter,
  saveButtonText,
  activeStep,
  setActiveStep,
  stepHandling,
}) => {
  const steps = [
    "Name",
    "Physical Description",
    "Goals and Struggles",
    "Flaws and Virtues",
    "Character Monologue",
  ];
  return (
    <div id="character-creation-nav">
      <HorizontalNonLinearStepper
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        stepHandling={stepHandling}
      />
      <div style={{ position: "absolute", top: "90%", left: "90%" }}>
        <CircularIntegration
          clickFunction={saveCharacter}
          buttonText={saveButtonText}
          returnToggle={"circle"}
        />
      </div>
    </div>
  );
};

export default CharacterCreationNavigation;

/* 

*/
