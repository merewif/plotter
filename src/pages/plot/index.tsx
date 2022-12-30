import React, {useState} from 'react';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import {useRouter} from 'next/router';
import {usePlotStore} from '../../utils/stores/PlotStore';

const Plot = () => {
  const books = usePlotStore(state => state.books);
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (Object.keys(books).length === 0) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2500);
      return;
    }

    router.push('/plot/arcs');

    // $('#plot-nav').css({top: '112.5%'});
    // $('#plot-nav button').css({'font-size': '0.8em', height: '25px'});
    // $('.plot-options').removeClass('white-active-btn');
    // $(e.target).addClass('white-active-btn');
  }

  return (
    <>
      <div id="plot-nav">
        <button
          className="plot-options"
          id="set-books"
          onClick={e => {
            router.push('/plot/books');
          }}
        >
          Set Books
        </button>
        <button
          className="plot-options"
          id="set-story-arcs"
          onClick={() => {
            if (Object.keys(books).length === 0) {
              setShowAlert(true);
              setTimeout(() => {
                setShowAlert(false);
              }, 2500);
              return;
            }
            router.push('/plot/arcs');
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
    </>
  );
};

export default Plot;
