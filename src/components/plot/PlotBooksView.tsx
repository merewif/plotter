import React, {useState} from 'react';
import PlotChart from './PlotChart';
import MoodBoard from '../MoodBoard';
import type {Book, ChartData} from '../../types/types';
import {usePlotStore} from '../../utils/stores/PlotStore';
import PlotSidebar from './PlotSidebar';

const BooksView = () => {
  const books = usePlotStore(state => state.books);
  const saveBook = usePlotStore(state => state.saveBook);
  const [selectedBook, setSelectedBook] = useState<string>();

  function saveChart(chartData: ChartData) {
    if (!selectedBook) return;
    const book: Book = {...(books.get(selectedBook) as Book), chartData};
    saveBook(selectedBook, book);
  }

  function saveImages(images: string[]) {
    if (!selectedBook) return;
    const book: Book = {...(books.get(selectedBook) as Book), imgArray: images};
    saveBook(selectedBook, book);
  }

  return (
    <>
      {selectedBook && books.has(selectedBook) ? (
        <MoodBoard images={(books.get(selectedBook) as Book).imgArray} saveImages={saveImages} />
      ) : null}
      <div className="viewstate">
        {[...books.values()].sort().map((book, index) => {
          return (
            <button
              key={index}
              className="book-display-in-view"
              style={{
                background: selectedBook === book.title ? 'white' : 'black',
                color: selectedBook === book.title ? 'black' : 'white',
                border: selectedBook === book.title ? '1px solid black' : 'none',
              }}
              onClick={() => setSelectedBook(book.title)}
            >
              {book.title}
            </button>
          );
        })}
      </div>
      {selectedBook && books.has(selectedBook) ? (
        <>
          <div style={{marginTop: 75}}>
            <PlotChart
              saveChart={saveChart}
              chartData={(books.get(selectedBook) as Book).chartData}
            />
          </div>
          {selectedBook ? <PlotSidebar bookTitle={selectedBook} /> : null}
        </>
      ) : null}
    </>
  );
};

export default BooksView;
