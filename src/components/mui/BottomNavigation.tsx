import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {ThemeProvider, createTheme} from '@mui/material';

// Icons
import PublicIcon from '@mui/icons-material/Public';
import FaceIcon from '@mui/icons-material/Face';
import ShowChartIcon from '@mui/icons-material/ShowChart';

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

interface Props {
  value: number | null;
  setValue: (value: number) => void;
}

export default function SimpleBottomNavigation({value, setValue}: Props) {
  return (
    <ThemeProvider theme={navTheme}>
      <Box sx={{width: 500}}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Characters" icon={<FaceIcon />} />
          <BottomNavigationAction label="Plot" icon={<ShowChartIcon />} />
          <BottomNavigationAction label="Worldbuilding" icon={<PublicIcon />} />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
