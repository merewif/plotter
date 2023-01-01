/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import classNames from 'classnames';
import {usePlotStore} from '@utils/stores/PlotStore';
import Link from 'next/link';

const ChaptersView = () => {
  const books = usePlotStore(state => state.books);
  const incrementChapters = usePlotStore(state => state.incrementChapters);
  const decrementChapters = usePlotStore(state => state.decrementChapters);

  function changeChapterCount(
    bookTitle: string,
    changeFunction: typeof incrementChapters | typeof decrementChapters,
  ) {
    const book = books.get(bookTitle);
    if (!book) return;
    changeFunction(book);
  }

  return (
    <div className="mx-auto flex h-full flex-col ">
      {[...books.values()].sort().map((book, bookIndex) => {
        return (
          <div key={bookIndex} className="border border-black">
            <Link href={`/plot/arcs/arc?book=${book.title}`} className={classNames('mx-1 px-2')}>
              {book.title}
            </Link>
            <div className="flex">
              <button
                onClick={() => changeChapterCount(book.title, decrementChapters)}
                className="mx-2 cursor-pointer  bg-white p-4 font-montserrat font-black uppercase text-black"
              >
                -
              </button>
              <div className="grid grid-cols-10">
                {[...books.get(book.title)!.chapters.keys()].map((key, chapterIndex) => (
                  <Link
                    href={`/plot/arcs/arc?book=${book.title}&chapter=${key}`}
                    className="mx-1 h-10 px-2"
                    key={chapterIndex}
                  >
                    Chapter {key}
                  </Link>
                ))}
              </div>
              <button
                onClick={() => changeChapterCount(book.title, incrementChapters)}
                className="mx-2 cursor-pointer  bg-white p-4 font-montserrat font-black uppercase text-black"
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChaptersView;
