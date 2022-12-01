import React from 'react';
import Header from '../components/Headers/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
