import React, {useState} from 'react';
import {usePlotStore} from '../../utils/stores/PlotStore';
import type {Book} from '../../types/types';
import {useForm} from 'react-hook-form';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import {useRouter} from 'next/router';

const SetBooks = () => {
  const storedBooks = usePlotStore(state => state.books);
  const storeBooks = usePlotStore(state => state.setBooks);
  const [books, setBooks] = useState<Array<string>>(
    Object.keys(storedBooks).length === 0
      ? []
      : Object.values(storedBooks).map((book: Book) => book.title),
  );
  const {register, handleSubmit} = useForm<{[key: string]: string}>();
  const [showAlert, setShowAlert] = useState(false);
  const {push} = useRouter();

  function confirmBooks(titles: {[key: string]: string}) {
    if (Object.keys(titles).length !== new Set(Object.values(titles)).size) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2500);
      return;
    }
    storeBooks(Object.values(titles));
    push('/plot/arcs');
  }

  return (
    <>
      <div className="module">
        <div>
          <p style={{fontFamily: 'Montserrat'}}>
            Set the name and the number of the books you plan to outline.
          </p>
        </div>
        <div id="book-creator">
          <div id="book-counter">
            <button
              className="set-book-count"
              onClick={() => setBooks(books => books.slice(0, -1))}
            >
              <b style={{fontFamily: 'Montserrat'}}>-</b>
            </button>
            <div id="bookcount-div">
              <h4>{books.length}</h4>
            </div>
            <button
              className="set-book-count"
              onClick={() => setBooks(books => [...books, `Book ${books.length + 1}`])}
            >
              <b style={{fontFamily: 'Montserrat'}}>+</b>
            </button>
          </div>
        </div>
        <div id="book-namer">
          <form onSubmit={handleSubmit(confirmBooks)}>
            {books.map((book, i: number) => (
              <div
                key={i}
                className="bookname-input-container"
                style={{display: 'flex', paddingLeft: '20vh'}}
              >
                <label>
                  <div className="bookname-label">Book {i + 1}:</div>
                  <input
                    style={{width: '35vw', marginRight: '10px'}}
                    type="text"
                    className="book-name-input"
                    id={'book' + (i + 1) + 'input'}
                    defaultValue={book}
                    {...register(`${i}`)}
                  />
                </label>
              </div>
            ))}
            <button type="submit" className="button-black">
              Save
            </button>
          </form>
        </div>
      </div>
      <div id="alert">
        <Fade in={showAlert}>
          <Alert severity="error" sx={{background: 'black', color: 'white'}}>
            Error: Duplicate Book Names
          </Alert>
        </Fade>
      </div>
    </>
  );
};

export default SetBooks;
