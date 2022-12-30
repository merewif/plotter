import React, {useState} from 'react';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import {useRouter} from 'next/router';

const Plot = () => {
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (
      (e.target as HTMLButtonElement).id === 'set-story-arcs' &&
      localStorage.getItem('books') === null
    ) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2500);
      return;
    }

    router.push((e.target as HTMLButtonElement).id);

    // $('#plot-nav').css({top: '112.5%'});
    // $('#plot-nav button').css({'font-size': '0.8em', height: '25px'});
    // $('.plot-options').removeClass('white-active-btn');
    // $(e.target).addClass('white-active-btn');
  }

  return (
    <div id="character-module" className="module">
      <div>
        {/* <Routes>
          <Route path="/set-books" element={<CreateBook />} />
          <Route path="/set-story-arcs" element={<StoryArcs />} />
        </Routes> */}
      </div>
      <div id="plot-nav">
        <button
          className="plot-options"
          id="set-books"
          onClick={e => {
            handleClick(e);
          }}
        >
          Set Books
        </button>
        <button
          className="plot-options"
          id="set-story-arcs"
          onClick={e => {
            handleClick(e);
          }}
        >
          Set Story Arcs
        </button>
      </div>
      <div id="alert">
        <Fade in={showAlert}>
          <Alert severity="error" sx={{background: 'black', color: 'white'}}>
            Set your books first.
          </Alert>
        </Fade>
      </div>
    </div>
  );
};

export default Plot;
