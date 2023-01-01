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

const SideMenu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setIsOpen(state => !state)} sx={{color: 'white'}}>
        <MenuIcon />
      </Button>
      <Drawer anchor={'right'} open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{width: 250}} role="presentation">
          <List onClick={() => setIsOpen(false)} sx={{padding: 0}}>
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
      </Drawer>
    </>
  );
};

export default SideMenu;
