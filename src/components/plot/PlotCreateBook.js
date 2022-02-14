import React, { useState, useEffect } from "react";
import CircularIntegration from "../../components/mui/AnimatedSaveButton";

const CreateBook = () => {
  const chartData = [
    ["Time", "Stakes", { role: "tooltip", type: "string", p: { html: true } }],
    [0, 0, "Startpoint"],
    [100, 0, "Endpoint"],
  ];
  const [bookCounter, setBookCounter] = useState(0);
  const imgArray = ["https://i.imgur.com/w1AGMhl.png"];
  const [books, setBooks] = useState({});
  const [buttonText, setButtonText] = useState("Confirm & Submit");

  useEffect(() => {
    if ("books" in localStorage) {
      setBooks(JSON.parse(localStorage.books));
      setBookCounter(Object.keys(JSON.parse(localStorage.books)).length);
    }

    if (
      "books" in localStorage &&
      Object.keys(JSON.parse(localStorage.books)).length === 0
    ) {
      localStorage.removeItem("books");
    }
  }, []);

  function addBook(event) {
    event.preventDefault();
    setBookCounter(bookCounter + 1);
    let bookObject = {
      ...books,
      ["book" + Number(bookCounter + 1)]: {
        name: "Placeholder Name",
        chapters: 1,
        chartData: chartData,
        imgArray: imgArray,
        ["book" + Number(bookCounter + 1) + "Summary"]: "",
        chaptersContent: {},
      },
    };
    //  localStorage.setItem("books", JSON.stringify(bookObject));
    setBooks(bookObject);
  }

  function deductBook(event) {
    event.preventDefault();
    if (bookCounter > 0) {
      setBookCounter(bookCounter - 1);
    }
    let bookObject = books;
    delete bookObject["book" + Number(bookCounter)];
    setBooks(bookObject);
    //  localStorage.setItem("books", JSON.stringify(bookObject));
  }

  function confirmBooks(event) {
    event.preventDefault();

    setButtonText("Saved");
    let bookObject = {};
    for (let i = 1; i <= bookCounter; i++) {
      let bookName = document.getElementById("book" + i + "input").value;

      let fetchedChapterCount = books["book" + i]?.chapters ?? 1;
      let fetchedImgArray = books["book" + i]?.imgArray ?? imgArray;
      let fetchedChartData = books["book" + i]?.chartData ?? chartData;
      let fetchedChaptersContent = books["book" + i]?.chaptersContent ?? {};
      let fetchedBookSummary = books["book" + i]["book" + i + "Summary"] ?? "";
      bookObject = {
        ...bookObject,
        ["book" + i]: {
          name: bookName,
          chapters: fetchedChapterCount,
          chartData: fetchedChartData,
          imgArray: fetchedImgArray,
          ["book" + i + "Summary"]: fetchedBookSummary,
          chaptersContent: fetchedChaptersContent,
        },
      };
      localStorage.setItem("books", JSON.stringify(bookObject));
    }
  }

  return (
    <div>
      <div>
        <p style={{ fontFamily: "Montserrat" }}>
          Set the name and the number of the books you plan to outline.
        </p>
      </div>
      <div id="book-creator">
        <div id="book-counter">
          <button className="set-book-count" onClick={deductBook}>
            <b style={{ fontFamily: "Montserrat" }}>-</b>
          </button>
          <h1>{bookCounter}</h1>
          <button className="set-book-count" onClick={addBook}>
            <b style={{ fontFamily: "Montserrat" }}>+</b>
          </button>
        </div>
      </div>
      <div id="book-namer">
        {[...Array(bookCounter)].map((e, i) => (
          <div key={i} style={{ display: "flex", paddingLeft: "20vh" }}>
            <form>
              <label>
                <div className="bookname-label">Book {i + 1}:</div>
                <input
                  style={{ width: "35vw", marginRight: "10px" }}
                  type="text"
                  name="name"
                  className="book-name-input"
                  id={"book" + (i + 1) + "input"}
                  defaultValue={books["book" + Number(i + 1)].name}
                />
              </label>
            </form>
          </div>
        ))}
      </div>
      <div id="circular-save-btn-container">
        <CircularIntegration
          clickFunction={confirmBooks}
          buttonText={buttonText}
          returnToggle={"circle"}
        />
      </div>
    </div>
  );
};

export default CreateBook;
