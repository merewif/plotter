import {useRouter} from 'next/router';
import React from 'react';
import WorldbuildingFetchModule from '../../components/worldbuilding/WorldbuildingModule';
import {WorldbuildingModuleEnum} from '../../utils/static/Worldbuilding';
import WorldbuildingNav from '../../components/worldbuilding/WorldbuidlingNav';

const WorldbuildingModule = () => {
  const {
    query: {module},
  } = useRouter();

  return (
    <>
      {Object.values(WorldbuildingModuleEnum).some(el => el === module) ? (
        <WorldbuildingFetchModule module={module as WorldbuildingModuleEnum} />
      ) : (
        <WorldbuildingNav />
      )}
    </>
  );
};

export default WorldbuildingModule;
