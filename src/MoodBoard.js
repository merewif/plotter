import React, { useState, useEffect } from "react";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faCheckCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const MoodBoard = (props) => {
  const [input, setInput] = useState("");
  const [imgArray, setImgArray] = useState(["https://i.imgur.com/w1AGMhl.png"]);
  const [deleteButton, setDeleteButton] = useState(
    <FontAwesomeIcon icon={faTrashAlt} id="fa-icon" />
  );

  const [imported, setImported] = useState(0);

  useEffect(function importImages() {
    if ("images" in props && imported === 0) {
      setImgArray(props.images);
      setImported(1);
    }
  });

  function currentUrl(event) {
    setInput(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setImgArray((imgArray) => [...imgArray, input]);
    props.ChangeData([...imgArray, input]);
    $("#image-input").val("");
    setInput("");
  }

  function deleteLast(e) {
    e.preventDefault();
    setImgArray(imgArray.slice(0, -1));
    props.ChangeData(imgArray.slice(0, -1));

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
