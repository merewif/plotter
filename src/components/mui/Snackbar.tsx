import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  message: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function SimpleSnackbar({message, open, setOpen}: Props) {
  const action = (
    <React.Fragment>
      <IconButton size="small" aria-label="close" onClick={() => setOpen(false)}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        message={message}
        action={action}
        style={{
          backgroundColor: 'black',
        }}
      />
    </div>
  );
}
