import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PublishIcon from "@mui/icons-material/Publish";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PublicIcon from "@mui/icons-material/Public";
import FaceIcon from "@mui/icons-material/Face";
import ShowChartIcon from "@mui/icons-material/ShowChart";

function ImportDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    // Click function here.
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Import Data</DialogTitle>
      <List sx={{ pt: 0, width: 300 }}>
        <ListItemButton component="a">
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Characters" />
        </ListItemButton>

        <ListItemButton component="a">
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Plot" />
        </ListItemButton>

        <ListItemButton component="a">
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Worldbuilding" />
        </ListItemButton>
      </List>
    </Dialog>
  );
}

ImportDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ImportDialogButton() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <ListItemButton component="a" onClick={handleClickOpen}>
        <ListItemIcon>
          <PublishIcon />
        </ListItemIcon>
        <ListItemText primary="Import Data" />
      </ListItemButton>
      <ImportDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
