import React, {useState, useEffect} from 'react';
import WorldbuildingSidebar from './WorldbuildingSidebar';
import SimpleSnackbar from '../mui/Snackbar';
import MoodBoard from '../MoodBoard';
import {WorldbuildingStaticText} from '../../utils/static/Worldbuilding';
import type {WorldbuildingModuleEnum} from '../../utils/static/Worldbuilding';
import type {WorldbuildingStore} from '../../utils/stores/WorldbuildingStore';
import {useWorldbuildingStore} from '../../utils/stores/WorldbuildingStore';
import type {WorldbuildingModuleEntry} from '../../types/types';
import {useForm} from 'react-hook-form';
import {TextareaAutosize} from '@mui/material';

interface Props {
  module: WorldbuildingModuleEnum;
}

const WorldbuildingModule = ({module}: Props) => {
  const moduleData = useWorldbuildingStore((state: WorldbuildingStore) =>
    state.worldbuilding.get(module),
  );
  const editEntry = useWorldbuildingStore(state => state.editEntry);
  const removeEntry = useWorldbuildingStore(state => state.removeEntry);
  const {
    register,
    handleSubmit,
    reset,
    formState: {isDirty},
  } = useForm<WorldbuildingModuleEntry>();
  const [openedEntryId, setOpenedEntryId] = useState<string | null>(null);
  const [itemImages, setItemImages] = useState<Array<string>>([]);
  const [snackbarMessage, setSnackbarMessage] = useState('Changes saved.');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (openedEntryId) {
      reset(moduleData?.get(openedEntryId));
    }
  }, [openedEntryId, moduleData, reset]);

  function saveChangedEntry(entry: WorldbuildingModuleEntry) {
    if (!openedEntryId) {
      return;
    }
    editEntry(module, openedEntryId, entry);
    setSnackbarMessage('Changes saved.');
    setSnackbarOpen(true);
  }

  function deleteItem() {
    if (!openedEntryId) {
      return;
    }
    setOpenedEntryId(null);
    removeEntry(module, openedEntryId);
  }

  return (
    <>
      {moduleData ? (
        <div className="flex h-full">
          {openedEntryId ? (
            <MoodBoard images={itemImages} saveImages={itemImages => setItemImages(itemImages)} />
          ) : null}
          <div className="flex max-h-[90vh] w-full flex-col">
            {openedEntryId && moduleData.has(openedEntryId) ? (
              <form
                className="flex h-full flex-col overflow-auto overflow-x-hidden"
                onSubmit={handleSubmit(saveChangedEntry)}
              >
                {Object.keys(moduleData?.get(openedEntryId) as object)
                  .filter(key => key !== 'itemid' && key !== 'images' && key !== 'icon')
                  .map((key, i) => {
                    return (
                      <div key={i} className="my-6 px-6">
                        <h2 className="ml-5 font-montserrat text-lg font-black uppercase">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h2>
                        <TextareaAutosize
                          className="w-full rounded-md border border-gray-300 bg-black py-2 px-4 text-white"
                          defaultValue={
                            moduleData.get(openedEntryId)?.[key as keyof WorldbuildingModuleEntry]
                          }
                          {...register(key as keyof WorldbuildingModuleEntry)}
                          placeholder={moduleData
                            .get(openedEntryId)
                            ?.[key as keyof WorldbuildingModuleEntry]?.toString()}
                        ></TextareaAutosize>
                      </div>
                    );
                  })}

                <div className="mx-auto flex gap-3">
                  <label>Icon Link:</label>
                  <input
                    type="text"
                    className="bg-black px-2 text-white"
                    defaultValue={moduleData.get(openedEntryId)?.icon}
                    {...register('icon')}
                  />
                  <a href="https://game-icons.net/">(Get neat icons from here.)</a>
                </div>
                <div className="mx-auto my-5">
                  <button
                    type="submit"
                    id="button-black"
                    className={isDirty ? 'btn-red' : 'button-black'}
                    style={{
                      display: 'inline-block',
                      position: 'relative',
                      width: '200px',
                      fontFamily: 'Montserrat',
                      fontSize: '0.8rem',
                    }}
                  >
                    Save item
                  </button>
                  <button
                    onClick={deleteItem}
                    className="button-black"
                    style={{
                      marginLeft: '10px',
                      display: 'inline-block',
                      position: 'relative',
                      width: '200px',
                      fontFamily: 'Montserrat',
                      fontSize: '0.8rem',
                    }}
                  >
                    Delete item
                  </button>
                </div>
              </form>
            ) : (
              <div className="mx-20 my-auto flex h-full flex-col  text-justify text-xl leading-7">
                <p className="mt-auto">{WorldbuildingStaticText.phrases[module].phrase}</p>
                <p className="ml-auto mt-auto mb-5 italic">
                  {WorldbuildingStaticText.phrases[module].source}
                </p>
              </div>
            )}
          </div>
          <WorldbuildingSidebar
            data={moduleData}
            openedEntryId={openedEntryId}
            setOpenedEntryId={setOpenedEntryId}
            module={module}
          />
        </div>
      ) : null}
      <SimpleSnackbar message={snackbarMessage} open={snackbarOpen} setOpen={setSnackbarOpen} />
    </>
  );
};

export default WorldbuildingModule;
