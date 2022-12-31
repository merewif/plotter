import React, {useState, useEffect} from 'react';
import ChaptersView from '../../components/plot/PlotChaptersView';
import BooksView from '../../components/plot/PlotBooksView';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import PlotSidebar from '../../components/plot/PlotSidebar';
import {Book, Chapter} from '../../types/types';

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
  const [book, setBook] = useState<Book | null>(null);
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [alignment, setAlignment] = useState();

  const handleChange = (event: any, newAlignment: any) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    // if (document.getElementById('save-btn'))
    //   document.getElementById('save-btn').classList.remove('btn-unsaved');
  }, [book, chapter]);

  return (
    <>
      {displayView}
      <ThemeProvider theme={BTN_THEME}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          id="arcs-nav-buttons"
        >
          <ToggleButton
            onClick={() => {
              setDisplayView('');
              setBook(null);
              setChapter(null);
              setDisplayView(<BooksView />);
            }}
            value="books"
          >
            Books
          </ToggleButton>
          <ToggleButton
            onClick={e => {
              setDisplayView('');
              setBook(null);
              setChapter(null);
              setDisplayView(<ChaptersView />);
            }}
            value="chapters"
          >
            Chapters
          </ToggleButton>
        </ToggleButtonGroup>
      </ThemeProvider>
    </>
  );
};

export default StoryArcs;
