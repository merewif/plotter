import React, {useState, useEffect} from 'react';
import {usePlotStore} from '../../utils/stores/PlotStore';
import {useForm} from 'react-hook-form';
import type {Book, Chapter} from '../../types/types';

interface Props {
  bookTitle: string;
  chapterTitle?: string;
}

const PlotSidebar = ({bookTitle, chapterTitle}: Props) => {
  const books = usePlotStore(state => state.books);
  const saveBook = usePlotStore(state => state.saveBook);
  const saveChapter = usePlotStore(state => state.saveChapter);
  const [buttonText, setButtonText] = useState('Save');
  const {register, handleSubmit, reset} = useForm<{summary: string}>();

  useEffect(() => {
    if (bookTitle && chapterTitle) {
      reset({summary: books[bookTitle]?.chapters[chapterTitle]?.summary});
    }
    if (bookTitle && !chapterTitle) {
      reset({summary: books[bookTitle]?.summary});
    }
  }, [bookTitle, chapterTitle, books, reset]);

  const updateSummary = (data: {summary: string}) => {
    const book = books[bookTitle];
    if (!book) return;
    if (chapterTitle) {
      const chapter = book?.chapters[chapterTitle];
      if (!chapter) return;
      saveChapter(book, {...chapter, summary: data.summary});
    }
    if (!chapterTitle) {
      saveBook(bookTitle, {...book, summary: data.summary});
    }
    setButtonText('Saved');
    setTimeout(() => {
      setButtonText('Save');
    }, 1500);
  };

  return (
    <section className="right-side">
      <div id="currently-viewing">
        <h1>{bookTitle}</h1>
        {chapterTitle ? <h2>Chapter {chapterTitle}</h2> : null}
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
