import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import WorldbuildingNav from "./components/worldbuilding/WorldbuidlingNav";
import Art from "./components/worldbuilding/Art";
import LegendsAndReligions from "./components/worldbuilding/LegendsAndReligions";
import LocationsAndSettings from "./components/worldbuilding/LocationsAndSettings";
import Geography from "./components/worldbuilding/Geography";
import FloraAndFauna from "./components/worldbuilding/FloraAndFauna";
import RacesNationsCultures from "./components/worldbuilding/RacesNationsCultures";
import History from "./components/worldbuilding/History";
import PoliticsAndEconomics from "./components/worldbuilding/PoliticsAndEconomics";
import ItemsAndTechnology from "./components/worldbuilding/ItemsAndTechnology";
import SkillsAndSpells from "./components/worldbuilding/SkillsAndSpells";
import MagicSystems from "./components/worldbuilding/MagicSystems";
import Professions from "./components/worldbuilding/Professions";
import moodboardImage from "./imgs/moodboard.png";

const Worldbuilding = () => {
  const [currentlyOpenedModule, setCurrentlyOpenedModule] = useState();
  const [worldbuildingObject, setWorldbuildingObject] = useState({
    art: {
      item1: {
        itemid: "item1",
        name: "Sample Art",
        artist: "Placeholder Artist Name",
        description:
          "This is the artwork's description. Click here to edit the field.",
        lore: "This is the artwork's lore.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/mona-lisa.svg",
        images: [moodboardImage],
      },
    },
    legendsAndReligions: {
      item1: {
        itemid: "item1",
        name: "Sample Creature",
        appearance:
          "This is the creature's appearance. Click here to edit the field.",
        evolutuion:
          "This is the evolutionary history of the creature. Click here to edit the field.",
        utility:
          "These are the utilities of the creature.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/church.svg",
        images: [moodboardImage],
      },
    },
    locationsAndSettings: {
      item1: {
        itemid: "item1",
        name: "Sample Creature",
        appearance:
          "This is the creature's appearance. Click here to edit the field.",
        evolutuion:
          "This is the evolutionary history of the creature. Click here to edit the field.",
        utility:
          "These are the utilities of the creature.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/lorc/treasure-map.svg",
        images: [moodboardImage],
      },
    },
    geography: {
      item1: {
        itemid: "item1",
        name: "Sample Creature",
        appearance:
          "This is the creature's appearance. Click here to edit the field.",
        evolutuion:
          "This is the evolutionary history of the creature. Click here to edit the field.",
        utility:
          "These are the utilities of the creature.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/lorc/globe.svg",
        images: [moodboardImage],
      },
    },
    floraAndFauna: {
      item1: {
        itemid: "item1",
        name: "Sample Creature",
        appearance:
          "This is the creature's appearance. Click here to edit the field.",
        evolutuion:
          "This is the evolutionary history of the creature. Click here to edit the field.",
        utility:
          "These are the utilities of the creature.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/darkzaitzev/plants-and-animals.svg",
        images: [moodboardImage],
      },
    },
    racesNationsCultures: {
      item1: {
        itemid: "item1",
        name: "Sample Creature",
        appearance:
          "This is the creature's appearance. Click here to edit the field.",
        evolutuion:
          "This is the evolutionary history of the creature. Click here to edit the field.",
        utility:
          "These are the utilities of the creature.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/family-tree.svg",
        images: [moodboardImage],
      },
    },
    history: {
      item1: {
        itemid: "item1",
        name: "Sample Creature",
        appearance:
          "This is the creature's appearance. Click here to edit the field.",
        evolutuion:
          "This is the evolutionary history of the creature. Click here to edit the field.",
        utility:
          "These are the utilities of the creature.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/book-pile.svg",
        images: [moodboardImage],
      },
    },
    politicsAndEconomics: {
      item1: {
        itemid: "item1",
        name: "Sample Creature",
        appearance:
          "This is the creature's appearance. Click here to edit the field.",
        evolutuion:
          "This is the evolutionary history of the creature. Click here to edit the field.",
        utility:
          "These are the utilities of the creature.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/coins.svg",
        images: [moodboardImage],
      },
    },
    itemsAndTechnology: {
      item1: {
        itemid: "item1",
        name: "Sample Item",
        description:
          "This is the item's description. Click here to edit the field.",
        lore: "This is the item's lore.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/lorc/tied-scroll.svg",
        images: [moodboardImage],
      },
    },
    skillsAndSpells: {
      item1: {
        itemid: "item1",
        name: "Sample Creature",
        appearance:
          "This is the creature's appearance. Click here to edit the field.",
        evolutuion:
          "This is the evolutionary history of the creature. Click here to edit the field.",
        utility:
          "These are the utilities of the creature.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/bolt-spell-cast.svg",
        images: [moodboardImage],
      },
    },
    magicSystems: {
      item1: {
        itemid: "item1",
        name: "Sample Creature",
        appearance:
          "This is the creature's appearance. Click here to edit the field.",
        evolutuion:
          "This is the evolutionary history of the creature. Click here to edit the field.",
        utility:
          "These are the utilities of the creature.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/lorc/magic-gate.svg",
        images: [moodboardImage],
      },
    },
    professions: {
      item1: {
        itemid: "item1",
        name: "Sample Creature",
        appearance:
          "This is the creature's appearance. Click here to edit the field.",
        evolutuion:
          "This is the evolutionary history of the creature. Click here to edit the field.",
        utility:
          "These are the utilities of the creature.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/lorc/anvil-impact.svg",
        images: [moodboardImage],
      },
    },
  });

  useEffect(() => {
    if ("worldbuilding" in localStorage) {
      setWorldbuildingObject(JSON.parse(localStorage.worldbuilding));
    } else {
      localStorage.setItem(
        "worldbuilding",
        JSON.stringify(worldbuildingObject)
      );
    }
  }, []);

  return (
    <div id="character-module" class="module">
      <Routes>
        <Route
          path="/art"
          element={
            <Art
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
            />
          }
        />
        <Route
          path="/legends-and-religions"
          element={
            <LegendsAndReligions
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
            />
          }
        />
        <Route
          path="/locations-and-settings"
          element={
            <LocationsAndSettings
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
            />
          }
        />
        <Route
          path="/geography"
          element={
            <Geography
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
            />
          }
        />
        <Route
          path="/flora-and-fauna"
          element={
            <FloraAndFauna
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
            />
          }
        />
        <Route
          path="/races-nations-cultures"
          element={
            <RacesNationsCultures
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
            />
          }
        />
        <Route
          path="/history"
          element={
            <History
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
            />
          }
        />
        <Route
          path="/politics-and-economics"
          element={
            <PoliticsAndEconomics
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
            />
          }
        />
        <Route
          path="/items-and-technology"
          element={
            <ItemsAndTechnology
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
            />
          }
        />
        <Route
          path="/skills-and-spells"
          element={
            <SkillsAndSpells
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
            />
          }
        />
        <Route
          path="/magic-systems"
          element={
            <MagicSystems
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
            />
          }
        />
        <Route
          path="/professions"
          element={
            <Professions
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
            />
          }
        />
      </Routes>
      <WorldbuildingNav
        setCurrentlyOpenedModule={setCurrentlyOpenedModule}
        setWorldbuildingObject={setWorldbuildingObject}
      />
    </div>
  );
};

export default Worldbuilding;
