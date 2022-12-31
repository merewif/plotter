import React, {useState} from 'react';
import ChaptersView from '../../components/plot/PlotChaptersView';
import BooksView from '../../components/plot/PlotBooksView';
import classNames from 'classnames';

const StoryArcs = () => {
  const [displayView, setDisplayView] = useState<'books' | 'chapters'>();
  const [alignment, setAlignment] = useState();

  return (
    <div className="mb-auto mt-5 flex flex-col gap-2">
      <div className="flex w-full justify-center align-middle">
        <button
          className={classNames(
            'mx-1',
            'border',
            'border-black',
            'px-1',
            'bg-black',
            'text-white',
            {
              'bg-white text-black': displayView === 'books',
            },
          )}
          onClick={() => setDisplayView('books')}
        >
          Books
        </button>
        <button
          className={classNames(
            'mx-1',
            'border',
            'border-black',
            'px-1',
            'bg-black',
            'text-white',
            {
              'bg-white text-black': displayView === 'chapters',
            },
          )}
          onClick={() => setDisplayView('chapters')}
        >
          Chapters
        </button>
      </div>
      {!displayView ? 'Navigate to the Books or Chapters module using the buttons above.' : null}
      {displayView === 'books' ? <BooksView /> : null}
      {displayView === 'chapters' ? <ChaptersView /> : null}
    </div>
  );
};

export default StoryArcs;
