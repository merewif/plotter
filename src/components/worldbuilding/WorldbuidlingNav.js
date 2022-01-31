import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

const WorldbuildingNav = ({
  setCurrentlyOpenedModule,
  setWorldbuildingObject,
}) => {
  let navigate = useNavigate();

  function onClick(event) {
    $("#worldbuilding-navigation").css({
      "grid-auto-flow": "column",
      top: "111%",
      width: "97.5vw",
      height: "auto",
    });

    $(".worldbuilding-navbtn").css({
      "font-size": "0.65rem",
      width: "7.5vw",
      background: "white",
      color: "black",
    });

    $(event.target).css({ background: "black", color: "white" });

    if ("worldbuilding" in localStorage) {
      setWorldbuildingObject(JSON.parse(localStorage.worldbuilding));
    }

    navigate("/worldbuilding/" + event.target.id);
    setCurrentlyOpenedModule(event.target.id);
  }

  return (
    <div id="worldbuilding-navigation">
      <button className="worldbuilding-navbtn" onClick={onClick} id="art">
        Art
      </button>

      <button
        className="worldbuilding-navbtn"
        onClick={onClick}
        id="legends-and-religions"
      >
        Legends and Religions
      </button>
      <button
        className="worldbuilding-navbtn"
        onClick={onClick}
        id="locations-and-settings"
      >
        Locations and Settings
      </button>
      <button className="worldbuilding-navbtn" onClick={onClick} id="geography">
        Geography
      </button>
      <button
        className="worldbuilding-navbtn"
        onClick={onClick}
        id="flora-and-fauna"
      >
        Flora and Fauna
      </button>
      <button
        className="worldbuilding-navbtn"
        onClick={onClick}
        id="races-nations-cultures"
      >
        Races, Nations, Cultures
      </button>
      <button className="worldbuilding-navbtn" onClick={onClick} id="history">
        History
      </button>
      <button
        className="worldbuilding-navbtn"
        onClick={onClick}
        id="politics-and-economics"
      >
        Politics and Economics
      </button>
      <button
        className="worldbuilding-navbtn"
        onClick={onClick}
        id="items-and-technology"
      >
        Items and Technology
      </button>
      <button
        className="worldbuilding-navbtn"
        onClick={onClick}
        id="skills-and-spells"
      >
        Skills and Spells
      </button>
      <button
        className="worldbuilding-navbtn"
        onClick={onClick}
        id="magic-systems"
      >
        Magic Systems
      </button>
      <button
        className="worldbuilding-navbtn"
        onClick={onClick}
        id="professions"
      >
        Professions
      </button>
    </div>
  );
};

export default WorldbuildingNav;
