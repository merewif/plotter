import type {WorldbuildingModuleEnum} from '../utils/static/Worldbuilding';

export interface Project {
  characters: Characters;
  books: Books;
  worldbuilding: Worldbuilding;
}

export interface Characters {
  [key: string]: Character;
}

export interface Character {
  characterName: string;
  characterAppearance: string;
  characterGoals: string;
  characterMonologue: string;
  characterTraits: string;
  images: string[];
}

export interface Books {
  [key: string]: Book;
}

export interface Book {
  title: string;
  summary: string;
  chartData: ChartData;
  imgArray: string[];
  chapters: {[key: string]: Chapter};
}

export interface Chapter {
  title: string;
  summary: string;
  chartData: ChartData;
  imgArray: string[];
}

export type ChartData = [['Time', 'Stakes', ChartSettings], ...Array<ChartEntry>];

export type ChartEntry = [number, number, string];

export interface ChartSettings {
  role: string;
  type: string;
  p: P;
}
export interface P {
  html: boolean;
}

export interface Country {
  worldbuilding: Worldbuilding;
}

export interface Worldbuilding {
  [WorldbuildingModuleEnum.Art]: {[key: string]: Art};
  [WorldbuildingModuleEnum.LegendsAndReligions]: {[key: string]: LegendsAndReligion};
  [WorldbuildingModuleEnum.LocationsAndSettings]: {[key: string]: LocationsAndSetting};
  [WorldbuildingModuleEnum.Geography]: {[key: string]: Geography};
  [WorldbuildingModuleEnum.FloraAndFauna]: {[key: string]: FloraAndFauna};
  [WorldbuildingModuleEnum.RacesNationsCultures]: {[key: string]: RacesNationsCulture};
  [WorldbuildingModuleEnum.History]: {[key: string]: History};
  [WorldbuildingModuleEnum.PoliticsAndEconomics]: {[key: string]: History};
  [WorldbuildingModuleEnum.ItemsAndTechnology]: {[key: string]: Art};
  [WorldbuildingModuleEnum.SkillsAndSpells]: {[key: string]: Art};
  [WorldbuildingModuleEnum.MagicSystems]: {[key: string]: FloraAndFauna};
  [WorldbuildingModuleEnum.Professions]: {[key: string]: FloraAndFauna};
}

export interface Art {
  itemid: number;
  name: string;
  icon: string;
  images: string[];
  artist: string;
  description: string;
  lore: string;
  limitations: string;
  originAndLore: string;
  socialImpact: string;
}

export interface FloraAndFauna {
  itemid: number;
  name: string;
  description: string;
  evolutuion: string;
  utility: string;
  limitations: string;
  icon: string;
  images: string[];
  lore: string;
  socialImpact: string;
  skillRequirements: string;
}

export interface Geography {
  itemid: number;
  name: string;
  description: string;
  history: string;
  icon: string;
  images: string[];
}

export interface History {
  itemid: number;
  name: string;
  description: string;
  myths: string;
  consequences: string;
  evaluation: string;
  icon: string;
  images: string[];
  motivations: string;
}

export interface LegendsAndReligion {
  itemid: number;
  name: string;
  tenets: string;
  history: string;
  alliesAndEnemies: string;
  icon: string;
  images: string[];
}

export interface LocationsAndSetting {
  itemid: number;
  name: string;
  appearance: string;
  lore: string;
  events: string;
  icon: string;
  images: string[];
}

export interface RacesNationsCulture {
  itemid: number;
  name: string;
  history: string;
  distinctiveFeatures: string;
  cultureAndValues: string;
  relationsWithOthers: string;
  icon: string;
  images: string[];
}

export type WorldbuildingModuleEntry =
  | Art
  | FloraAndFauna
  | Geography
  | History
  | LegendsAndReligion
  | LocationsAndSetting
  | RacesNationsCulture;
