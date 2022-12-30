import React, {useState, useEffect} from 'react';
import {usePlotStore} from '../../utils/stores/PlotStore';
import {useForm} from 'react-hook-form';
import type {Book, Chapter} from '../../types/types';

interface Props {
  book: Book;
  chapter?: Chapter;
}

const PlotSidebar = ({book, chapter}: Props) => {
  const books = usePlotStore(state => state.books);
  const saveBook = usePlotStore(state => state.saveBook);
  const saveChapter = usePlotStore(state => state.saveChapter);
  const [buttonText, setButtonText] = useState('Save');
  const {register, handleSubmit, reset} = useForm<{summary: string}>();

  useEffect(() => {
    if (book && chapter) {
      reset({summary: books[book.title]?.chapters[chapter.title]?.summary});
    }
    if (book && !chapter) {
      reset({summary: books[book.title]?.summary});
    }
  }, [book, chapter, books, reset]);

  const updateSummary = (data: {summary: string}) => {
    if (book && chapter) {
      saveChapter(book, {...chapter, summary: data.summary});
    }
    if (book && !chapter) {
      saveBook(book.title, {...book, summary: data.summary});
    }
    setButtonText('Saved');
    setTimeout(() => {
      setButtonText('Save');
    }, 1500);
  };

  return (
    <section className="right-side">
      <div id="currently-viewing">
        <h1>{book.title}</h1>
        {chapter ? <h2>{chapter.title}</h2> : null}
      </div>
      <form id="right-sidebar-input" onSubmit={handleSubmit(updateSummary)}>
        <label>
          <p style={{fontFamily: 'Montserrat', margin: 0}}>one-sentence summary</p>
          <textarea
            id="one-sentence-summary"
            placeholder="Who does what to whom, when, where, how, and why?"
            {...register('summary')}
          />
        </label>
        <button id="save-summary" type="submit">
          {buttonText}
        </button>
      </form>
    </section>
  );
};

export default PlotSidebar;
