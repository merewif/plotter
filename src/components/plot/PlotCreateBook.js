import React, { useState } from "react";
import $ from "jquery";
import Plotsidebar from "./Plotsidebar";

const CreateBook = ({ bookCount, savedBookNames }) => {
  const chartData = [
    ["Time", "Stakes", { role: "tooltip", type: "string", p: { html: true } }],
    [0, 0, "Startpoint"],
    [100, 0, "Endpoint"],
  ];
  const [bookCounter, setBookCounter] = useState(bookCount);
  const [newBooks, setNewBooks] = useState({});
  const imgArray = ["https://i.imgur.com/w1AGMhl.png"];

  function addBook(event) {
    event.preventDefault();
    setBookCounter(bookCounter + 1);
  }

  function deductBook(event) {
    event.preventDefault();
    if (bookCounter > 0) {
      setBookCounter(bookCounter - 1);
    }
  }

  function saveBookName(event) {
    event.preventDefault();
    let bookid = event.target.id;
    let inputField = document.getElementById(bookid + "input").value;

    setNewBooks({
      ...newBooks,
      [bookid]: {
        name: inputField,
        chapters: 1,
        chartData: chartData,
        imgArray: imgArray,
        chaptersContent: {},
      },
    });
  }

  function confirmBooks(event) {
    event.preventDefault();
    localStorage.setItem("books", JSON.stringify(newBooks));
    $(event.target).text("Saved");
  }

  return (
    <div>
      <p>
        Set the number of books you plan to outline.<br></br>
        <b>WARNING: </b> This will override <b>ALL </b> your currently saved
        books, including charts and moodboards.
      </p>
      <div id="book-creator">
        <div id="book-counter">
          <button className="set-book-count" onClick={deductBook}>
            -
          </button>
          <h1>{bookCounter}</h1>
          <button className="set-book-count" onClick={addBook}>
            +
          </button>
        </div>
      </div>
      <div id="book-namer">
        {[...Array(bookCounter)].map((e, i) => (
          <form key={i}>
            <label>
              <div className="bookname-label">Book {i + 1}: </div>
              <input
                type="text"
                name="name"
                className="book-name-input"
                id={"book" + (i + 1) + "input"}
                placeholder={savedBookNames[i]}
              />
            </label>
            <input
              type="button"
              value="Save"
              className="book-name-input-button"
              id={"book" + (i + 1)}
              onClick={saveBookName}
            />
          </form>
        ))}
      </div>
      <button id="confirmbooks" onClick={confirmBooks}>
        Confirm & Submit
      </button>
    </div>
  );
};

export default CreateBook;
