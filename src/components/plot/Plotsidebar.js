import React, { useState, useEffect } from "react";
import $ from "jquery";

const Plotsidebar = ({
  currentlyOpenedBook,
  currentlyOpenedChapter,
  summary,
  setSummary,
}) => {
  const [storedBooks, setStoredBooks] = useState("");
  const [summaryInput, setSummaryInput] = useState("");
  const [buttonText, setButtonText] = useState("Save");

  if (currentlyOpenedBook.length) {
    $("#right-sidebar-input").show();
  }

  useEffect(() => {
    if ("books" in localStorage) {
      setStoredBooks(JSON.parse(localStorage.books));
    }
  }, []);

  function saveSummary(event) {
    event.preventDefault();

    if (currentlyOpenedBook.length && !currentlyOpenedChapter.length) {
      let newBookData = {
        ...storedBooks,
        [currentlyOpenedBook[1]]: {
          ...storedBooks[currentlyOpenedBook[1]],
          [currentlyOpenedBook[1] + "Summary"]: summaryInput,
        },
      };

      localStorage.setItem("books", JSON.stringify(newBookData));
      setStoredBooks(JSON.parse(localStorage.books));
    } else if (currentlyOpenedBook.length && currentlyOpenedChapter.length) {
      let newBookData = {
        ...storedBooks,
        [currentlyOpenedBook[1]]: {
          ...storedBooks[currentlyOpenedBook[1]],
          chaptersContent: {
            ...storedBooks[currentlyOpenedBook[1]].chaptersContent,
            [currentlyOpenedChapter[1] + "Summary"]: summaryInput,
          },
        },
      };

      localStorage.setItem("books", JSON.stringify(newBookData));
      setStoredBooks(JSON.parse(localStorage.books));
    }

    setButtonText("Saved");
    setTimeout(() => {
      setButtonText("Save");
    }, 1500);
  }

  return (
    <section className="right-side">
      <div id="currently-viewing">
        <h1>{currentlyOpenedBook[0]}</h1>
        <h2>{currentlyOpenedChapter[0]}</h2>
      </div>
      <form id="right-sidebar-input">
        <label>
          <p style={{ fontFamily: "Montserrat", margin: 0 }}>
            one-sentence summary
          </p>
          <textarea
            id="one-sentence-summary"
            placeholder="Who does what to whom, when, where, how, and why?"
            value={summary}
            onChange={(event) => {
              setSummaryInput(event.target.value);
              setSummary(event.target.value);
            }}
          />
        </label>
        <button id="save-summary" onClick={saveSummary}>
          {buttonText}
        </button>
      </form>
    </section>
  );
};

export default Plotsidebar;
