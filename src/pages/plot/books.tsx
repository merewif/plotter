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
    storedBooks.size === 0 ? [] : [...storedBooks.values()].map((book: Book) => book.title),
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
      <div className="mx-auto mb-auto mt-10 flex flex-col gap-10">
        <p className="mx-auto text-2xl">
          Set the number of the books you plan to outline and specify the titles of each book.
        </p>
        <div className="mx-auto flex gap-5">
          <button className="w-12" onClick={() => setBooks(books => books.slice(0, -1))}>
            <b className="font-montserrat text-5xl font-black">-</b>
          </button>
          <div className="rounded border border-black bg-black px-5 py-2 font-montserrat text-5xl font-black text-white">
            <h4>{books.length}</h4>
          </div>
          <button
            className="w-12"
            onClick={() => setBooks(books => [...books, `Book ${books.length + 1}`])}
          >
            <b className="font-montserrat text-5xl font-black">+</b>
          </button>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit(confirmBooks)}>
            {[...books.values()].map((book, i: number) => (
              <div key={i} className="flex justify-center gap-3">
                <div className="my-auto">Book {i + 1}:</div>
                <input
                  style={{width: '35vw'}}
                  type="text"
                  className="mt-2 mb-2 border-2 border-solid border-black px-1"
                  defaultValue={book}
                  {...register(`${i}`)}
                />
              </div>
            ))}
            <button
              type="submit"
              className="mx-auto rounded border bg-black p-2 text-white hover:border-black hover:bg-white hover:text-black"
            >
              Save books
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
