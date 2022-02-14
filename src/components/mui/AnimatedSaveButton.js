import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";

export default function CircularIntegration({
  clickFunction,
  buttonText,
  returnToggle,
}) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: grey[500],
      "&:hover": {
        bgcolor: grey[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = (event) => {
    clickFunction(event);
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        document.getElementById("save-btn").classList.remove("btn-unsaved");
      }, 2000);
      timer.current = window.setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  };

  return (
    <div id="save-btn">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {returnToggle === "circle" ? (
          <Box sx={{ m: 1, position: "relative" }}>
            <Fab
              aria-label="save"
              color="primary"
              sx={buttonSx}
              onClick={handleButtonClick}
            >
              {success ? <CheckIcon /> : <SaveIcon />}
            </Fab>
            {loading && (
              <CircularProgress
                size={68}
                sx={{
                  color: grey[500],
                  position: "absolute",
                  top: -6,
                  left: -6,
                  zIndex: 1,
                }}
              />
            )}
          </Box>
        ) : (
          <Box sx={{ m: 1, position: "relative" }}>
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
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </Box>
        )}
      </Box>
    </div>
  );
}
