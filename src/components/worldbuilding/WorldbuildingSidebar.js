import React from "react";
import $ from "jquery";

const WorldbuildingSidebar = ({ data, setCurrentlyOpenedItem, addItem }) => {
  return (
    <div className="right-side" id="worldbuilding-sidebar">
      <div className="worldbuilding-module-container">
        {Object.keys(data).map((e, i) => {
          return (
            <div
              key={e}
              id={data[e].itemid}
              className="item"
              onClick={(event) => {
                {
                  console.log(data[e].itemid);
                  setCurrentlyOpenedItem(data[e].itemid);
                  $(".worldbuilding-grid-item").removeClass("active-tile");
                  $(
                    "#" + data[e].itemid + " > .worldbuilding-grid-item"
                  ).addClass("active-tile");
                }
              }}
            >
              <div className="worldbuilding-grid-item">
                <h3>{data[e].name}</h3>
                <img src={data[e].icon} className="worldbuilding-item-icon" />
              </div>
            </div>
          );
        })}
      </div>
      <button className="button-black" onClick={addItem}>
        Add Item
      </button>
    </div>
  );
};

export default WorldbuildingSidebar;
