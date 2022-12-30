import React, {useState} from 'react';
import CharacterCreation from './CharacterCreation';
import CharacterStorage from './CharacterStorage';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import {useRouter} from 'next/router';

const CharacterOptions = () => {
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  function modulChoice(event: any) {
    if (event.target.id === 'view-characters' && localStorage.getItem('characters') === null) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2500);
      return;
    }

    // $('#char-choice-buttons').css({top: '112.5%'});
    // $('.option').css({
    //   'font-size': '0.8em',
    //   height: '25px',
    //   padding: '5px',
    //   background: 'black',
    //   color: 'white',
    // });
    // $(event.target).css({
    //   background: 'white',
    //   color: 'black',
    //   border: '1px solid black',
    // });

    router.push(event.target.id);
  }

  return (
    <div id="character-options" className="options">
      <div id="display-module">
        {/* <Routes>
          <Route path="/create-character" element={<CharacterCreation />} />
          <Route path="/view-characters" element={<CharacterStorage />} />
        </Routes> */}
      </div>
      <div id="char-choice-buttons">
        <button className="option" onClick={modulChoice} id="create-character">
          Create Character
        </button>
        <button className="option" onClick={modulChoice} id="view-characters">
          View Characters
        </button>
      </div>
      <div id="alert">
        <Fade in={showAlert}>
          <Alert severity="error" sx={{background: 'black', color: 'white'}}>
            Create a character first.
          </Alert>
        </Fade>
      </div>
    </div>
  );
};

export default CharacterOptions;
