import * as React from "react";
import { useNavigate } from "react-router-dom";

// Drawer and List Components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

// Icons
import ListItemIcon from "@mui/material/ListItemIcon";
import PublicIcon from "@mui/icons-material/Public";
import FaceIcon from "@mui/icons-material/Face";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SettingsIcon from "@mui/icons-material/Settings";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import PaletteIcon from "@mui/icons-material/Palette";
import PublishIcon from "@mui/icons-material/Publish";
import GetAppIcon from "@mui/icons-material/GetApp";

// Nested Collapsible List Components
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function TemporaryDrawer() {
  let navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const [state, setState] = React.useState({
    left: false,
    right: false,
  });

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    event.stopPropagation();

    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      ModalProps={{ onBackdropClick: toggleDrawer(anchor, false) }}
    >
      <List onClick={toggleDrawer(anchor, false)}>
        <ListItemButton
          component="a"
          onClick={() => {
            navigate("/characters");
          }}
        >
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Characters" />
        </ListItemButton>
        <ListItemButton component="a" onClick={() => navigate("/plot")}>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Plot" />
        </ListItemButton>
        <ListItemButton
          component="a"
          onClick={() => navigate("/worldbuilding")}
        >
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Worldbuilding" />
        </ListItemButton>
      </List>
      <Divider />
      <List>
        <ListItemButton component="a">
          <ListItemIcon>
            <ImportContactsIcon />
          </ListItemIcon>
          <ListItemText primary="Writing Resources" />
        </ListItemButton>

        <ListItemButton
          component="a"
          href="https://github.com/merewif/plotter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="GitHub Repository" />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            component="div"
            sx={{ background: "#ede9e8", paddingLeft: "15px" }}
          >
            <ListItemButton component="a">
              <ListItemIcon>
                <PaletteIcon />
              </ListItemIcon>
              <ListItemText primary="Skins" />
            </ListItemButton>
            <ListItemButton component="a">
              <ListItemIcon>
                <PublishIcon />
              </ListItemIcon>
              <ListItemText primary="Import Data" />
            </ListItemButton>
            <ListItemButton component="a">
              <ListItemIcon>
                <GetAppIcon />
              </ListItemIcon>
              <ListItemText primary="Export Data" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton component="a">
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("left", true)} id="drawerbutton-left">
          <MenuIcon />
        </Button>
        <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
