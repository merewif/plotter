import React from 'react';

interface Props {
  labelid: string;
  textInput: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textareaClass: string;
  currentValue: string;
}

const CharacterInput = ({labelid, textInput, textareaClass, currentValue}: Props) => {
  return (
    <form id="character-creation-form">
      <label>
        <textarea
          placeholder="Click here and start typing..."
          id={labelid}
          className={textareaClass}
          onChange={textInput}
          value={currentValue}
        ></textarea>
      </label>
    </form>
  );
};

export default CharacterInput;
