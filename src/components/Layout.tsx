import React from 'react';
import SideMenu from '../components/menu/SideMenu';
import Menu from '../components/Menu';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({children}: Props) => {
  return (
    <>
      <div className="flex h-full min-h-screen flex-col">
        <header className="flex bg-black text-white">
          <h1 className="my-auto mx-10 font-display font-light">Plotter</h1>
          <nav className="ml-auto mr-10">
            <SideMenu />
          </nav>
        </header>
        <main className="flex h-full flex-1 flex-col font-display">
          <div className="flex h-full flex-1 flex-col justify-center align-middle">{children}</div>
          <Menu />
        </main>
      </div>
    </>
  );
};
