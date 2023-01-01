import React, {useState, useEffect, useCallback} from 'react';
import {usePlotStore} from '../../utils/stores/PlotStore';
import {useForm} from 'react-hook-form';

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

  const handleDataChange = useCallback(() => {
    if (bookTitle && chapterTitle) {
      reset({summary: books.get(bookTitle)?.chapters.get(chapterTitle)?.summary});
    }
    if (bookTitle && !chapterTitle) {
      reset({summary: books.get(bookTitle)?.summary});
    }
  }, [bookTitle, chapterTitle, books, reset]);

  useEffect(() => {
    handleDataChange();
  }, [bookTitle, chapterTitle, handleDataChange]);

  const updateSummary = (data: {summary: string}) => {
    const book = books.get(bookTitle);
    if (!book) return;
    if (chapterTitle) {
      const chapter = book.chapters.get(chapterTitle);
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
    <section className="flex h-full w-[15vw] min-w-[15vw] flex-col bg-black pt-5 text-white ">
      <div className="flex flex-col text-white">
        <h1 className="mx-auto text-2xl">{bookTitle}</h1>
        {chapterTitle ? <h2 className="mx-auto text-xl">Chapter {chapterTitle}</h2> : null}
      </div>
      <form
        className="flex h-full max-h-[84vh] flex-col pt-5"
        onSubmit={handleSubmit(updateSummary)}
      >
        <p className="mx-auto font-montserrat">Summary:</p>
        <textarea
          className="w-70 max-w-70 my-5 mx-auto h-3/4 border border-dotted border-gray-600 bg-transparent p-5 font-display text-white"
          placeholder="Who does what to whom, when, where, how, and why?"
          {...register('summary')}
        />
        <button
          className="mx-auto w-1/3 rounded border border-white bg-white font-montserrat text-sm font-black uppercase text-black hover:bg-black hover:text-white"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </section>
  );
};

export default PlotSidebar;
