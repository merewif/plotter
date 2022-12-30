import React, {useState, useEffect} from 'react';
import PlotChart from './PlotChart';
import MoodBoard from '../MoodBoard';
import {usePlotStore} from '../../utils/stores/PlotStore';
import {Book} from '../../types/types';

interface Props {
  setBook: (arg: any) => void;
  setChapter: (arg: any) => void;
}

const ChaptersView = ({setBook, setChapter}: Props) => {
  const books = usePlotStore(state => state.books);
  const [selectedBook, setSelectedBook] = useState<Book>();
  const [chapterCount, setChapterCount] = useState(0);
  const [currentBook, setCurrentBook] = useState('');
  const [currentChapter, setCurrentChapter] = useState('');
  const [chartDefaultData, setChartDefaultData] = useState([
    ['Time', 'Stakes', {role: 'tooltip', type: 'string', p: {html: true}}],
    [0, 0, 'Startpoint'],
    [100, 0, 'Endpoint'],
  ]);
  const [chartSavedData, setChartSavedData] = useState(chartDefaultData);
  const [chartNewData, setChartNewData] = useState([]);
  const [chapterImages, setChapterImages] = useState(['https://i.imgur.com/w1AGMhl.png']);
  const [showMoodboard, setShowMoodboard] = useState();

  function saveChart() {
    // let newBookData = {
    //   ...books,
    //   [currentBook]: {
    //     ...books[currentBook],
    //     chaptersContent: {
    //       ...books[currentBook].chaptersContent,
    //       [currentChapter]: chartSavedData,
    //       [currentChapter + 'Images']: chapterImages,
    //     },
    //   },
    // };
    // localStorage.setItem('books', JSON.stringify(newBookData));
    // setbooks(JSON.parse(localStorage.books));
  }

  function fetchChapterList(event: any) {
    // event.preventDefault();
    // setbooks(JSON.parse(localStorage.books));
    // setShowMoodboard();
    // setChapterCount(0);
    // setCurrentBook(event.target.id);
    // setBook([$(event.target).text(), event.target.id]);
    // setCurrentlyOpenedChapter("");
    // setTimeout(() => {
    //   setChapterCount(Number(books[event.target.id].chapters));
    // }, 1);
    // $(".right-side").show();
    // $("#fetched-chapter-container").hide();
    // $("#remove-chapter-btn, #add-chapter-btn").show();
    // $(".book-display-in-view, .book-display-sidebar").css({
    //   background: "black",
    //   color: "white",
    // });
    // $("#" + event.target.id).css({
    //   background: "white",
    //   color: "black",
    // });
    // $(event.target).css({
    //   background: "white",
    //   color: "black",
    // });
    // $(".chapterButtons").css({
    //   width: "60%",
    //   "margin-bottom": "5px",
    //   "margin-left": "20%",
    //   "margin-right": "19%",
    //   padding: "5px",
    //   "font-size": "1.25em",
    //   background: "black",
    //   color: "white",
    // });
    // $("#chapter-list-container").css({
    //   height: "50vh",
    //   display: "block",
    //   top: "60%",
    // });
    // setSummary("");
    // if (books[event.target.id][event.target.id + "Summary"]) {
    //   setSummary(books[event.target.id][event.target.id + "Summary"]);
    // }
  }

  function fetchChapter(event: any) {
    // event.preventDefault();
    // setbooks(JSON.parse(localStorage.books));
    // setCurrentChapter(event.target.id);
    // setCurrentlyOpenedChapter([$(event.target).text(), event.target.id]);
    // $('#remove-chapter-btn, #add-chapter-btn').hide();
    // $('.chapterButtons').css({
    //   'margin-bottom': '5px',
    //   'margin-left': '5px',
    //   'margin-right': '0px',
    //   padding: '5px',
    //   'font-size': '0.75em',
    //   background: 'black',
    //   color: 'white',
    //   'flex-basis': '100px',
    //   'flex-grow': '0',
    //   'flex-shrink': '0',
    //   border: 'none',
    //   boxShadow: 'none',
    // });
    // $(event.target).css({
    //   background: 'white',
    //   color: 'black',
    //   border: '1px solid black',
    //   boxShadow: '0px 0px 10px 0px #000000',
    // });
    // $('#chapter-list-container').css({
    //   height: 'auto',
    //   display: 'flex',
    //   top: '27.5%',
    // });
    // $('#fetched-chapter-container').show();
    // if (
    //   books[currentBook].chaptersContent[event.target.id] &&
    //   books[currentBook].chaptersContent[event.target.id].length !== 0
    // ) {
    //   setChartSavedData(books[currentBook].chaptersContent[event.target.id]);
    // } else {
    //   setChartSavedData(chartDefaultData);
    // }
    // if (books[currentBook].chaptersContent[event.target.id + 'Images']) {
    //   setChapterImages();
    //   setShowMoodboard();
    //   setTimeout(() => {
    //     setShowMoodboard(
    //       <MoodBoard
    //         images={books[currentBook].chaptersContent[event.target.id + 'Images']}
    //         ChangeData={chapterImages => setChapterImages(chapterImages)}
    //       />,
    //     );
    //     setChapterImages(books[currentBook].chaptersContent[event.target.id + 'Images']);
    //   }, 1);
    // } else {
    //   setChapterImages([]);
    //   setShowMoodboard();
    //   setTimeout(() => {
    //     setShowMoodboard(
    //       <MoodBoard
    //         images={['https://i.imgur.com/w1AGMhl.png']}
    //         ChangeData={chapterImages => setChapterImages(chapterImages)}
    //       />,
    //     );
    //   }, 1);
    // }
    // setSummary('');
    // if (books[currentBook].chaptersContent[event.target.id + 'Summary']) {
    //   setSummary(books[currentBook].chaptersContent[event.target.id + 'Summary']);
    // }
  }

  function addChapter() {
    // let newBookData = {
    //   ...books,
    //   [currentBook]: {
    //     ...books[currentBook],
    //     chapters: Number(books[currentBook].chapters) + 1,
    //   },
    // };
    // localStorage.setItem('books', JSON.stringify(newBookData));
    // setbooks(JSON.parse(localStorage.books));
    // setChapterCount(chapterCount + 1);
  }

  function removeChapter() {
    // if (Number(books[currentBook].chapters) > 1) {
    //   let newBookData = {
    //     ...books,
    //     [currentBook]: {
    //       ...books[currentBook],
    //       chapters: Number(books[currentBook].chapters) - 1,
    //     },
    //   };
    //   localStorage.setItem('books', JSON.stringify(newBookData));
    //   setbooks(JSON.parse(localStorage.books));
    //   setChapterCount(chapterCount - 1);
    // }
  }

  return (
    <div>
      {showMoodboard}
      <div id="chapters-view" className="viewstate">
        {Object.keys(books)
          .sort()
          .map(function (key, index) {
            return (
              <button
                key={index}
                className="book-display-in-view"
                id={key}
                onClick={() => setSelectedBook(books[key])}
              >
                {key}
              </button>
            );
          })}
      </div>
      <div id="chapter-list-container">
        {selectedBook
          ? Object.keys(selectedBook.chapters).map((e, i) => (
              <button
                className="chapterButtons"
                key={i}
                id={currentBook + 'chapter' + (i + 1)}
                onClick={fetchChapter}
              >
                Chapter {i + 1}
              </button>
            ))
          : null}
      </div>
      <div id="fetched-chapter-container">
        <PlotChart
          saveChart={saveChart}
          chartData={chartSavedData}
          setChartData={setChartSavedData}
          setFetchBook={setChartNewData}
        />
      </div>
      <div style={{width: '100%'}}>
        <button onClick={removeChapter} id="remove-chapter-btn">
          Remove Chapter
        </button>
        <button onClick={addChapter} id="add-chapter-btn">
          Add Chapter
        </button>
      </div>
    </div>
  );
};

export default ChaptersView;
