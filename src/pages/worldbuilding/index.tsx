import React from 'react';
import {WorldbuildingModuleList, WorldbuildingStaticText} from '../../utils/static/Worldbuilding';
import Link from 'next/link';
import Image from 'next/image';

const Worldbuilding = () => {
  return (
    <>
      <div className="m-auto flex flex-col text-center text-xl">
        <span className="font-montserrat text-3xl font-black uppercase">
          Select a module to start building your world
        </span>
        <span className="font-montserrat text-base font-light">
          Each module presents you with a set of questions to help you brainstorm about the elements
          of your universe.
        </span>
      </div>
      <div className="mx-auto mb-auto grid w-1/2 grid-cols-2 gap-5">
        {WorldbuildingModuleList.map((module, index) => {
          return (
            <Link
              className="flex items-center justify-center border border-black text-center font-montserrat font-black uppercase hover:bg-black hover:text-white"
              href={`/worldbuilding/${module.id}`}
              key={index}
            >
              <Image
                width={200}
                height={200}
                src={WorldbuildingStaticText.samples[module.id].icon}
                className="mr-auto w-1/6"
                alt=""
              />
              <span className="mr-auto">{module.name}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Worldbuilding;
