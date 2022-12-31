/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {useWorldbuildingStore} from '../../utils/stores/WorldbuildingStore';
import type {WorldbuildingModuleEnum} from '../../utils/static/Worldbuilding';
import type {WorldbuildingModuleEntry} from '../../types/types';

interface Props {
  data: Map<string, WorldbuildingModuleEntry>;
  openedEntryId: string | null;
  setOpenedEntryId: (itemid: string) => void;
  module: WorldbuildingModuleEnum;
}

const WorldbuildingSidebar = ({data, openedEntryId, setOpenedEntryId, module}: Props) => {
  const addNewEntry = useWorldbuildingStore(state => state.addSampleEntry);

  return (
    <div className="right-side" id="worldbuilding-sidebar">
      <div className="worldbuilding-module-container">
        {[...data.keys()].map((key, i) => {
          return (
            <div key={i} className="item" onClick={() => setOpenedEntryId(key)}>
              <div
                className={`worldbuilding-grid-item ${
                  key === openedEntryId ? 'active-tile' : null
                }`}
              >
                <h3>{data.get(key)?.name}</h3>
                <img src={data.get(key)?.icon} className="worldbuilding-item-icon" />
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="button-black"
        onClick={() => addNewEntry(module)}
        style={{fontFamily: 'Montserrat', fontSize: '0.8rem'}}
      >
        New Entry
      </button>
    </div>
  );
};

export default WorldbuildingSidebar;
