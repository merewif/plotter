/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {useWorldbuildingStore} from '../../utils/stores/WorldbuildingStore';
import type {WorldbuildingModuleEnum} from '../../utils/static/Worldbuilding';
import type {WorldbuildingModuleEntry} from '../../types/types';
import classNames from 'classnames';

interface Props {
  data: Map<string, WorldbuildingModuleEntry>;
  openedEntryId: string | null;
  setOpenedEntryId: (itemid: string) => void;
  module: WorldbuildingModuleEnum;
}

const WorldbuildingSidebar = ({data, openedEntryId, setOpenedEntryId, module}: Props) => {
  const addNewEntry = useWorldbuildingStore(state => state.addSampleEntry);

  return (
    <div className="flex h-full max-h-full w-1/6 flex-col bg-black">
      <div className="flex h-full max-h-[85vh] flex-col gap-3 overflow-scroll bg-black py-5">
        {[...data.keys()].map((key, i) => {
          return (
            <button
              key={i}
              className={classNames(
                {'bg-white text-black': key === openedEntryId},
                'mx-auto flex w-3/4 cursor-pointer justify-center rounded py-6 text-center align-middle font-montserrat font-black uppercase text-white hover:bg-white  hover:text-black',
              )}
              onClick={() => setOpenedEntryId(key)}
            >
              <div>
                <h3>{data.get(key)?.name}</h3>
                <img src={data.get(key)?.icon} />
              </div>
            </button>
          );
        })}
      </div>
      <button
        className="mx-auto mt-auto mb-1 w-1/2 cursor-pointer border bg-white font-montserrat text-black hover:border hover:border-white hover:bg-black hover:text-white "
        onClick={() => addNewEntry(module)}
        style={{fontFamily: 'Montserrat', fontSize: '0.8rem'}}
      >
        Add New Entry
      </button>
    </div>
  );
};

export default WorldbuildingSidebar;
