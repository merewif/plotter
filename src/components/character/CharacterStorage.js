import React, { useState } from "react";
import CharacterFetch from "./CharacterFetch";
import $ from "jquery";

const Characterstorage = () => {
  const [cleared, setCleared] = useState("Delete all");
  const [array, setArray] = useState(Object.keys(localStorage));
  const [currentChar, setCurrentChar] = useState("");
  const [isFetched, setIsFetched] = useState(false);

  function clearLocalStorage() {
    let books = localStorage.getItem("books");
    localStorage.clear();
    localStorage.setItem("books", books);
    setArray([]);
    setCleared("Deleted");

    setTimeout(() => {
      setCleared("Delete all");
      setArray(Object.keys(localStorage));
    }, 1000);
  }

  function fetchCharacter(event) {
    setIsFetched(false);
    setTimeout(() => {
      setIsFetched(true);
    }, 1);
    setCurrentChar(event.target.id);
    $("#clear-storage").hide();

    $(".stored-chars").css({ background: "white", color: "black" });
    $(event.target).css({ background: "black", color: "white" });
  }

  function deleteCharacter() {
    setIsFetched(false);
    localStorage.removeItem(currentChar);
    setArray(Object.keys(localStorage));
  }

  return (
    <div id="stored-characters">
      <div id="stored-characters-list">
        {array.map((storedchar) => (
          <button
            id={storedchar}
            key={storedchar}
            onClick={fetchCharacter}
            className="stored-chars"
          >
            {storedchar.replace(/-/g, " ")}
          </button>
        ))}
      </div>

      <button id="clear-storage" onClick={clearLocalStorage}>
        {cleared}
      </button>
      <div id="storage-display">
        {isFetched ? (
          <CharacterFetch
            deleteCharacter={deleteCharacter}
            charID={currentChar}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Characterstorage;
