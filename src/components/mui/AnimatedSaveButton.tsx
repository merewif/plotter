import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {grey} from '@mui/material/colors';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  clickFunction: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonText?: string;
  returnToggle: string;
  icon?: React.ReactNode;
}

export default function CircularIntegration({
  clickFunction,
  buttonText,
  returnToggle,
  icon = null,
}: Props) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [tooltipText, setTooltipText] = React.useState('Save Changes');
  const timer = React.useRef();
  const iconToDisplay = icon ?? <SaveIcon />;
  const buttonSx = {
    ...(success && {
      bgcolor: grey[500],
      '&:hover': {
        bgcolor: grey[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

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
    <div id="save-btn">
      <Tooltip title={tooltipText} arrow={true} placement="right">
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          {returnToggle === 'circle' ? (
            <Box sx={{m: 1, position: 'relative'}}>
              <Fab aria-label="save" color="primary" sx={buttonSx} onClick={handleButtonClick}>
                {success ? <CheckIcon /> : iconToDisplay}
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
