import React, {useState, useEffect} from 'react';
import PlotChart from './PlotChart';
import MoodBoard from '../MoodBoard';
import {Book, Chapter} from '../../types/types';
import {usePlotStore} from '../../utils/stores/PlotStore';
import PlotSidebar from './PlotSidebar';

const BooksView = () => {
  const books = usePlotStore(state => state.books);
  const saveBook = usePlotStore(state => state.saveBook);
  const [selectedBook, setSelectedBook] = useState<Book>();
  const [fetchBook, setFetchBook] = useState([
    ['Time', 'Stakes', {role: 'tooltip', type: 'string', p: {html: true}}],
    [0, 0, 'Startpoint'],
    [100, 0, 'Endpoint'],
  ]);
  const [clickTarget, setClickTarget] = useState('');
  const [chartData, setChartData] = useState(fetchBook);
  const [characterImages, setCharacterImages] = useState(['https://i.imgur.com/w1AGMhl.png']);

  function fetchChart(event: any) {
    // event.preventDefault();
    // setbooks(JSON.parse(localStorage.books));
    // setChartContainerStyle({ display: "block" });
    // // $(".right-side").show();
    // setClickTarget(event.target.id);
    // setBook([$(event.target).text(), event.target.id]);
    // setChapter("");
    // setFetchBook(books[event.target.id].chartData);
    // setChartData(books[event.target.id].chartData);
    // setShowMoodboard(
    //   <MoodBoard
    //     images={books[event.target.id].imgArray}
    //     ChangeData={(characterImages) => setCharacterImages(characterImages)}
    //   />
    // );
    // setCharacterImages(books[event.target.id].imgArray);
    // // $(".book-display-in-view, .book-display-sidebar").css({
    // //   background: "black",
    // //   color: "white",
    // // });
    // // $("#" + event.target.id).css({
    // //   background: "white",
    // //   color: "black",
    // // });
    // // $(event.target).css({
    // //   background: "white",
    // //   color: "black",
    // // });
    // setSummary("");
    // if (books?[event.target.id]?[event.target.id + "Summary"]) {
    //   setSummary(books[event.target.id][event.target.id + "Summary"]);
    // }
  }

  function saveChart(event: any) {
    // event.preventDefault();
    // let newStoredData = {
    //   ...books,
    //   [clickTarget]: {
    //     ...books[clickTarget],
    //     chartData: chartData,
    //     imgArray: characterImages,
    //   },
    // };
    // localStorage.setItem('books', JSON.stringify(newStoredData));
    // setbooks(JSON.parse(localStorage.books));
  }

  const showBook = (bookTitle: string) => {
    const book = books[bookTitle];
    setSelectedBook(book);
  };

  return (
    <>
      {selectedBook ? (
        <MoodBoard
          images={selectedBook.imgArray}
          ChangeData={characterImages => setCharacterImages(characterImages)}
        />
      ) : null}
      <div className="viewstate">
        {Object.keys(books)
          .sort()
          .map(function (key, index) {
            return (
              <button
                key={index}
                className="book-display-in-view"
                style={{
                  background: selectedBook?.title === key ? 'white' : 'black',
                  color: selectedBook?.title === key ? 'black' : 'white',
                  border: selectedBook?.title === key ? '1px solid black' : 'none',
                }}
                id={key}
                onClick={() => showBook(key)}
              >
                {key}
              </button>
            );
          })}
      </div>
      {selectedBook ? (
        <>
          <div style={{marginTop: 75}}>
            <PlotChart
              saveChart={saveChart}
              chartData={chartData}
              setChartData={setChartData}
              setFetchBook={setFetchBook}
            />
          </div>
          <PlotSidebar book={selectedBook} />
        </>
      ) : null}
    </>
  );
};

export default BooksView;
