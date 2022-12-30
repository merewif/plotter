/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {useRouter} from 'next/router';
import React from 'react';
import {useWorldbuildingStore} from '../../utils/store';
import type {WorldbuildingModuleEnum} from '../../utils/static/Worldbuilding';
import type {WorldbuildingModuleEntry} from '../../types/types';

interface Props {
  data: {[key: string]: WorldbuildingModuleEntry};
  openedEntryId: string | null;
  setOpenedEntryId: (itemid: string) => void;
  module: WorldbuildingModuleEnum;
}

const WorldbuildingSidebar = ({data, openedEntryId, setOpenedEntryId, module}: Props) => {
  const router = useRouter();
  const addNewEntry = useWorldbuildingStore(state => state.addSampleEntry);

  return (
    <div className="right-side" id="worldbuilding-sidebar">
      <div className="worldbuilding-module-container">
        {Object.keys(data).map((key, i) => {
          return (
            <div key={i} className="item" onClick={() => setOpenedEntryId(key)}>
              <div
                className={`worldbuilding-grid-item ${
                  key === openedEntryId ? 'active-tile' : null
                }`}
              >
                <h3>{data[key]?.name}</h3>
                <img src={data[key]?.icon} className="worldbuilding-item-icon" />
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
