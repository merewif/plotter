import React, {useState, useEffect} from 'react';
import PlotChart from './PlotChart';
import MoodBoard from '../MoodBoard';

interface Props {
  setCurrentlyOpenedBook: (arg: any) => void;
  setCurrentlyOpenedChapter: (arg: any) => void;
  setSummary: (arg: any) => void;
}

const ChaptersView = ({setCurrentlyOpenedBook, setCurrentlyOpenedChapter, setSummary}: Props) => {
  const [storedBooks, setStoredBooks] = useState<{[key: string]: any}>({});
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
    //   ...storedBooks,
    //   [currentBook]: {
    //     ...storedBooks[currentBook],
    //     chaptersContent: {
    //       ...storedBooks[currentBook].chaptersContent,
    //       [currentChapter]: chartSavedData,
    //       [currentChapter + 'Images']: chapterImages,
    //     },
    //   },
    // };
    // localStorage.setItem('books', JSON.stringify(newBookData));
    // setStoredBooks(JSON.parse(localStorage.books));
  }

  useEffect(() => {
    if ('books' in localStorage) {
      setStoredBooks(JSON.parse(localStorage.books));
    }
  }, [chapterCount]);

  function fetchChapterList(event: any) {
    // event.preventDefault();
    // setStoredBooks(JSON.parse(localStorage.books));
    // setShowMoodboard();
    // setChapterCount(0);
    // setCurrentBook(event.target.id);
    // setCurrentlyOpenedBook([$(event.target).text(), event.target.id]);
    // setCurrentlyOpenedChapter("");
    // setTimeout(() => {
    //   setChapterCount(Number(storedBooks[event.target.id].chapters));
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
    // if (storedBooks[event.target.id][event.target.id + "Summary"]) {
    //   setSummary(storedBooks[event.target.id][event.target.id + "Summary"]);
    // }
  }

  function fetchChapter(event: any) {
    // event.preventDefault();
    // setStoredBooks(JSON.parse(localStorage.books));
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
    //   storedBooks[currentBook].chaptersContent[event.target.id] &&
    //   storedBooks[currentBook].chaptersContent[event.target.id].length !== 0
    // ) {
    //   setChartSavedData(storedBooks[currentBook].chaptersContent[event.target.id]);
    // } else {
    //   setChartSavedData(chartDefaultData);
    // }
    // if (storedBooks[currentBook].chaptersContent[event.target.id + 'Images']) {
    //   setChapterImages();
    //   setShowMoodboard();
    //   setTimeout(() => {
    //     setShowMoodboard(
    //       <MoodBoard
    //         images={storedBooks[currentBook].chaptersContent[event.target.id + 'Images']}
    //         ChangeData={chapterImages => setChapterImages(chapterImages)}
    //       />,
    //     );
    //     setChapterImages(storedBooks[currentBook].chaptersContent[event.target.id + 'Images']);
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
    // if (storedBooks[currentBook].chaptersContent[event.target.id + 'Summary']) {
    //   setSummary(storedBooks[currentBook].chaptersContent[event.target.id + 'Summary']);
    // }
  }

  function addChapter() {
    // let newBookData = {
    //   ...storedBooks,
    //   [currentBook]: {
    //     ...storedBooks[currentBook],
    //     chapters: Number(storedBooks[currentBook].chapters) + 1,
    //   },
    // };
    // localStorage.setItem('books', JSON.stringify(newBookData));
    // setStoredBooks(JSON.parse(localStorage.books));
    // setChapterCount(chapterCount + 1);
  }

  function removeChapter() {
    // if (Number(storedBooks[currentBook].chapters) > 1) {
    //   let newBookData = {
    //     ...storedBooks,
    //     [currentBook]: {
    //       ...storedBooks[currentBook],
    //       chapters: Number(storedBooks[currentBook].chapters) - 1,
    //     },
    //   };
    //   localStorage.setItem('books', JSON.stringify(newBookData));
    //   setStoredBooks(JSON.parse(localStorage.books));
    //   setChapterCount(chapterCount - 1);
    // }
  }

  return (
    <div>
      {showMoodboard}
      <div id="chapters-view" className="viewstate">
        {Object.keys(storedBooks)
          .sort()
          .map(function (key, index) {
            return (
              <button
                key={index}
                className="book-display-in-view"
                id={key}
                onClick={fetchChapterList}
              >
                {storedBooks[key].name}
              </button>
            );
          })}
      </div>
      <div id="chapter-list-container">
        {[...Array(chapterCount)].map((e, i) => (
          <button
            className="chapterButtons"
            key={i}
            id={currentBook + 'chapter' + (i + 1)}
            onClick={fetchChapter}
          >
            Chapter {i + 1}
          </button>
        ))}
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
