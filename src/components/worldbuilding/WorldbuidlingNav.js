import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

const WorldbuildingNav = ({
  setCurrentlyOpenedModule,
  setWorldbuildingObject,
  setIsModuleFetched,
}) => {
  let navigate = useNavigate();
  let camelCased;

  async function openCategory(event) {
    $('#worldbuilding-navigation').css({
      'grid-auto-flow': 'column',
      top: '115%',
      width: '97.5vw',
      height: 'auto',
    });

    $('.worldbuilding-navbtn').css({
      'font-size': '10px',
      width: '7.5vw',
      background: 'white',
      color: 'black',
    });

    $(event.target).css({ background: 'black', color: 'white' });

    if ('worldbuilding' in localStorage) {
      setWorldbuildingObject(JSON.parse(localStorage.worldbuilding));
    }

    navigate('/worldbuilding/' + event.target.id);
    camelCased = event.target.id.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });

    const task1 = setCurrentlyOpenedModule('');
    const task2 = setIsModuleFetched(false);
    await Promise.all([task1, task2]);
    setCurrentlyOpenedModule(camelCased);
    setIsModuleFetched(true);
  }

  return (
    <div id='worldbuilding-navigation'>
      <button className='worldbuilding-navbtn' onClick={openCategory} id='art'>
        Art
      </button>

      <button
        className='worldbuilding-navbtn'
        onClick={openCategory}
        id='legends-and-religions'
      >
        Legends and Religions
      </button>
      <button
        className='worldbuilding-navbtn'
        onClick={openCategory}
        id='locations-and-settings'
      >
        Locations and Settings
      </button>
      <button
        className='worldbuilding-navbtn'
        onClick={openCategory}
        id='geography'
      >
        Geography
      </button>
      <button
        className='worldbuilding-navbtn'
        onClick={openCategory}
        id='flora-and-fauna'
      >
        Flora and Fauna
      </button>
      <button
        className='worldbuilding-navbtn'
        onClick={openCategory}
        id='races-nations-cultures'
      >
        Races, Nations, Cultures
      </button>
      <button
        className='worldbuilding-navbtn'
        onClick={openCategory}
        id='history'
      >
        History
      </button>
      <button
        className='worldbuilding-navbtn'
        onClick={openCategory}
        id='politics-and-economics'
      >
        Politics and Economics
      </button>
      <button
        className='worldbuilding-navbtn'
        onClick={openCategory}
        id='items-and-technology'
      >
        Items and Technology
      </button>
      <button
        className='worldbuilding-navbtn'
        onClick={openCategory}
        id='skills-and-spells'
      >
        Skills and Spells
      </button>
      <button
        className='worldbuilding-navbtn'
        onClick={openCategory}
        id='magic-systems'
      >
        Magic Systems
      </button>
      <button
        className='worldbuilding-navbtn'
        onClick={openCategory}
        id='professions'
      >
        Professions
      </button>
    </div>
  );
};

export default WorldbuildingNav;
