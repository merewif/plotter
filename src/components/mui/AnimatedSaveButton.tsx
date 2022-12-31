import React, {useState} from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {grey} from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  clickFunction: (data: any) => void;
}

export default function SaveButton({clickFunction}: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [tooltipText, setTooltipText] = useState('Save Changes');
  const buttonSx = {
    ...(success && {
      bgcolor: grey[500],
      '&:hover': {
        bgcolor: grey[700],
      },
    }),
  };

  const handleButtonClick = (event: any) => {
    clickFunction(event);
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      setTooltipText('Saving...');

      window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setTooltipText('Saved!');

        // document.getElementById("save-btn").classList.remove("btn-unsaved");
      }, 2000);
      window.setTimeout(() => {
        setSuccess(false);
        setTooltipText('Save changes');
      }, 4000);
    }
  };

  return (
    <Tooltip title={tooltipText} arrow={true} placement="right">
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Box sx={{m: 1, position: 'relative'}}>
          <Fab aria-label="save" color="primary" sx={buttonSx} onClick={handleButtonClick}>
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
          {loading && (
            <CircularProgress
              size={68}
              sx={{
                color: grey[500],
                position: 'absolute',
                top: -6,
                left: -6,
                zIndex: 1,
              }}
            />
          )}
        </Box>
      </Box>
    </Tooltip>
  );
}
