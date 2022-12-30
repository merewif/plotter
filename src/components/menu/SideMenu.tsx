import React, {useState} from 'react';

// Drawer and List Components
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// Icons
import ListItemIcon from '@mui/material/ListItemIcon';
import PublicIcon from '@mui/icons-material/Public';
import FaceIcon from '@mui/icons-material/Face';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DownloadIcon from '@mui/icons-material/Download';
import {useRouter} from 'next/router';

type Anchor = 'top' | 'bottom' | 'left' | 'right';

const SideMenu = () => {
  const router = useRouter();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: any) => {
    event.stopPropagation();

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  const list = (anchor: Anchor) => (
    <Box sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}} role="presentation">
      <List onClick={toggleDrawer(anchor, false)} sx={{padding: 0}}>
        <ListItemButton
          component="a"
          onClick={() => {
            router.push('/characters');
          }}
        >
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Characters" />
        </ListItemButton>

        <ListItemButton component="a" onClick={() => router.push('/plot')}>
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Plot" />
        </ListItemButton>

        <ListItemButton component="a" onClick={() => router.push('/worldbuilding')}>
          <ListItemIcon>
            <PublicIcon />
          </ListItemIcon>
          <ListItemText primary="Worldbuilding" />
        </ListItemButton>

        <Divider />

        <ListItemButton
          component="a"
          onClick={() => {
            router.push('/about');
          }}
        >
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
        <List sx={{padding: 0}}>
          <ListItemButton component="a" onClick={() => router.push('/writing-resources')}>
            <ListItemIcon>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Writing Resources" />
          </ListItemButton>
        </List>

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

        <ListItemButton
          component="a"
          href="https://github.com/merewif/plotter/releases/tag/v1.0.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemIcon>
            <DownloadIcon />
          </ListItemIcon>
          <ListItemText primary="Download as .exe" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer('left', true)} id="drawerbutton-left">
          <MenuIcon />
        </Button>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SideMenu;
