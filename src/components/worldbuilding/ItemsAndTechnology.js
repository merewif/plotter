import React, { useState, useEffect } from "react";
import $ from "jquery";
import MoodBoard from "../../MoodBoard";
import moodboardImage from "../../imgs/moodboard.png";
import scrollImage from "../../imgs/tied-scroll.png";
import WorldbuildingSidebar from "./WorldbuildingSidebar";

const ItemsAndTechnology = ({
  worldbuildingObject,
  setWorldbuildingObject,
}) => {
  const [itemsAndTechnology, setItemsAndTechnology] = useState(
    worldbuildingObject.itemsAndTechnology
  );
  const [currentlyOpenedItem, setCurrentlyOpenedItem] = useState();
  const [isFetched, setIsFetched] = useState(false);
  const [itemImages, setItemImages] = useState([]);

  function addItem() {
    let keyname = Math.floor(Math.random() * 9000000);
    let newObject = {
      ...worldbuildingObject,
      itemsAndTechnology: {
        ...worldbuildingObject.itemsAndTechnology,
        [keyname]: {
          itemid: keyname,
          name: "",
          description: "",
          lore: "",
          icon: scrollImage,
          images: [moodboardImage],
        },
      },
    };

    localStorage.setItem("worldbuilding", JSON.stringify(newObject));
    setWorldbuildingObject(JSON.parse(localStorage.worldbuilding));
    setItemsAndTechnology(
      JSON.parse(localStorage.worldbuilding).itemsAndTechnology
    );
  }

  useEffect(() => {
    if (currentlyOpenedItem) {
      setIsFetched(false);
      setTimeout(() => {
        setItemImages(itemsAndTechnology[currentlyOpenedItem].images);
        setIsFetched(true);
      }, 1);
    }
  }, [currentlyOpenedItem]);

  function saveChangedItem() {
    let newObject = {
      ...worldbuildingObject,
      itemsAndTechnology: {
        ...worldbuildingObject.itemsAndTechnology,
        [currentlyOpenedItem]: {
          itemid: currentlyOpenedItem,
          name: document.getElementById("textarea-name").value,
          description: document.getElementById("textarea-description").value,
          lore: document.getElementById("textarea-lore").value,
          icon: document.getElementById("item-icon").value,
          images: itemImages,
        },
      },
    };
    localStorage.setItem("worldbuilding", JSON.stringify(newObject));
    setItemsAndTechnology(
      JSON.parse(localStorage.worldbuilding).itemsAndTechnology
    );
    setWorldbuildingObject(JSON.parse(localStorage.worldbuilding));
  }

  function deleteItem() {
    setIsFetched(false);
    let storedObject = JSON.parse(localStorage.worldbuilding);
    delete storedObject.itemsAndTechnology[currentlyOpenedItem];
    localStorage.setItem("worldbuilding", JSON.stringify(storedObject));
    setItemsAndTechnology(
      JSON.parse(localStorage.worldbuilding).itemsAndTechnology
    );
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
        data={itemsAndTechnology}
        setCurrentlyOpenedItem={setCurrentlyOpenedItem}
        addItem={addItem}
      />
      <div className="worldbuilding-module">
        {isFetched ? (
          <div id="items-and-technology-viewer">
            <textarea
              id="textarea-name"
              defaultValue={itemsAndTechnology[currentlyOpenedItem].name}
              onChange={saveChangedItem}
              placeholder="Click here to edit the name"
            ></textarea>
            <h3>Description</h3>
            <textarea
              id="textarea-description"
              defaultValue={itemsAndTechnology[currentlyOpenedItem].description}
              onChange={saveChangedItem}
              placeholder="Click here write. Describe the appearance and the utility of the item or technology here."
            ></textarea>
            <h3>Lore</h3>
            <textarea
              id="textarea-lore"
              defaultValue={itemsAndTechnology[currentlyOpenedItem].lore}
              onChange={saveChangedItem}
              placeholder="Click here write. Describe the history and the way the item relates to your world here."
            ></textarea>
            <form id="icon-link" style={{ marginTop: "20px" }}>
              <label>Icon Link:</label>
              <input
                type="text"
                id="item-icon"
                defaultValue={itemsAndTechnology[currentlyOpenedItem].icon}
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
          <h2
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
            }}
          >
            Choose or create an item in the right sidebar
          </h2>
        )}
      </div>
    </div>
  );
};

export default ItemsAndTechnology;
