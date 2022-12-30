import React from 'react';
import {WorldbuildingModuleList} from '../../utils/static/Worldbuilding';
import Link from 'next/link';

const WorldbuildingNav = () => {
  return (
    <div id="worldbuilding-navigation">
      {WorldbuildingModuleList.map((module, index) => {
        return (
          <Link className="worldbuilding-navbtn" href={`/worldbuilding/${module.id}`} key={index}>
            {module.name}
          </Link>
        );
      })}
    </div>
  );
};

export default WorldbuildingNav;
