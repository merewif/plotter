import React, {useState} from 'react';
import ChaptersView from '../../components/plot/PlotChaptersView';
import BooksView from '../../components/plot/PlotBooksView';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {ThemeProvider, createTheme} from '@mui/material/styles';

const BTN_THEME = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    fontWeightMedium: 900,
  },
  palette: {
    primary: {
      main: '#000',
      light: '#000000',
      dark: '#000000',
      contrastText: 'rgba(53,53,53,0.87)',
    },
  },
});

const StoryArcs = () => {
  const [displayView, setDisplayView] = useState<string | React.ReactElement>(
    'Navigate to the Books or Chapters module using the buttons above.',
  );
  const [alignment, setAlignment] = useState();

  return (
    <>
      {displayView}
      <ThemeProvider theme={BTN_THEME}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={(e, v) => setAlignment(v)}
          id="arcs-nav-buttons"
        >
          <ToggleButton onClick={() => setDisplayView(<BooksView />)} value="books">
            Books
          </ToggleButton>
          <ToggleButton onClick={() => setDisplayView(<ChaptersView />)} value="chapters">
            Chapters
          </ToggleButton>
        </ToggleButtonGroup>
      </ThemeProvider>
    </>
  );
};

export default StoryArcs;
