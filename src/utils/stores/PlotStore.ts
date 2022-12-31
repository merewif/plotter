import create from 'zustand';
import produce from 'immer';
import {enableMapSet} from 'immer';
enableMapSet();

import type {Book, Chapter} from '../../types/types';
import {DefaultPlotChartData} from '../static/Plot';

export interface PlotStore {
  books: Map<string, Book>;
  setBooks: (titles: Array<string>) => void;
  saveBook: (title: string, book: Book) => void;
  incrementChapters: (book: Book) => void;
  decrementChapters: (book: Book) => void;
  saveChapter: (book: Book, chapter: Chapter) => void;
}

export const usePlotStore = create<PlotStore>(set => ({
  books: new Map(),
  setBooks: (titles: Array<string>) => {
    set(state =>
      produce(state, draftState => {
        titles.forEach(title => {
          draftState.books.set(title, {
            title: title,
            summary: draftState.books.get(title)?.summary || '',
            chartData: draftState.books.get(title)?.chartData || DefaultPlotChartData,
            imgArray: draftState.books.get(title)?.imgArray || ['https://i.imgur.com/w1AGMhl.png'],
            arcSummaries: draftState.books.get(title)?.arcSummaries || new Map(),
            chapters: draftState.books.get(title)?.chapters || new Map(),
          });
        });
      }),
    );
  },
  saveBook: (title: string, book: Book) => {
    set(state =>
      produce(state, draftState => {
        draftState.books.set(title, {
          ...draftState.books.get(title),
          ...book,
        });
      }),
    );
  },
  incrementChapters: (book: Book) => {
    set(state =>
      produce(state, draftState => {
        const newBook = {...book};
        const newChapters = new Map(book.chapters);
        const numChapters = newChapters.size;
        newChapters.set((numChapters + 1).toString(), {
          title: (numChapters + 1).toString(),
          summary: '',
          chartData: DefaultPlotChartData,
          arcSummaries: new Map(),
          imgArray: ['https://i.imgur.com/w1AGMhl.png'],
        });
        newBook.chapters = newChapters;
        draftState.books.set(book.title, newBook);
      }),
    );
  },
  decrementChapters: (book: Book) => {
    set(state =>
      produce(state, draftState => {
        const newBook = {...book};
        const newChapters = new Map(book.chapters);
        newChapters.delete(newChapters.size.toString());
        newBook.chapters = newChapters;
        draftState.books.set(book.title, newBook);
      }),
    );
  },
  saveChapter: (book: Book, chapter: Chapter) => {
    set(state =>
      produce(state, draftState => {
        const newBook = {...book};
        const newChapters = new Map(book.chapters);
        newChapters.set(chapter.title, {
          ...newChapters.get(chapter.title),
          ...chapter,
        });
        newBook.chapters = newChapters;
        draftState.books.set(book.title, newBook);
      }),
    );
  },
}));
