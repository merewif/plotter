import React, { useState, useEffect } from "react";
import $ from "jquery";
import MoodBoard from "../../MoodBoard";
import WorldbuildingSidebar from "./WorldbuildingSidebar";
import autosize from "autosize";
import SimpleSnackbar from "../mui/Snackbar";

const WorldbuildingFetchModule = ({
  worldbuildingObject,
  setWorldbuildingObject,
  currentlyOpenedModule,
  sampleItem,
  moduleIntroductionPhrase,
}) => {
  const [moduleData, setModuleData] = useState(
    worldbuildingObject[currentlyOpenedModule]
  );
  const [currentlyOpenedItem, setCurrentlyOpenedItem] = useState();
  const [isFetched, setIsFetched] = useState(false);
  const [itemImages, setItemImages] = useState([]);
  const [snackbarMessage, setSnackbarMessage] = useState("Changes saved.");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  function addItem() {
    let keyname = Math.floor(Math.random() * 9000000);
    let sampleKeys = Object.keys(sampleItem);
    let newObject = {
      ...worldbuildingObject,
      [currentlyOpenedModule]: {
        ...worldbuildingObject[currentlyOpenedModule],
        [keyname]: {
          itemid: keyname,
        },
      },
    };

    for (let i = 0; i < sampleKeys.length; i++) {
      if (sampleKeys[i] === "itemid") {
        i++;
      } else {
        newObject[currentlyOpenedModule][keyname][sampleKeys[i]] =
          sampleItem[sampleKeys[i]];
      }
    }

    localStorage.setItem("worldbuilding", JSON.stringify(newObject));
    setWorldbuildingObject(JSON.parse(localStorage.worldbuilding));
    setModuleData(
      JSON.parse(localStorage.worldbuilding)[currentlyOpenedModule]
    );
  }

  useEffect(() => {
    autosize(document.querySelectorAll("textarea"));
  });

  useEffect(() => {
    if (
      moduleData[currentlyOpenedItem] ||
      typeof moduleData[currentlyOpenedItem] === "object"
    ) {
      setIsFetched(false);
      setTimeout(() => {
        setItemImages(moduleData[currentlyOpenedItem].images);
        setIsFetched(true);
      }, 1);
    }
  }, [currentlyOpenedItem]);

  function saveChangedItem() {
    let keylist = Object.keys(moduleData[currentlyOpenedItem]);
    let changedForms = {};
    let newObject = {
      ...worldbuildingObject,
      [currentlyOpenedModule]: {
        ...worldbuildingObject[currentlyOpenedModule],
        [currentlyOpenedItem]: {
          itemid: currentlyOpenedItem,
          name: document.getElementById("textarea-name").value,
          icon: document.getElementById("item-icon").value,
          images: itemImages,
        },
      },
    };

    for (let i = 0; i < keylist.length; i++) {
      if (
        keylist[i] === "itemid" ||
        keylist[i] === "images" ||
        keylist[i] === "icon" ||
        keylist[i] === "name"
      ) {
        i++;
      } else {
        newObject[currentlyOpenedModule][currentlyOpenedItem][keylist[i]] =
          document.getElementById("textarea-" + keylist[i]).value;
      }
    }

    localStorage.setItem("worldbuilding", JSON.stringify(newObject));
    setModuleData(
      JSON.parse(localStorage.worldbuilding)[currentlyOpenedModule]
    );
    setWorldbuildingObject(JSON.parse(localStorage.worldbuilding));
  }

  function deleteItem() {
    setIsFetched(false);
    let storedObject = JSON.parse(localStorage.worldbuilding);
    delete storedObject[currentlyOpenedModule][currentlyOpenedItem];
    localStorage.setItem("worldbuilding", JSON.stringify(storedObject));
    setModuleData(
      JSON.parse(localStorage.worldbuilding)[currentlyOpenedModule]
    );
    setWorldbuildingObject(JSON.parse(localStorage.worldbuilding));
    setSnackbarMessage("Item deleted.");
    setSnackbarOpen(true);
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
        data={worldbuildingObject[currentlyOpenedModule]}
        setCurrentlyOpenedItem={setCurrentlyOpenedItem}
        addItem={addItem}
      />
      <div className="worldbuilding-module">
        {isFetched ? (
          <div id="art-viewer">
            {typeof moduleData[currentlyOpenedItem] === "object"
              ? Object.keys(moduleData[currentlyOpenedItem]).map((e, i) => {
                  if (e === "itemid" || e === "images" || e === "icon") {
                    return;
                  } else {
                    return (
                      <div key={e}>
                        <h2 className="wb-textarea-label">
                          {e.replace(/([A-Z])/g, " $1").trim()}
                        </h2>
                        <textarea
                          id={"textarea-" + e}
                          defaultValue={moduleData[currentlyOpenedItem][e]}
                          onChange={saveChangedItem}
                          placeholder={
                            typeof moduleData[currentlyOpenedItem] === "object"
                              ? moduleData[currentlyOpenedItem][e]
                              : null
                          }
                        ></textarea>
                      </div>
                    );
                  }
                })
              : null}

            <form id="icon-link" style={{ marginTop: "20px" }}>
              <label>Icon Link:</label>
              <input
                type="text"
                id="item-icon"
                defaultValue={
                  typeof moduleData[currentlyOpenedItem] === "object"
                    ? moduleData[currentlyOpenedItem].icon
                    : null
                }
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
                onClick={() => {
                  saveChangedItem();
                  setSnackbarMessage("Changes saved.");
                  setSnackbarOpen(true);
                }}
                className="button-black"
                style={{
                  display: "inline-block",
                  position: "relative",
                  width: "200px",
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
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
                  fontFamily: "Montserrat",
                  fontSize: "0.8rem",
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
            {moduleIntroductionPhrase}
          </p>
        )}
      </div>
      <SimpleSnackbar
        message={snackbarMessage}
        open={snackbarOpen}
        setOpen={setSnackbarOpen}
      />
    </div>
  );
};

export default WorldbuildingFetchModule;
