import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Main from '../../pages/Main';
import MainDetail from '../../pages/MainDetail';
import Footer from './Footer';
import MarketStatus from '../../pages/MarketStatus';

const DashBoard = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashBoard />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/MainDetail',
        element: <MainDetail />,
      },
      {
        path: '/MarketStatus',
        element: <MarketStatus />,
      },
    ],
  },
]);

export default router;
