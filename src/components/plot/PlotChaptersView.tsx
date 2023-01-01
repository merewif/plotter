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

  function saveChart(chartData: ChartData, arcSummaries: Map<number, string>) {
    if (!selectedBook || !selectedChapter) return;
    const book = books.get(selectedBook);
    if (!book) return;
    const chapter = book.chapters.get(selectedChapter);
    if (!chapter) return;
    const newChapter: Chapter = {...chapter, chartData, arcSummaries};
    saveChapter(book, newChapter);
  }

  function changeChapterCount(changeFunction: typeof incrementChapters | typeof decrementChapters) {
    if (!selectedBook) return;
    const book = books.get(selectedBook);
    if (!book) return;
    changeFunction(book);
  }

  function saveImages(images: string[]) {
    if (!selectedBook || !selectedChapter) return;
    const book = books.get(selectedBook);
    if (!book) return;
    const chapter = book.chapters.get(selectedChapter);
    if (!chapter) return;
    const newChapter: Chapter = {...chapter, imgArray: images};
    saveChapter(book, newChapter);
  }

  return (
    <>
      {selectedChapter && selectedBook ? (
        <MoodBoard
          images={books.get(selectedBook)?.chapters.get(selectedChapter)?.imgArray}
          saveImages={saveImages}
        />
      ) : null}
      <div className="flex flex-col">
        <div className="mx-auto flex">
          {[...books.values()].sort().map((book, index) => {
            return (
              <button
                key={index}
                className="mx-1 px-2"
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
        <div className="mx-auto my-2">
          {selectedBook && books.get(selectedBook)
            ? [...books.get(selectedBook)!.chapters.keys()].map((key, i) => (
                <button
                  className="mx-1 px-2"
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
        books.has(selectedBook) &&
        books.get(selectedBook)?.chapters.has(selectedChapter) ? (
          <div>
            <PlotChart
              saveChart={saveChart}
              arcSummaries={books.get(selectedBook)!.chapters.get(selectedChapter)!.arcSummaries}
              chartData={books.get(selectedBook)!.chapters.get(selectedChapter)!.chartData}
            />
          </div>
        ) : null}
        {selectedBook && !selectedChapter ? (
          <div className="flex w-full">
            <button
              onClick={() => changeChapterCount(decrementChapters)}
              className="upeprcase mx-2 cursor-pointer border border-black bg-white p-4 font-montserrat font-black text-black"
            >
              Remove Chapter
            </button>
            <button
              onClick={() => changeChapterCount(incrementChapters)}
              className="upeprcase mx-2 cursor-pointer border border-black bg-white p-4 font-montserrat font-black text-black"
            >
              Add Chapter
            </button>
          </div>
        ) : null}
        {selectedBook && selectedChapter ? (
          <PlotSidebar bookTitle={selectedBook} chapterTitle={selectedChapter} />
        ) : null}
      </div>
    </>
  );
};

export default ChaptersView;
