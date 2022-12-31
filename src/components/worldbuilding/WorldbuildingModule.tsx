import React, {useState, useEffect} from 'react';
import WorldbuildingSidebar from './WorldbuildingSidebar';
import autosize from 'autosize';
import SimpleSnackbar from '../mui/Snackbar';
import MoodBoard from '../MoodBoard';
import {WorldbuildingStaticText} from '../../utils/static/Worldbuilding';
import type {WorldbuildingModuleEnum} from '../../utils/static/Worldbuilding';
import type {WorldbuildingStore} from '../../utils/stores/WorldbuildingStore';
import {useWorldbuildingStore} from '../../utils/stores/WorldbuildingStore';
import type {WorldbuildingModuleEntry} from '../../types/types';
import {useForm} from 'react-hook-form';

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
    autosize(document.querySelectorAll('textarea'));
  }, [moduleData]);

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
      {openedEntryId ? (
        <MoodBoard images={itemImages} saveImages={itemImages => setItemImages(itemImages)} />
      ) : null}
      {moduleData ? (
        <>
          <WorldbuildingSidebar
            data={moduleData}
            openedEntryId={openedEntryId}
            setOpenedEntryId={setOpenedEntryId}
            module={module}
          />
          <div className="worldbuilding-module">
            {openedEntryId && moduleData.has(openedEntryId) ? (
              <form onSubmit={handleSubmit(saveChangedEntry)}>
                <div id="art-viewer">
                  {Object.keys(moduleData?.get(openedEntryId) as object)
                    .filter(key => key !== 'itemid' && key !== 'images' && key !== 'icon')
                    .map((key, i) => {
                      return (
                        <div key={i}>
                          <h2 className="wb-textarea-label">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </h2>
                          <textarea
                            id={'textarea-' + key}
                            defaultValue={
                              moduleData.get(openedEntryId)?.[key as keyof WorldbuildingModuleEntry]
                            }
                            {...register(key as keyof WorldbuildingModuleEntry)}
                            placeholder={moduleData
                              .get(openedEntryId)
                              ?.[key as keyof WorldbuildingModuleEntry]?.toString()}
                          ></textarea>
                        </div>
                      );
                    })}

                  <div style={{marginTop: 20}}>
                    <label>Icon Link:</label>
                    <input
                      type="text"
                      id="item-icon"
                      defaultValue={moduleData.get(openedEntryId)?.icon}
                      {...register('icon')}
                    />
                    <a href="https://game-icons.net/">(Get neat icons from here.)</a>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      top: '98%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    id="worldbuilding-buttons-container"
                  >
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
                </div>
              </form>
            ) : (
              <div id="module-intro-phrase">
                <p
                  style={{
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                  }}
                >
                  {WorldbuildingStaticText.phrases[module].phrase}
                </p>
                <p
                  style={{
                    position: 'absolute',
                    top: '95%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  {WorldbuildingStaticText.phrases[module].source}
                </p>
              </div>
            )}
          </div>
        </>
      ) : null}
      <SimpleSnackbar message={snackbarMessage} open={snackbarOpen} setOpen={setSnackbarOpen} />
    </>
  );
};

export default WorldbuildingModule;
