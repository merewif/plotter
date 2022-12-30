import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {ThemeProvider, createTheme} from '@mui/material';

// Icons
import PublicIcon from '@mui/icons-material/Public';
import FaceIcon from '@mui/icons-material/Face';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Link from 'next/link';

const navTheme = createTheme({
  typography: {
    fontFamily: ['Montserrat'].join(','),
    fontWeightBold: 900,
  },
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: 'rgba(53,53,53,0.87)',
      dark: '#bfbfbf',
    },
    secondary: {
      main: '#f9f9f9',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
    text: {
      primary: 'rgba(245,245,245,0.87)',
      secondary: 'rgba(255,255,255,0.54)',
    },
  },
});

const Menu = () => {
  const [value, setValue] = useState<number | null>(null);
  const {pathname, push} = useRouter();

  useEffect(() => {
    if (pathname.includes('characters')) {
      setValue(0);
    }

    if (pathname.includes('plot')) {
      setValue(1);
    }

    if (pathname.includes('worldbuilding')) {
      setValue(2);
    }
  }, [value, pathname]);

  return (
    <div id="main-menu-container">
      <ThemeProvider theme={navTheme}>
        <Box sx={{width: 500}}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              onClick={() => push('/characters')}
              label="Characters"
              icon={<FaceIcon />}
            />
            <BottomNavigationAction
              onClick={() => push('/plot')}
              label="Plot"
              icon={<ShowChartIcon />}
            />
            <BottomNavigationAction
              onClick={() => push('/worldbuilding')}
              label="Worldbuilding"
              icon={<PublicIcon />}
            />
          </BottomNavigation>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Menu;
