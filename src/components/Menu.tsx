import React, {useEffect, useState} from 'react';
import SimpleBottomNavigation from './mui/BottomNavigation';
import {useRouter} from 'next/router';

const Menu = () => {
  const defaultText =
    'Hi there. I will help you organize and systematize the elements of your novel. Please choose a module below.';
  const [value, setValue] = useState<number | null>(null);
  const router = useRouter();
  const {pathname} = router;

  useEffect(() => {
    if (value === 0) router.push('characters');
    if (value === 1) router.push('plot');
    if (value === 2) router.push('worldbuilding');

    if (window.location.pathname.indexOf('characters') > -1) {
      setValue(0);
    }

    if (window.location.pathname.indexOf('plot') > -1) {
      setValue(1);
    }

    if (window.location.pathname.indexOf('worldbuilding') > -1) {
      setValue(2);
    }
  }, [value]);

  useEffect(() => {
    if (pathname === 'notes' || pathname === 'writing-resources' || pathname === 'about') {
      setValue(null);
    }
  }, [pathname]);

  return (
    <>
      <div id="current-container">
        {/* <Routes>
          <Route path="/" element={defaultText} />
          <Route path="/characters/*" element={<Characters />} />
          <Route path="/plot/*" element={<Plot />} />
          <Route path="/worldbuilding/*" element={<Worldbuilding />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/writing-resources/*" element={<WritingResources />} />
          <Route path="/notes/*" element={<Notes />} />
        </Routes> */}
      </div>
      <div id="main-menu-container">
        <SimpleBottomNavigation value={value} setValue={setValue} />
      </div>
    </>
  );
};

export default Menu;
