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
  arcSummaries: Map<number, string>;
  imgArray: string[];
  chapters: Map<string, Chapter>;
}

export interface Chapter {
  title: string;
  summary: string;
  chartData: ChartData;
  arcSummaries: Map<number, string>;
  imgArray: string[];
}

export type ChartData = [Array<ChartSettings>, ...Array<ChartEntry>];
export type ChartEntry = [number, number, string];

export interface ChartSettings {
  label?: string;
  role?: string;
  type?: string;
}
export interface Worldbuilding {
  [WorldbuildingModuleEnum.Art]: {[key: string]: Art};
  [WorldbuildingModuleEnum.LegendsAndReligions]: {[key: string]: LegendsAndReligion};
  [WorldbuildingModuleEnum.LocationsAndSettings]: {[key: string]: LocationsAndSetting};
  [WorldbuildingModuleEnum.Geography]: {[key: string]: Geography};
  [WorldbuildingModuleEnum.FloraAndFauna]: {[key: string]: FloraAndFauna};
  [WorldbuildingModuleEnum.RacesNationsCultures]: {[key: string]: RacesNationsCulture};
  [WorldbuildingModuleEnum.History]: {[key: string]: History};
  [WorldbuildingModuleEnum.PoliticsAndEconomics]: {[key: string]: PoliticsAndEconomics};
  [WorldbuildingModuleEnum.ItemsAndTechnology]: {[key: string]: ItemsAndTechnology};
  [WorldbuildingModuleEnum.SkillsAndSpells]: {[key: string]: SkillsAndSpells};
  [WorldbuildingModuleEnum.MagicSystems]: {[key: string]: MagicSystems};
  [WorldbuildingModuleEnum.Professions]: {[key: string]: Professions};
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

export interface ItemsAndTechnology {
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

export interface SkillsAndSpells {
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

export interface MagicSystems {
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

export interface Professions {
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
export interface PoliticsAndEconomics {
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
  | ItemsAndTechnology
  | SkillsAndSpells
  | FloraAndFauna
  | MagicSystems
  | Professions
  | Geography
  | History
  | PoliticsAndEconomics
  | LegendsAndReligion
  | LocationsAndSetting
  | RacesNationsCulture;
