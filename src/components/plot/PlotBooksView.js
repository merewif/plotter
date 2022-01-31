import React, { useState, useEffect } from "react";
import PlotChart from "./PlotChart";
import $ from "jquery";
import MoodBoard from "../../MoodBoard";

const BooksView = ({
  setCurrentlyOpenedBook,
  setCurrentlyOpenedChapter,
  setSummary,
}) => {
  const [storedBooks, setStoredBooks] = useState("");
  const [fetchBook, setFetchBook] = useState([
    ["Time", "Stakes", { role: "tooltip", type: "string", p: { html: true } }],
    [0, 0, "Startpoint"],
    [100, 0, "Endpoint"],
  ]);
  const [clickTarget, setClickTarget] = useState("");
  const [chartData, setChartData] = useState(fetchBook);
  const [characterImages, setCharacterImages] = useState([
    "https://i.imgur.com/w1AGMhl.png",
  ]);
  const [showMoodboard, setShowMoodboard] = useState();

  const [chartContainerStyle, setChartContainerStyle] = useState({
    display: "none",
  });

  useEffect(function importbook() {
    if ("books" in localStorage) {
      setStoredBooks(JSON.parse(localStorage.books));
    }
  }, []);

  function fetchChart(event) {
    event.preventDefault();
    setStoredBooks(JSON.parse(localStorage.books));

    setChartContainerStyle({ display: "block" });
    $(".right-side").show();

    setClickTarget(event.target.id);
    setCurrentlyOpenedBook([$(event.target).text(), event.target.id]);
    setCurrentlyOpenedChapter("");

    setFetchBook(storedBooks[event.target.id].chartData);
    setChartData(storedBooks[event.target.id].chartData);
    setShowMoodboard();
    setTimeout(() => {
      setShowMoodboard(
        <MoodBoard
          images={storedBooks[event.target.id].imgArray}
          ChangeData={(characterImages) => setCharacterImages(characterImages)}
        />
      );
    }, 1);
    setCharacterImages(storedBooks[event.target.id].imgArray);

    $(".book-display-in-view, .book-display-sidebar").css({
      background: "black",
      color: "white",
    });
    $("#" + event.target.id).css({
      background: "white",
      color: "black",
    });
    $(event.target).css({
      background: "white",
      color: "black",
    });

    setSummary("");
    if (storedBooks[event.target.id][event.target.id + "Summary"]) {
      setSummary(storedBooks[event.target.id][event.target.id + "Summary"]);
    }
  }

  function saveChart(event) {
    event.preventDefault();
    let newStoredData = {
      ...storedBooks,
      [clickTarget]: {
        ...storedBooks[clickTarget],
        chartData: chartData,
        imgArray: characterImages,
      },
    };
    localStorage.setItem("books", JSON.stringify(newStoredData));
    setStoredBooks(JSON.parse(localStorage.books));
  }

  return (
    <div>
      {showMoodboard}
      <div id="books-view" className="viewstate">
        {Object.keys(storedBooks)
          .sort()
          .map(function (key, index) {
            return (
              <button
                key={index}
                className="book-display-in-view"
                id={key}
                onClick={fetchChart}
              >
                {storedBooks[key].name}
              </button>
            );
          })}
      </div>
      <div id="fetched-book-container" style={chartContainerStyle}>
        <PlotChart
          saveChart={saveChart}
          chartData={chartData}
          setChartData={setChartData}
          setFetchBook={setFetchBook}
        />
      </div>
    </div>
  );
};

export default BooksView;
