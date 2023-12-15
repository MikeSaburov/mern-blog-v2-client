import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../src/Header';

export const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};
