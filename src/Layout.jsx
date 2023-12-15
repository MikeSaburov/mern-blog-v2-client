import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'tar';

export const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};
