import React, {useState, useEffect} from 'react';
import Plotsidebar from './Plotsidebar';
import ChaptersView from './PlotChaptersView';
import BooksView from './PlotBooksView';
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
  const [currentlyOpenedBook, setCurrentlyOpenedBook] = useState('');
  const [currentlyOpenedChapter, setCurrentlyOpenedChapter] = useState('');
  const [summary, setSummary] = useState<string>();
  const [alignment, setAlignment] = useState();

  const handleChange = (event: any, newAlignment: any) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    // if (document.getElementById('save-btn'))
    //   document.getElementById('save-btn').classList.remove('btn-unsaved');
  }, [currentlyOpenedBook, currentlyOpenedChapter]);

  return (
    <div>
      <Plotsidebar
        currentlyOpenedBook={currentlyOpenedBook}
        currentlyOpenedChapter={currentlyOpenedChapter}
        summary={summary}
        setSummary={setSummary}
      />
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
            onClick={e => {
              setDisplayView('');
              setCurrentlyOpenedBook('');
              setCurrentlyOpenedChapter('');
              setDisplayView(
                <BooksView
                  setCurrentlyOpenedBook={setCurrentlyOpenedBook}
                  setCurrentlyOpenedChapter={setCurrentlyOpenedChapter}
                  setSummary={setSummary}
                />,
              );
              // $('.right-side').hide();
              setSummary('');
            }}
            value="books"
          >
            Books
          </ToggleButton>
          <ToggleButton
            onClick={e => {
              setDisplayView('');
              setCurrentlyOpenedBook('');
              setCurrentlyOpenedChapter('');
              setDisplayView(
                <ChaptersView
                  setCurrentlyOpenedBook={setCurrentlyOpenedBook}
                  setCurrentlyOpenedChapter={setCurrentlyOpenedChapter}
                  setSummary={setSummary}
                />,
              );
              // $('.right-side').hide();
              setSummary('');
            }}
            value="chapters"
          >
            Chapters
          </ToggleButton>
        </ToggleButtonGroup>
      </ThemeProvider>
    </div>
  );
};

export default StoryArcs;
