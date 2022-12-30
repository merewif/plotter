import React from 'react';
import SideMenu from '../components/menu/SideMenu';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
  return (
    <div>
      <div id="drawer-btn-container">
        <SideMenu />
      </div>
      <div id="mobile-error-message">
        Plotter is not available on small screens or mobile devices.
      </div>
      <div className="App">
        <header className="App-header">
          <h1>Plotter</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};
