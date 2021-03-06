import React, { useState } from "react";
import $ from "jquery";
import CharacterCreation from "./CharacterCreation";

const CharacterInput = ({
  labelid,
  textInput,
  textareaClass,
  currentValue,
}) => {
  return (
    <form id="character-creation-form">
      <label>
        <textarea
          placeholder="Click here and start typing..."
          type="text"
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
