/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import {usePlotStore} from '@utils/stores/PlotStore';
import MoodBoard from '@components/MoodBoard';
import PlotChart from '@components/plot/PlotChart';
import PlotSidebar from '@components/plot/PlotSidebar';
import type {ChartData} from '@types';
import {useRouter} from 'next/router';
import {DefaultPlotChartData} from '@utils/static/Plot';

const ChaptersView = () => {
  const books = usePlotStore(state => state.books);
  const saveBook = usePlotStore(state => state.saveBook);
  const saveChapter = usePlotStore(state => state.saveChapter);
  const {query} = useRouter();
  const {book: selectedBook, chapter: selectedChapter} = query;

  function saveChart(chartData: ChartData, arcSummaries: Map<number, string>) {
    if (!selectedBook) return;
    if (Array.isArray(selectedChapter) || Array.isArray(selectedBook)) return;
    const book = books.get(selectedBook);
    if (!book) return;
    if (!selectedChapter) {
      saveBook(selectedBook, {...book, chartData, arcSummaries});
      return;
    }
    const chapter = book.chapters.get(selectedChapter);
    if (!chapter) return;
    saveChapter(book, {...chapter, chartData, arcSummaries});
  }

  function saveImages(images: string[]) {
    if (!selectedBook || !selectedChapter) return;
    if (Array.isArray(selectedChapter) || Array.isArray(selectedBook)) return;
    const book = books.get(selectedBook);
    if (!book) return;
    if (!selectedChapter) {
      saveBook(selectedBook, {...book, imgArray: images});
      return;
    }
    const chapter = book.chapters.get(selectedChapter);
    if (!chapter) return;
    saveChapter(book, {...chapter, imgArray: images});
  }

  if (
    !selectedBook ||
    Array.isArray(selectedBook) ||
    (!Array.isArray(selectedBook) && !books.has(selectedBook))
  )
    return <div className="m-auto">Book not found.</div>;

  if (
    selectedChapter &&
    (Array.isArray(selectedChapter) ||
      !(!Array.isArray(selectedChapter) && books.get(selectedBook)?.chapters.has(selectedChapter)))
  )
    return <div className="m-auto">Chapter not found.</div>;

  return (
    <div className="flex h-full">
      <MoodBoard
        images={
          selectedChapter && selectedBook
            ? books.get(selectedBook)?.chapters.get(selectedChapter)?.imgArray
            : selectedBook
            ? books.get(selectedBook)?.imgArray
            : []
        }
        saveImages={saveImages}
      />

      <div className="black-scrollbar flex max-h-[90vh] w-full flex-col gap-2 overflow-auto overflow-x-hidden pt-10">
        <PlotChart
          saveChart={saveChart}
          arcSummaries={
            selectedChapter && selectedBook
              ? books.get(selectedBook)!.chapters.get(selectedChapter)!.arcSummaries
              : selectedBook
              ? books.get(selectedBook)!.arcSummaries
              : new Map<number, string>()
          }
          chartData={
            selectedChapter && selectedBook
              ? books.get(selectedBook)!.chapters.get(selectedChapter)!.chartData
              : selectedBook
              ? books.get(selectedBook)!.chartData
              : DefaultPlotChartData
          }
        />
      </div>
      <PlotSidebar bookTitle={selectedBook} chapterTitle={selectedChapter} />
    </div>
  );
};

export default ChaptersView;
