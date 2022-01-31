import React, { useState, useEffect } from "react";
import $ from "jquery";
import MoodBoard from "../../MoodBoard";
import moodboardImage from "../../imgs/moodboard.png";
import WorldbuildingSidebar from "./WorldbuildingSidebar";

const Art = ({ worldbuildingObject, setWorldbuildingObject }) => {
  const [moduleData, setModuleData] = useState(worldbuildingObject.art);
  const [currentlyOpenedItem, setCurrentlyOpenedItem] = useState();
  const [isFetched, setIsFetched] = useState(false);
  const [itemImages, setItemImages] = useState([]);

  function addItem() {
    let keyname = Math.floor(Math.random() * 9000000);
    let newObject = {
      ...worldbuildingObject,
      art: {
        ...worldbuildingObject.art,
        [keyname]: {
          itemid: keyname,
          name: "",
          artis: "",
          description: "",
          lore: "",
          icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/mona-lisa.svg",
          images: [moodboardImage],
        },
      },
    };

    localStorage.setItem("worldbuilding", JSON.stringify(newObject));
    setWorldbuildingObject(JSON.parse(localStorage.worldbuilding));
    setModuleData(JSON.parse(localStorage.worldbuilding).art);
  }

  useEffect(() => {
    if (currentlyOpenedItem) {
      setIsFetched(false);
      setTimeout(() => {
        setItemImages(moduleData[currentlyOpenedItem].images);
        setIsFetched(true);
      }, 1);
    }
  }, [currentlyOpenedItem]);

  function saveChangedItem() {
    let newObject = {
      ...worldbuildingObject,
      art: {
        ...worldbuildingObject.art,
        [currentlyOpenedItem]: {
          itemid: currentlyOpenedItem,
          name: document.getElementById("textarea-name").value,
          artist: document.getElementById("textarea-artist").value,
          description: document.getElementById("textarea-description").value,
          lore: document.getElementById("textarea-lore").value,
          icon: document.getElementById("item-icon").value,
          images: itemImages,
        },
      },
    };
    localStorage.setItem("worldbuilding", JSON.stringify(newObject));
    setModuleData(JSON.parse(localStorage.worldbuilding).art);
    setWorldbuildingObject(JSON.parse(localStorage.worldbuilding));
  }

  function deleteItem() {
    setIsFetched(false);
    let storedObject = JSON.parse(localStorage.worldbuilding);
    delete storedObject.art[currentlyOpenedItem];
    localStorage.setItem("worldbuilding", JSON.stringify(storedObject));
    setModuleData(JSON.parse(localStorage.worldbuilding).art);
    setWorldbuildingObject(JSON.parse(localStorage.worldbuilding));
  }

  $(".right-side").show();

  return (
    <div>
      {isFetched ? (
        <MoodBoard
          images={itemImages}
          ChangeData={(itemImages) => setItemImages(itemImages)}
        />
      ) : null}
      <WorldbuildingSidebar
        data={moduleData}
        setCurrentlyOpenedItem={setCurrentlyOpenedItem}
        addItem={addItem}
      />
      <div className="worldbuilding-module">
        {isFetched ? (
          <div id="art-viewer">
            <textarea
              id="textarea-artist"
              defaultValue={moduleData[currentlyOpenedItem].artist}
              onChange={saveChangedItem}
              placeholder="Click here to edit the artist."
            ></textarea>
            <textarea
              id="textarea-name"
              defaultValue={moduleData[currentlyOpenedItem].name}
              onChange={saveChangedItem}
              placeholder="Click here to edit the name of the artwork."
            ></textarea>

            <h3>Description</h3>
            <textarea
              id="textarea-description"
              defaultValue={moduleData[currentlyOpenedItem].description}
              onChange={saveChangedItem}
              placeholder="Click here write. Describe the artwork itself here."
            ></textarea>
            <h3>Lore</h3>
            <textarea
              id="textarea-lore"
              defaultValue={moduleData[currentlyOpenedItem].lore}
              onChange={saveChangedItem}
              placeholder="Click here write. Describe the history of the artwork here."
            ></textarea>
            <form id="icon-link" style={{ marginTop: "20px" }}>
              <label>Icon Link:</label>
              <input
                type="text"
                id="item-icon"
                defaultValue={moduleData[currentlyOpenedItem].icon}
                onChange={saveChangedItem}
              />
              <a href="https://game-icons.net/">(Get neat icons from here.)</a>
            </form>
            <div
              style={{
                position: "absolute",
                top: "98%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <button
                onClick={saveChangedItem}
                className="button-black"
                style={{
                  display: "inline-block",
                  position: "relative",
                  width: "200px",
                }}
              >
                Save item
              </button>
              <button
                onClick={deleteItem}
                className="button-black"
                style={{
                  marginLeft: "10px",
                  display: "inline-block",
                  position: "relative",
                  width: "200px",
                }}
              >
                Delete item
              </button>
            </div>
          </div>
        ) : (
          <p
            style={{
              textAlign: "center",
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
            }}
          >
            "Learn about art, Captain. When you understand a species' art, you
            understand that species." <br /> <i>Grand Admiral Thrawn</i>
          </p>
        )}
      </div>
    </div>
  );
};

export default Art;
