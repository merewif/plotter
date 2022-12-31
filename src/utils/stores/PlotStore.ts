import create from 'zustand';

import type {Books, Book, Chapter} from '../../types/types';
import {DefaultPlotChartData} from '../static/Plot';

export interface PlotStore {
  books: Books;
  setBooks: (titles: Array<string>) => void;
  saveBook: (title: string, book: Book) => void;
  incrementChapters: (book: Book) => void;
  decrementChapters: (book: Book) => void;
  saveChapter: (book: Book, chapter: Chapter) => void;
}

export const usePlotStore = create<PlotStore>(set => ({
  books: {},
  setBooks: (titles: Array<string>) => {
    set(state => {
      const newBooksState = {...state};
      titles.forEach(title => {
        newBooksState.books[title] = {
          title: title,
          summary: newBooksState.books[title]?.summary || '',
          chartData: newBooksState.books[title]?.chartData || DefaultPlotChartData,
          imgArray: newBooksState.books[title]?.imgArray || ['https://i.imgur.com/w1AGMhl.png'],
          chapters: newBooksState.books[title]?.chapters || {},
        };
      });
      return newBooksState;
    });
  },
  saveBook: (title: string, book: Book) => {
    set(state => ({
      books: {
        ...state.books,
        [title]: {
          ...state.books[title],
          ...book,
        },
      },
    }));
  },
  incrementChapters: (book: Book) => {
    set(state => ({
      books: {
        ...state.books,
        [book.title]: {
          ...book,
          chapters: {
            ...book.chapters,
            [Object.keys(book.chapters).length + 1]: {
              title: Object.keys(book.chapters).length + 1,
              summary: '',
              chartData: DefaultPlotChartData,
              imgArray: ['https://i.imgur.com/w1AGMhl.png'],
            },
          },
        },
      },
    }));
  },
  decrementChapters: (book: Book) => {
    const newChapters = {...book.chapters};
    delete newChapters[Object.keys(book.chapters).length];
    set(state => ({
      books: {
        ...state.books,
        [book.title]: {
          ...book,
          chapters: newChapters,
        },
      },
    }));
  },
  saveChapter: (book: Book, chapter: Chapter) => {
    set(state => ({
      books: {
        ...state.books,
        [book.title]: {
          ...book,
          chapters: {
            ...book.chapters,
            [chapter.title]: {
              ...book.chapters[chapter.title],
              ...chapter,
            },
          },
        },
      },
    }));
  },
}));
