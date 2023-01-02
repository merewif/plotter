import React, {useState} from 'react';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import {useRouter} from 'next/router';
import {usePlotStore} from '../../utils/stores/PlotStore';

const Plot = () => {
  const books = usePlotStore(state => state.books);
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col justify-center gap-5 align-middle text-xs font-light">
        <button
          className="mx-auto w-1/4 cursor-pointer border bg-black p-10 font-montserrat text-sm text-white hover:border-black hover:bg-white hover:text-black"
          onClick={() => {
            router.push('/plot/books');
          }}
        >
          Set Books
        </button>
        <button
          className="mx-auto w-1/4 cursor-pointer border bg-black p-10 font-montserrat text-sm text-white hover:border-black hover:bg-white hover:text-black"
          onClick={() => {
            if (books.size === 0) {
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
      <div className="mx-auto mt-5 w-1/4">
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
