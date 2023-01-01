/* eslint-disable @next/next/no-img-element */
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {useForm} from 'react-hook-form';

interface Props {
  images?: string[];
  saveImages: (data: string[]) => void;
}

const MoodBoard = ({images = ['https://i.imgur.com/w1AGMhl.png'], saveImages}: Props) => {
  const [deleteButtonIcon, setDeleteButtonIcon] = useState<
    typeof faCheckCircle | typeof faTrashAlt
  >(faTrashAlt);
  const {register, handleSubmit, reset} = useForm<{image: string}>();

  function onSubmit(data: {image: string}) {
    if (!data.image || data.image === '') {
      return;
    }
    saveImages([...images, data.image]);
    reset();
  }

  function deleteLast() {
    saveImages(images.slice(0, -1));
    setDeleteButtonIcon(faCheckCircle);
    setTimeout(() => {
      setDeleteButtonIcon(faTrashAlt);
    }, 1000);
  }

  return (
    <div className="flex h-full max-h-full w-[15vw] min-w-[15vw] flex-col bg-black text-white">
      <div
        className="white-scrollbar flex h-full max-h-[84vh] flex-col overflow-auto py-5"
        style={{direction: 'rtl'}}
      >
        {images.map((image, i) => {
          return <img alt="" key={i} src={image} />;
        })}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-3 mt-auto flex gap-2">
        <input
          className="w-3/4 border border-white px-1  text-black placeholder-black"
          type="text"
          placeholder="Paste image link here"
          {...register('image')}
        />
        <button
          className="rounded border border-white px-1 hover:bg-white hover:text-black"
          type="submit"
        >
          Submit
        </button>
        <button onClick={deleteLast}>
          <FontAwesomeIcon icon={deleteButtonIcon} id="fa-icon" />
        </button>
      </form>
    </div>
  );
};

export default MoodBoard;
