export enum WorldbuildingModuleEnum {
  Art = 'art',
  LegendsAndReligions = 'legends-and-religions',
  LocationsAndSettings = 'locations-and-settings',
  Geography = 'geography',
  FloraAndFauna = 'flora-and-fauna',
  RacesNationsCultures = 'races-nations-cultures',
  History = 'history',
  PoliticsAndEconomics = 'politics-and-economics',
  ItemsAndTechnology = 'items-and-technology',
  SkillsAndSpells = 'skills-and-spells',
  MagicSystems = 'magic-systems',
  Professions = 'professions',
}

export const WorldbuildingModuleList = [
  {
    id: WorldbuildingModuleEnum.Art,
    name: 'Art',
  },
  {
    id: WorldbuildingModuleEnum.LegendsAndReligions,
    name: 'Legends and Religions',
  },
  {
    id: WorldbuildingModuleEnum.LocationsAndSettings,
    name: 'Locations and Settings',
  },
  {
    id: WorldbuildingModuleEnum.Geography,
    name: 'Geography',
  },
  {
    id: WorldbuildingModuleEnum.FloraAndFauna,
    name: 'Flora and Fauna',
  },
  {
    id: WorldbuildingModuleEnum.RacesNationsCultures,
    name: 'Races, Nations and Cultures',
  },
  {
    id: WorldbuildingModuleEnum.History,
    name: 'History',
  },
  {
    id: WorldbuildingModuleEnum.PoliticsAndEconomics,
    name: 'Politics and Economics',
  },
  {
    id: WorldbuildingModuleEnum.ItemsAndTechnology,
    name: 'Items and Technology',
  },
  {
    id: WorldbuildingModuleEnum.SkillsAndSpells,
    name: 'Skills and Spells',
  },
  {
    id: WorldbuildingModuleEnum.MagicSystems,
    name: 'Magic Systems',
  },
  {
    id: WorldbuildingModuleEnum.Professions,
    name: 'Professions',
  },
];

