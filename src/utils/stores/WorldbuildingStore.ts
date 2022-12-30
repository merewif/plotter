import create from 'zustand';
import {WorldbuildingModuleEnum, WorldbuildingStaticText} from '../static/Worldbuilding';
import type {Worldbuilding, WorldbuildingModuleEntry} from '../../types/types';

export interface WorldbuildingStore {
  worldbuilding: Worldbuilding;
  addSampleEntry: (module: WorldbuildingModuleEnum) => void;
  removeEntry: (module: WorldbuildingModuleEnum, id: string) => void;
  editEntry: (module: WorldbuildingModuleEnum, id: string, entry: WorldbuildingModuleEntry) => void;
}

export const useWorldbuildingStore = create<WorldbuildingStore>(set => ({
  worldbuilding: {
    [WorldbuildingModuleEnum.Art]: {},
    [WorldbuildingModuleEnum.LegendsAndReligions]: {},
    [WorldbuildingModuleEnum.LocationsAndSettings]: {},
    [WorldbuildingModuleEnum.Geography]: {},
    [WorldbuildingModuleEnum.FloraAndFauna]: {},
    [WorldbuildingModuleEnum.RacesNationsCultures]: {},
    [WorldbuildingModuleEnum.History]: {},
    [WorldbuildingModuleEnum.PoliticsAndEconomics]: {},
    [WorldbuildingModuleEnum.ItemsAndTechnology]: {},
    [WorldbuildingModuleEnum.SkillsAndSpells]: {},
    [WorldbuildingModuleEnum.MagicSystems]: {},
    [WorldbuildingModuleEnum.Professions]: {},
  },
  addSampleEntry: (module: WorldbuildingModuleEnum) => {
    set(state => ({
      worldbuilding: {
        ...state.worldbuilding,
        [module]: {
          ...state.worldbuilding[module],
          [Date.now().toString()]: {...WorldbuildingStaticText.samples[module]},
        },
      },
    }));
  },
  removeEntry: (module: WorldbuildingModuleEnum, id: string) => {
    set(state => {
      const newWorldbuildingState = {...state};
      delete newWorldbuildingState.worldbuilding[module][id];
      return newWorldbuildingState;
    });
  },
  editEntry: (module: WorldbuildingModuleEnum, id: string, entry: WorldbuildingModuleEntry) => {
    set(state => ({
      worldbuilding: {
        ...state.worldbuilding,
        [module]: {
          ...state.worldbuilding[module],
          [id]: {
            ...state.worldbuilding[module][id],
            ...entry,
          },
        },
      },
    }));
  },
}));
