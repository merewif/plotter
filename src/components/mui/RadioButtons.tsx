import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

interface Props {
  handleChange: () => void;
}

export default function RadioButtons({handleChange}: Props) {
  return (
    <div id="radio-btns">
      <FormControl>
        <RadioGroup row name="radiobtns" defaultValue="function" onChange={handleChange}>
          <FormControlLabel
            value="function"
            control={<Radio />}
            label="Curved Lines"
            labelPlacement="start"
          />
          <FormControlLabel value="none" control={<Radio />} label="Jagged Lines" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

/*

<Radio
        checked={parentState === "function"}
        onChange={handleChange}
        value="function"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
      />
      <Radio
        checked={parentState === "none"}
        onChange={handleChange}
        value="none"
        name="radio-buttons"
        inputProps={{ "aria-label": "B" }}
      />

*/