export const WorldbuildingStaticText = {
  samples: {
    [WorldbuildingModuleEnum.Art]: {
      name: 'Sample Art',
      artist: 'Placeholder Artist Name',
      description: "This is the artwork's description. Click here to edit the field.",
      lore: "This is the artwork's lore.  Click here to edit the field.",
      icon: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/mona-lisa.svg',
      images: ['https://i.imgur.com/w1AGMhl.png'],
    },
    [WorldbuildingModuleEnum.LegendsAndReligions]: {
      name: 'Sample Religion',
      tenets: "These are the religion's tenets. Click here to edit the field.",
      history: 'This is the history of the religion. Click here to edit the field.',
      alliesAndEnemies:
        'These are the allies and the enemies of the creed.  Click here to edit the field.',
      icon: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/church.svg',
      images: ['https://i.imgur.com/w1AGMhl.png'],
    },
    [WorldbuildingModuleEnum.LocationsAndSettings]: {
      name: 'Sample Setting',
      appearance: 'This is the description of the setting. Click here to edit the field.',
      lore: 'This is the history of the setting. Click here to edit the field.',
      events: 'This is what happens in this location in your story.  Click here to edit the field.',
      icon: 'https://game-icons.net/icons/ffffff/000000/1x1/lorc/treasure-map.svg',
      images: ['https://i.imgur.com/w1AGMhl.png'],
    },
    [WorldbuildingModuleEnum.Geography]: {
      name: 'Sample Geographical Formation',
      description:
        'This is the description of the geographical formation. You can include natural (e.g. continents, forests, rivers and lakes, oceans and seas, deserts, mountains) or artificial (e.g. settlements, villages and cities, administrative units, bridges, dams, docks) geographical features. Click here to edit the field.',
      history:
        'This is the general history of the geographical formation, including its origin and formation and the events and politics that have affected and are related to it. Click here to edit the field.',
      icon: 'https://game-icons.net/icons/ffffff/000000/1x1/lorc/globe.svg',
      images: ['https://i.imgur.com/w1AGMhl.png'],
    },
    [WorldbuildingModuleEnum.FloraAndFauna]: {
      name: 'Sample Creature',
      description:
        "This is the creature's description, including sensory details (sight, sound, smell , touch, taste) and any special abilities or traits the creature possesses. Click here to edit the field.",
      evolutuion:
        'This is the evolutionary history of the creature. What evolutionary pressures shaped it into its current form? How does it reflect the environment it lives in? What is its source of sustenance? What are its defense mechanisms? How does it reproduce? Click here to edit the field.',
      utility: 'These are the utilities of the creature. Click here to edit the field.',
      limitations:
        'What makes it difficult to acquire or deal with the creature? Click here to edit the field.',
      icon: 'https://game-icons.net/icons/ffffff/000000/1x1/darkzaitzev/plants-and-animals.svg',
      images: ['https://i.imgur.com/w1AGMhl.png'],
    },
    [WorldbuildingModuleEnum.RacesNationsCultures]: {
      name: 'Sample People',
      history:
        'This is the history of the group, how they formed and how they diverged from others. Click here to edit the field.',
      distinctiveFeatures:
        'These are the distinctive features and characteristics of the group. Click here to edit the field.',
      cultureAndValues:
        'These are the moral, aesthetic and political values the majority of the group believes in. Click here to edit the field.',
      relationsWithOthers:
        'This is how and why the group relates to other groups. Click here to edit the field.',
      icon: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/family-tree.svg',
      images: ['https://i.imgur.com/w1AGMhl.png'],
    },
    [WorldbuildingModuleEnum.History]: {
      name: 'Sample Event',
      description: 'This is the general description of the event. Click here to edit the field.',
      myths:
        'These are the myths and falsehoods that are believed to be true about the event. Click here to edit the field.',
      consequences: 'These were the consequences of the event. Click here to edit the field.',
      evaluation:
        'This is how different groups and characters evaluate and appraise the event. Click here to edit the field.',
      icon: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/book-pile.svg',
      images: ['https://i.imgur.com/w1AGMhl.png'],
    },
    [WorldbuildingModuleEnum.PoliticsAndEconomics]: {
      name: 'Sample Legislation',
      description:
        'This is the description of the piece of legislation. Click here to edit the field.',
      consequences:
        'These were the consequences of the legislation, including both short-term and long-term effects, and the effects on different groups of people (e.g. the majority as compared to special interest groups). Click here to edit the field.',
      motivations:
        'These were the motivations and interest groups behind the legislation. Click here to edit the field.',
      icon: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/coins.svg',
      images: ['https://i.imgur.com/w1AGMhl.png'],
    },
    [WorldbuildingModuleEnum.ItemsAndTechnology]: {
      name: 'Sample Item',
      description: "This is the item's description. Click here to edit the field.",
      lore: "This is the item's lore.  Click here to edit the field.",
      limitations:
        'What makes it difficult to acquire or use the item? Click here to edit the field.',
      icon: 'https://game-icons.net/icons/ffffff/000000/1x1/lorc/tied-scroll.svg',
      images: ['https://i.imgur.com/w1AGMhl.png'],
    },
    [WorldbuildingModuleEnum.SkillsAndSpells]: {
      name: 'Sample Ability',
      description:
        "This is the ability's description. You can include non-magical abilities as well, such as using certain weapons,tools or technologies, abilities acquired through genetics or training. Click here to edit the field.",
      originAndLore:
        'This is the source and the history of the ability. Click here to edit the field.',
      limitations:
        'These are the limitations of the ability. What are the drawbacks of practicing it? What makes it difficult to master or use it? What special requirements are needed for its mastery? Click here to edit the field.',
      socialImpact:
        'These are the social and economic consequences of the ability. Click here to edit the field.',
      icon: 'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/bolt-spell-cast.svg',
      images: ['https://i.imgur.com/w1AGMhl.png'],
    },
    [WorldbuildingModuleEnum.MagicSystems]: {
      name: 'Sample System',
      description:
        'This is the general description of the magic system. Click here to edit the field.',
      lore: 'This is the history of the magic system. Click here to edit the field.',
      limitations: 'These are the limitations of the magic system. Click here to edit the field.',
      socialImpact:
        'These are the social and economic consequences of the magic system. Click here to edit the field.',
      icon: 'https://game-icons.net/icons/ffffff/000000/1x1/lorc/magic-gate.svg',
      images: ['https://i.imgur.com/w1AGMhl.png'],
    },
    [WorldbuildingModuleEnum.Professions]: {
      name: 'Sample Profession',
      description:
        'This is the description of the profession, including the production processes and the produced goods or services. Click here to edit the field.',
      skillRequirements:
        'These are the required skills, temperament and personality for the profession. Click here to edit the field.',
      socialImpact:
        'These are social and economic effects of the profession, including how the craftsmen are viewed by other groups and individuals. Click here to edit the field.',
      icon: 'https://game-icons.net/icons/ffffff/000000/1x1/lorc/anvil-impact.svg',
      images: ['https://i.imgur.com/w1AGMhl.png'],
    },
  },

  phrases: {
    [WorldbuildingModuleEnum.Art]: {
      phrase:
        "'Learn about art, Captain. When you understand a species' art, you understand that species.'",
      source: '(Grand Admiral Thrawn)',
    },
    [WorldbuildingModuleEnum.LegendsAndReligions]: {
      phrase: "'All religions are true but none are literal.'",
      source: '(Joseph Campbell)',
    },
    [WorldbuildingModuleEnum.LocationsAndSettings]: {
      phrase: "'All religions are true but none are literal.'",
      source: '(Joseph Campbell)',
    },
    [WorldbuildingModuleEnum.Geography]: {
      phrase: "'All religions are true but none are literal.'",
      source: '(Joseph Campbell)',
    },
    [WorldbuildingModuleEnum.FloraAndFauna]: {
      phrase: "'All religions are true but none are literal.'",
      source: '(Joseph Campbell)',
    },
    [WorldbuildingModuleEnum.RacesNationsCultures]: {
      phrase: "'All religions are true but none are literal.'",
      source: '(Joseph Campbell)',
    },
    history: {
      phrase: "'History is more or less bunk.'",
      source: '(Henry Ford)',
    },
    [WorldbuildingModuleEnum.PoliticsAndEconomics]: {
      phrase:
        "'Government, taught Hume, is always government of the many by the few. Power is therefore always ultimately on the side of the governed, and the governors have nothing to support them but opinion. ... If public opinion is ultimately responsible for the structure of government, it is also the agency that determines whether there is freedom or bondage. There is virtually only one factor that has the power to make people unfree — tyrannical public opinion. The struggle for freedom is ultimately not resistance to autocrats or oligarchs but resistance to the despotism of public opinion. It is not the struggle of the many against the few but of minorities — sometimes of a minority of but one man — against the majority. The worst and most dangerous form of absolutist rule is that of an intolerant majority.'",
      source: '(Ludwig von Mises)',
    },
    [WorldbuildingModuleEnum.ItemsAndTechnology]: {
      phrase: "'All religions are true but none are literal.'",
      source: '(Joseph Campbell)',
    },
    [WorldbuildingModuleEnum.SkillsAndSpells]: {
      phrase: "'All religions are true but none are literal.'",
      source: '(Joseph Campbell)',
    },
    [WorldbuildingModuleEnum.MagicSystems]: {
      phrase: "'Limitations are more important than abilities.'",
      source: '(Brandon Sanderson)',
    },
    [WorldbuildingModuleEnum.Professions]: {
      phrase: "'All religions are true but none are literal.'",
      source: '(Joseph Campbell)',
    },
  },
};
