import {useRouter} from 'next/router';
import React from 'react';
import WorldbuildingFetchModule from '../../components/worldbuilding/WorldbuildingModule';
import {WorldbuildingModuleEnum} from '../../utils/static/Worldbuilding';
import Link from 'next/link';

const WorldbuildingModule = () => {
  const {
    query: {module},
  } = useRouter();

  if (!module || !Object.values(WorldbuildingModuleEnum).some(el => el === module)) {
    return (
      <div className="mx-auto h-full w-full">
        <Link href={'/worldbuilding'}>Module not found. Click here to return.</Link>
      </div>
    );
  }

  return <WorldbuildingFetchModule module={module as WorldbuildingModuleEnum} />;
};

export default WorldbuildingModule;
