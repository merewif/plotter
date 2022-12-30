import React from 'react';
import HorizontalNonLinearStepper from '../mui/Stepper';
import SaveButton from '../mui/AnimatedSaveButton';

interface Props {
  saveCharacter: (event: React.MouseEvent<HTMLButtonElement>) => void;
  saveButtonText: string;
  activeStep: number;
  setActiveStep: (step: number) => void;
  stepHandling: (step: number) => void;
}

const CharacterCreationNavigation = ({
  saveCharacter,
  saveButtonText,
  activeStep,
  setActiveStep,
  stepHandling,
}: Props) => {
  const steps = [
    'Name',
    'Physical Description',
    'Goals and Struggles',
    'Flaws and Virtues',
    'Character Monologue',
  ];
  return (
    <div id="character-creation-nav">
      <HorizontalNonLinearStepper
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        stepHandling={stepHandling}
      />
      <div style={{position: 'absolute', top: '90%', left: '90%'}}>
        <SaveButton clickFunction={saveCharacter} />
      </div>
    </div>
  );
};

export default CharacterCreationNavigation;

/* 

*/
