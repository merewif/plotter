import React, {useState} from 'react';
import ChaptersView from '../../components/plot/PlotChaptersView';
import BooksView from '../../components/plot/PlotBooksView';
import classNames from 'classnames';

const StoryArcs = () => {
  const [displayView, setDisplayView] = useState<'books' | 'chapters'>();

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="mb-auto mt-5 flex w-full justify-center align-middle">
        <button
          className={classNames(
            'mx-1',
            'px-1',
            'text-white',
            {
              'border border-black bg-white text-black': displayView === 'books',
            },
            {
              'bg-black': displayView !== 'books',
            },
          )}
          onClick={() => setDisplayView('books')}
        >
          Books
        </button>
        <button
          className={classNames(
            'mx-1',
            'px-1',
            'text-white',
            {
              'border border-black bg-white text-black': displayView === 'chapters',
            },
            {
              'bg-black': displayView !== 'chapters',
            },
          )}
          onClick={() => setDisplayView('chapters')}
        >
          Chapters
        </button>
      </div>
      <div className="flex h-full items-center justify-center">
        {!displayView ? 'Navigate to the Books or Chapters module using the buttons above.' : null}
        {displayView === 'books' ? <BooksView /> : null}
        {displayView === 'chapters' ? <ChaptersView /> : null}
      </div>
    </div>
  );
};

export default StoryArcs;
