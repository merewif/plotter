import React, { useState, useEffect } from "react";
import CreateBook from "./components/plot/PlotCreateBook";
import StoryArcs from "./components/plot/PlotArcs";
import $ from "jquery";
import { Routes, Route, useNavigate } from "react-router-dom";

const Plot = () => {
  const [bookCount, setBookCount] = useState(0);
  const [savedBookNames, setSavedBookNames] = useState([]);
  const [savedChapterCount, setSavedChapterCount] = useState([]);

  let navigate = useNavigate();

  function setButtonStyle(e) {
    $("#plot-nav").css({ top: "110%" });
    $("#plot-nav button").css({ "font-size": "0.8em", height: "25px" });
    $(".plot-options").removeClass("white-active-btn");
    $(e.target).addClass("white-active-btn");
  }

  useEffect(() => {
    if ("books" in localStorage) {
      setBookCount(Object.keys(JSON.parse(localStorage.books)).length);
      let obj = Object.keys(JSON.parse(localStorage.books));
      let titlesArray = [];
      let chaptersArray = [];
      obj.map((book, index) => {
        titlesArray.push(JSON.parse(localStorage.books)[book].name);
        chaptersArray.push(JSON.parse(localStorage.books)[book].chapters);
        setSavedBookNames(titlesArray.sort());
        setSavedChapterCount(chaptersArray);
      });
    }
  }, []);

  return (
    <div id="character-module" class="module">
      <div>
        <Routes>
          <Route
            path="/set-books"
            element={
              <CreateBook
                bookCount={bookCount}
                savedBookNames={savedBookNames}
              />
            }
          />
          <Route path="/set-story-arcs" element={<StoryArcs />} />
        </Routes>
      </div>
      <div id="plot-nav">
        <button
          className="plot-options"
          id="set-books"
          onClick={(e) => {
            navigate(e.target.id);
            setButtonStyle(e);
          }}
        >
          Set Books
        </button>
        <button
          className="plot-options"
          id="set-story-arcs"
          onClick={(e) => {
            navigate(e.target.id);
            setButtonStyle(e);
          }}
        >
          Set Story Arcs
        </button>
      </div>
    </div>
  );
};

export default Plot;
