import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {grey} from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  clickFunction: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText?: string | null;
  tooltipText: string;
  returnToggle: string;
}

export default function DeleteButton({
  clickFunction,
  buttonText = null,
  tooltipText,
  returnToggle,
}: Props) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
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
      window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
      window.setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  };

  return (
    <div id="delete-btn">
      <Tooltip title={tooltipText} arrow={true} placement="right">
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          {returnToggle === 'circle' ? (
            <Box sx={{m: 1, position: 'relative'}}>
              <Fab aria-label="save" color="primary" sx={buttonSx} onClick={handleButtonClick}>
                {success ? <CheckIcon /> : <DeleteForeverIcon />}
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
          ) : (
            <Box sx={{m: 1, position: 'relative'}}>
              <Button
                variant="contained"
                sx={buttonSx}
                disabled={loading}
                onClick={handleButtonClick}
              >
                {buttonText}
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: grey[500],
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px',
                  }}
                />
              )}
            </Box>
          )}
        </Box>
      </Tooltip>
    </div>
  );
}
