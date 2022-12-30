import * as React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import GetAppIcon from '@mui/icons-material/GetApp';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PublicIcon from '@mui/icons-material/Public';
import FaceIcon from '@mui/icons-material/Face';
import ShowChartIcon from '@mui/icons-material/ShowChart';

interface Props {
  onClose: (value: string) => void;
  open: boolean;
  selectedValue: string;
}

function ExportDialog({onClose, selectedValue, open}: Props) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (event: any) => {
    // Click function here.
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Export Data</DialogTitle>
      <List sx={{pt: 0, width: 300}}>
        <ListItemButton component="a" onClick={handleListItemClick}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Characters" />
        </ListItemButton>

        <ListItemButton component="a" onClick={handleListItemClick}>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Plot" />
        </ListItemButton>

        <ListItemButton component="a" onClick={handleListItemClick}>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Worldbuilding" />
        </ListItemButton>
      </List>
    </Dialog>
  );
}

ExportDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ExportDialogButton() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: any) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <ListItemButton component="a" onClick={handleClickOpen}>
        <ListItemIcon>
          <GetAppIcon />
        </ListItemIcon>
        <ListItemText primary="Export Data" />
      </ListItemButton>
      <ExportDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </>
  );
}
