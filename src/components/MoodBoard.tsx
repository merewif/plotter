/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

interface Props {
  images?: string[];
  saveImages: (data: string[]) => void;
}

const MoodBoard = ({images = [], saveImages}: Props) => {
  const SAVEBTN = document.getElementById('save-btn') ?? null;
  const SAVEBTN2 = document.getElementById('button-black') ?? null;

  const [input, setInput] = useState('');
  const [imgArray, setImgArray] = useState(['https://i.imgur.com/w1AGMhl.png']);
  const [deleteButton, setDeleteButton] = useState(
    <FontAwesomeIcon icon={faTrashAlt} id="fa-icon" />,
  );

  const [imported, setImported] = useState(0);

  useEffect(() => {
    if (images.length > 0 && imported === 0) {
      setImgArray(images);
      setImported(1);
    }
  }, []);

  function currentUrl(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setImgArray(imgArray => [...imgArray, input]);
    saveImages([...imgArray, input]);
    setInput('');
    if (SAVEBTN) SAVEBTN.classList.add('btn-unsaved');
    if (SAVEBTN2) SAVEBTN2.classList.add('btn-red');
  }

  function deleteLast(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setImgArray(imgArray.slice(0, -1));
    saveImages(imgArray.slice(0, -1));

    setDeleteButton(<FontAwesomeIcon icon={faCheckCircle} id="fa-icon" />);
    setTimeout(() => {
      setDeleteButton(<FontAwesomeIcon icon={faTrashAlt} id="fa-icon" />);
    }, 1000);
  }

  return (
    <div className="flex h-full max-w-sm flex-col bg-black text-white">
      <p className="mx-auto my-3">Moodboard</p>
      {imgArray.map(image => {
        return <img className="" alt="" key={image} src={image} />;
      })}
      <div className="mt-auto flex gap-2 p-3">
        <input
          className="flex-1 px-1"
          type="text"
          placeholder="Paste image link here"
          onChange={currentUrl}
        />
        <form
          onSubmit={handleSubmit}
          className="border border-white px-1 hover:bg-white hover:text-black"
        >
          <button type="submit">Submit</button>
        </form>
        <button onClick={deleteLast}>{deleteButton}</button>
      </div>
    </div>
  );
};

export default MoodBoard;
