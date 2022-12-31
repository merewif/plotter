import React from 'react';
import SideMenu from '../components/menu/SideMenu';
import Menu from '../components/Menu';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
  return (
    <div>
      <SideMenu />
      <div id="mobile-error-message">
        Plotter is not available on small screens or mobile devices.
      </div>
      <div className="App">
        <header className="bg-black text-white">
          <h1 className="font-display font-light">Plotter</h1>
        </header>
        <main className="min-h-screen">{children}</main>
        <Menu />
      </div>
    </div>
  );
};
