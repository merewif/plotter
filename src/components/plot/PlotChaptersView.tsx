/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {useState, useEffect} from 'react';
import PlotChart from './PlotChart';
import MoodBoard from '../MoodBoard';
import {usePlotStore} from '../../utils/stores/PlotStore';
import type {Chapter, ChartData} from '../../types/types';
import PlotSidebar from './PlotSidebar';

const ChaptersView = () => {
  const books = usePlotStore(state => state.books);
  const incrementChapters = usePlotStore(state => state.incrementChapters);
  const decrementChapters = usePlotStore(state => state.decrementChapters);
  const saveChapter = usePlotStore(state => state.saveChapter);
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

  useEffect(() => {
    setSelectedChapter(null);
  }, [selectedBook]);

  function saveChart(chartData: ChartData) {
    if (!selectedBook || !selectedChapter) return;
    const book = books[selectedBook];
    if (!book) return;
    const chapter = book.chapters[selectedChapter];
    if (!chapter) return;
    const newChapter: Chapter = {...chapter, chartData};
    saveChapter(book, newChapter);
  }

  function changeChapterCount(changeFunction: typeof incrementChapters | typeof decrementChapters) {
    if (!selectedBook) return;
    const book = books[selectedBook];
    if (!book) return;
    changeFunction(book);
  }

  function saveImages(images: string[]) {
    if (!selectedBook || !selectedChapter) return;
    const book = books[selectedBook];
    if (!book) return;
    const chapter = book.chapters[selectedChapter];
    if (!chapter) return;
    const newChapter: Chapter = {...chapter, imgArray: images};
    saveChapter(book, newChapter);
  }

  return (
    <div>
      {selectedChapter && selectedBook ? (
        <MoodBoard
          images={books[selectedBook]?.chapters[selectedChapter]?.imgArray}
          saveImages={saveImages}
        />
      ) : null}
      <div id="chapters-view" className="viewstate">
        {Object.keys(books).map((key, index) => {
          return (
            <button
              key={index}
              className="book-display-in-view"
              style={{
                backgroundColor: selectedBook === key ? 'white' : 'black',
                color: selectedBook === key ? 'black' : 'white',
                border: selectedBook === key ? '1px solid black' : '1px solid white',
              }}
              onClick={() => setSelectedBook(key)}
            >
              {key}
            </button>
          );
        })}
      </div>
      <div id="chapter-list-container">
        {selectedBook && books[selectedBook]
          ? Object.keys(books[selectedBook]!.chapters).map((key, i) => (
              <button
                className="chapterButtons"
                key={i}
                onClick={() => setSelectedChapter(key)}
                style={{
                  backgroundColor: selectedChapter === key ? 'white' : 'black',
                  color: selectedChapter === key ? 'black' : 'white',
                  border: selectedChapter === key ? '1px solid black' : '1px solid white',
                }}
              >
                Chapter {i + 1}
              </button>
            ))
          : null}
      </div>

      {selectedChapter &&
      selectedBook &&
      books[selectedBook] &&
      books[selectedBook]?.chapters[selectedChapter] ? (
        <div style={{marginTop: 125}}>
          <PlotChart
            saveChart={saveChart}
            chartData={books[selectedBook]!.chapters[selectedChapter]!.chartData}
          />
        </div>
      ) : null}
      {selectedBook && !selectedChapter ? (
        <div style={{width: '100%'}}>
          <button onClick={() => changeChapterCount(decrementChapters)} id="remove-chapter-btn">
            Remove Chapter
          </button>
          <button onClick={() => changeChapterCount(incrementChapters)} id="add-chapter-btn">
            Add Chapter
          </button>
        </div>
      ) : null}
      {selectedBook && selectedChapter ? (
        <PlotSidebar bookTitle={selectedBook} chapterTitle={selectedChapter} />
      ) : null}
    </div>
  );
};

export default ChaptersView;
