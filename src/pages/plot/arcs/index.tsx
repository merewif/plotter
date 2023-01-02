/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import classNames from 'classnames';
import {usePlotStore} from '@utils/stores/PlotStore';
import Link from 'next/link';

const StoryUnitSelector = () => {
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
    <div className="black-scrollbar mx-auto flex h-full max-h-[90vh] w-full flex-col gap-5 overflow-auto py-10 px-10 font-montserrat">
      <div className="my-5 flex flex-col text-center text-xl">
        <span className="font-montserrat text-3xl font-black uppercase">
          Select the story unit you want to work on
        </span>
        <span className="font-montserrat text-base font-light">
          Click on a book or a chapter title to open the story chart editor of that unit.
        </span>
      </div>
      {[...books.values()].sort().map((book, bookIndex) => {
        return (
          <div key={bookIndex} className="flex flex-col rounded-lg border border-black px-10 ">
            <Link
              href={`/plot/arcs/arc?book=${book.title}`}
              className={classNames(
                'mx-auto my-5 px-2 text-xl font-black uppercase hover:underline',
              )}
            >
              {book.title}
            </Link>
            <div className="flex w-full py-5">
              <button
                onClick={() => changeChapterCount(book.title, decrementChapters)}
                className="mx-2 cursor-pointer bg-white p-4  font-black uppercase text-black"
              >
                -
              </button>
              <div className="grid w-full grid-cols-10 gap-1 text-center">
                {[...books.get(book.title)!.chapters.keys()].map((key, chapterIndex) => (
                  <Link
                    href={`/plot/arcs/arc?book=${book.title}&chapter=${key}`}
                    className={classNames('my-auto px-2 hover:underline', {
                      'border-r border-black':
                        (chapterIndex + 1) % 10 !== 0 &&
                        chapterIndex + 1 !== books.get(book.title)!.chapters.size,
                    })}
                    key={chapterIndex}
                  >
                    Chapter {key}
                  </Link>
                ))}
              </div>
              <button
                onClick={() => changeChapterCount(book.title, incrementChapters)}
                className="mx-2 ml-auto cursor-pointer  bg-white p-4  font-black uppercase text-black"
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

export default StoryUnitSelector;
