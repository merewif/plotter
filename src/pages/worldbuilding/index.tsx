import React from 'react';
import {WorldbuildingModuleList} from '../../utils/static/Worldbuilding';
import Link from 'next/link';

const Worldbuilding = () => {
  return (
    <div className="mx-10 grid h-full grid-cols-3 gap-5 py-10">
      {WorldbuildingModuleList.map((module, index) => {
        return (
          <Link
            className="flex items-center justify-center border border-black p-16 text-center font-montserrat font-black uppercase hover:bg-black hover:text-white"
            href={`/worldbuilding/${module.id}`}
            key={index}
          >
            {module.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Worldbuilding;
