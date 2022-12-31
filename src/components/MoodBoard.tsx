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

  useEffect(function importImages() {
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
    <section id="character-sidebar" className="left-side">
      <p>Moodboard</p>
      <div id="moodboard-container"></div>
      <div id="moodboard">
        {imgArray.map(function (image) {
          return <img className="moodboard-image" key={image} src={image} />;
        })}

        <input
          type="text"
          id="image-input"
          placeholder="Paste image link here"
          onChange={currentUrl}
        />

        <form onSubmit={handleSubmit}>
          <button id="submit-image" type="submit">
            Submit
          </button>
        </form>

        <button onClick={deleteLast} id="reset-moodboard">
          {deleteButton}
        </button>
      </div>
    </section>
  );
};

export default MoodBoard;
