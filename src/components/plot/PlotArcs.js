import React, { useState } from "react";
import Plotsidebar from "./Plotsidebar";
import ChaptersView from "./PlotChaptersView";
import BooksView from "./PlotBooksView";
import $ from "jquery";

const StoryArcs = () => {
  const [displayView, setDisplayView] = useState("");
  const [currentlyOpenedBook, setCurrentlyOpenedBook] = useState("");
  const [currentlyOpenedChapter, setCurrentlyOpenedChapter] = useState("");
  const [summary, setSummary] = useState();

  return (
    <div>
      <Plotsidebar
        currentlyOpenedBook={currentlyOpenedBook}
        currentlyOpenedChapter={currentlyOpenedChapter}
        summary={summary}
        setSummary={setSummary}
      />
      {displayView}
      <div id="arcs-nav">
        <button
          className="arcs-btn"
          onClick={(e) => {
            setDisplayView("");
            setCurrentlyOpenedBook("");
            setCurrentlyOpenedChapter("");
            setTimeout(() => {
              setDisplayView(
                <BooksView
                  setCurrentlyOpenedBook={setCurrentlyOpenedBook}
                  setCurrentlyOpenedChapter={setCurrentlyOpenedChapter}
                  setSummary={setSummary}
                />
              );
            }, 1);
            $(".right-side").hide();
            $(".arcs-btn").css({ background: "white", color: "black" });
            $(e.target).css({ background: "black", color: "white" });
            $(".book-display-sidebar").css({
              background: "black",
              color: "white",
            });
            setSummary("");
          }}
        >
          Book View
        </button>
        <button
          className="arcs-btn"
          onClick={(e) => {
            setDisplayView("");
            setCurrentlyOpenedBook("");
            setCurrentlyOpenedChapter("");
            setTimeout(() => {
              setDisplayView(
                <ChaptersView
                  setCurrentlyOpenedBook={setCurrentlyOpenedBook}
                  setCurrentlyOpenedChapter={setCurrentlyOpenedChapter}
                  setSummary={setSummary}
                />
              );
            }, 1);
            $(".right-side").hide();
            $(".arcs-btn").css({ background: "white", color: "black" });
            $(e.target).css({ background: "black", color: "white" });
            $(".book-display-sidebar").css({
              background: "black",
              color: "white",
            });
            setSummary("");
          }}
        >
          Chapter View
        </button>
      </div>
    </div>
  );
};

export default StoryArcs;

//       <PlotChart />
