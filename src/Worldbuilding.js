import React, { useEffect, useState } from "react";
import WorldbuildingNav from "./components/worldbuilding/WorldbuidlingNav";
import moodboardImage from "./imgs/moodboard.png";
import WorldbuildingFetchModule from "./components/worldbuilding/WorldbuildingFetchModule";

const Worldbuilding = () => {
  const [currentlyOpenedModule, setCurrentlyOpenedModule] = useState();
  const sampleItem = {
    art: {
      name: "Sample Art",
      artist: "Placeholder Artist Name",
      description:
        "This is the artwork's description. Click here to edit the field.",
      lore: "This is the artwork's lore.  Click here to edit the field.",
      icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/mona-lisa.svg",
      images: [moodboardImage],
    },
    legendsAndReligions: {
      name: "Sample Creature",
      appearance:
        "This is the creature's appearance. Click here to edit the field.",
      evolutuion:
        "This is the evolutionary history of the creature. Click here to edit the field.",
      utility:
        "These are the ways the creature is utilized. Click here to edit the field.",
      icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/church.svg",
      images: [moodboardImage],
    },
    locationsAndSettings: {
      name: "Sample Setting",
      appearance:
        "This is the description of the setting. Click here to edit the field.",
      lore: "This is the history of the setting. Click here to edit the field.",
      events:
        "This is what happens in this location in your story.  Click here to edit the field.",
      icon: "https://game-icons.net/icons/ffffff/000000/1x1/lorc/treasure-map.svg",
      images: [moodboardImage],
    },
    geography: {
      name: "Sample Geographical Formation",
      description:
        "This is the description of the geographical formation. You can include natural (e.g. continents, forests, rivers and lakes, oceans and seas, deserts, mountains) or artificial (e.g. settlements, villages and cities, administrative units, bridges, dams, docks) geographical features. Click here to edit the field.",
      history:
        "This is the general history of the geographical formation, including its origin and formation and the events and politics that have affected and are related to it. Click here to edit the field.",
      icon: "https://game-icons.net/icons/ffffff/000000/1x1/lorc/globe.svg",
      images: [moodboardImage],
    },
    floraAndFauna: {
      name: "Sample Creature",
      description:
        "This is the creature's description, including sensory details (sight, sound, smell , touch, taste) and any special abilities or traits the creature possesses. Click here to edit the field.",
      evolutuion:
        "This is the evolutionary history of the creature. What evolutionary pressures shaped it into its current form? How does it reflect the environment it lives in? What is its source of sustenance? What are its defense mechanisms? How does it reproduce? Click here to edit the field.",
      utility:
        "These are the utilities of the creature. Click here to edit the field.",
      icon: "https://game-icons.net/icons/ffffff/000000/1x1/darkzaitzev/plants-and-animals.svg",
      images: [moodboardImage],
    },
    racesNationsCultures: {
      name: "Sample People",
      appearance:
        "This is the creature's appearance. Click here to edit the field.",
      evolutuion:
        "This is the evolutionary history of the creature. Click here to edit the field.",
      utility:
        "These are the utilities of the creature.  Click here to edit the field.",
      icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/family-tree.svg",
      images: [moodboardImage],
    },
    history: {
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
    politicsAndEconomics: {
      name: "Sample Legislation",
      descriptionAndConsequences:
        "This is the description of the piece of legislation. Click here to edit the field.",
      motivations:
        "These are the motivations and interest groups behind the legislation. Click here to edit the field.",
      icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/coins.svg",
      images: [moodboardImage],
    },
    itemsAndTechnology: {
      name: "Sample Item",
      description:
        "This is the item's description. Click here to edit the field.",
      lore: "This is the item's lore.  Click here to edit the field.",
      icon: "https://game-icons.net/icons/ffffff/000000/1x1/lorc/tied-scroll.svg",
      images: [moodboardImage],
    },
    skillsAndSpells: {
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
    magicSystems: {
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
    professions: {
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
  };
  const [worldbuildingObject, setWorldbuildingObject] = useState({
    art: {
      artitem1: {
        itemid: "artitem1",
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
      legendsAndReligionsitem1: {
        itemid: "legendsAndReligionsitem1",
        name: "Sample Creature",
        appearance:
          "This is the creature's appearance. Click here to edit the field.",
        evolutuion:
          "This is the evolutionary history of the creature. Click here to edit the field.",
        utility:
          "These are the ways the creature is utilized. Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/church.svg",
        images: [moodboardImage],
      },
    },
    locationsAndSettings: {
      locationsAndSettingsitem1: {
        itemid: "locationsAndSettingsitem1",
        name: "Sample Setting",
        appearance:
          "This is the description of the setting. Click here to edit the field.",
        lore: "This is the history of the setting. Click here to edit the field.",
        events:
          "This is what happens in this location in your story.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/lorc/treasure-map.svg",
        images: [moodboardImage],
      },
    },
    geography: {
      geographyitem1: {
        itemid: "geographyitem1",
        name: "Sample Geographical Formation",
        description:
          "This is the description of the geographical formation. You can include natural (e.g. continents, forests, rivers and lakes, oceans and seas, deserts, mountains) or artificial (e.g. settlements, villages and cities, administrative units, bridges, dams, docks) geographical features. Click here to edit the field.",
        history:
          "This is the general history of the geographical formation, including its origin and formation and the events and politics that have affected and are related to it. Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/lorc/globe.svg",
        images: [moodboardImage],
      },
    },
    floraAndFauna: {
      floraAndFaunaitem1: {
        itemid: "floraAndFaunaitem1",
        name: "Sample Creature",
        description:
          "This is the creature's description, including sensory details (sight, sound, smell , touch, taste) and any special abilities or traits the creature possesses. Click here to edit the field.",
        evolutuion:
          "This is the evolutionary history of the creature. What evolutionary pressures shaped it into its current form? How does it reflect the environment it lives in? What is its source of sustenance? What are its defense mechanisms? How does it reproduce? Click here to edit the field.",
        utility:
          "These are the utilities of the creature. Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/darkzaitzev/plants-and-animals.svg",
        images: [moodboardImage],
      },
    },
    racesNationsCultures: {
      racesNationsCulturesitem1: {
        itemid: "racesNationsCulturesitem1",
        name: "Sample People",
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
      historyitem1: {
        itemid: "historyitem1",
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
      politicsAndEconomicsitem1: {
        itemid: "politicsAndEconomicsitem1",
        name: "Sample Legislation",
        descriptionAndConsequences:
          "This is the description of the piece of legislation. Click here to edit the field.",
        motivations:
          "These are the motivations and interest groups behind the legislation. Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/coins.svg",
        images: [moodboardImage],
      },
    },
    itemsAndTechnology: {
      itemsAndTechnologyitem1: {
        itemid: "itemsAndTechnologyitem1",
        name: "Sample Item",
        description:
          "This is the item's description. Click here to edit the field.",
        lore: "This is the item's lore.  Click here to edit the field.",
        icon: "https://game-icons.net/icons/ffffff/000000/1x1/lorc/tied-scroll.svg",
        images: [moodboardImage],
      },
    },
    skillsAndSpells: {
      skillsAndSpellsitem1: {
        itemid: "skillsAndSpellsitem1",
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
      magicSystemsitem1: {
        itemid: "magicSystemsitem1",
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
      professionsitem1: {
        itemid: "professionsitem1",
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

  const [isModuleFetched, setIsModuleFetched] = useState(false);

  const phrases = {
    art: "'Learn about art, Captain. When you understand a species' art, you understand that species.' (Grand Admiral Thrawn)",
    legendsAndReligions: "legendsAndReligions",
    locationsAndSettings: "locationsAndSettings",
    geography: "geography",
    floraAndFauna: "floraAndFauna",
    racesNationsCultures: "racesNationsCultures",
    history: "history",
    politicsAndEconomics: "politicsAndEconomics",
    itemsAndTechnology: "itemsAndTechnology",
    skillsAndSpells: "skillsAndSpells",
    magicSystems: "magicSystems",
    professions: "professions",
  };

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
      {isModuleFetched ? (
        <WorldbuildingFetchModule
          worldbuildingObject={worldbuildingObject}
          setWorldbuildingObject={setWorldbuildingObject}
          currentlyOpenedModule={currentlyOpenedModule}
          sampleItem={sampleItem[currentlyOpenedModule]}
          moduleIntroductionPhrase={phrases[currentlyOpenedModule]}
        />
      ) : null}

      <WorldbuildingNav
        setCurrentlyOpenedModule={setCurrentlyOpenedModule}
        setWorldbuildingObject={setWorldbuildingObject}
        setIsModuleFetched={setIsModuleFetched}
      />
    </div>
  );
};

export default Worldbuilding;

/*

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
            <WorldbuildingFetchModule
              worldbuildingObject={worldbuildingObject}
              setWorldbuildingObject={setWorldbuildingObject}
              currentlyOpenedModule={currentlyOpenedModule}
              sampleItem={sampleItem[currentlyOpenedModule]}
              moduleIntroductionPhrase={phrases[currentlyOpenedModule]}
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

*/
