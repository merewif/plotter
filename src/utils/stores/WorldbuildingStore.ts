import create from 'zustand';
import produce from 'immer';
import {WorldbuildingModuleEnum, WorldbuildingStaticText} from '../static/Worldbuilding';
import type {WorldbuildingModuleEntry} from '../../types/types';
import {enableMapSet} from 'immer';
enableMapSet();

export interface WorldbuildingStore {
  worldbuilding: Map<WorldbuildingModuleEnum, Map<string, WorldbuildingModuleEntry>>;
  addSampleEntry: (module: WorldbuildingModuleEnum) => void;
  removeEntry: (module: WorldbuildingModuleEnum, id: string) => void;
  editEntry: (module: WorldbuildingModuleEnum, id: string, entry: WorldbuildingModuleEntry) => void;
}

export const useWorldbuildingStore = create<WorldbuildingStore>(set => ({
  worldbuilding: new Map(Object.values(WorldbuildingModuleEnum).map(module => [module, new Map()])),
  addSampleEntry: (module: WorldbuildingModuleEnum) => {
    set(state =>
      produce(state, draftState => {
        draftState.worldbuilding
          .get(module)
          ?.set(Date.now().toString(), {
            ...(WorldbuildingStaticText.samples[module] as WorldbuildingModuleEntry),
          });
      }),
    );
  },
  removeEntry: (module: WorldbuildingModuleEnum, id: string) => {
    set(state =>
      produce(state, draftState => {
        draftState.worldbuilding.get(module)?.delete(id);
      }),
    );
  },
  editEntry: (module: WorldbuildingModuleEnum, id: string, entry: WorldbuildingModuleEntry) => {
    set(state =>
      produce(state, draftState => {
        draftState.worldbuilding.get(module)?.set(id, entry);
      }),
    );
  },
}));
