import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    //Navbar, Footer must show on any pages.
    <>
      <Navbar />
      {/*placeholder to render nested routes or child components in layout */}
      <Outlet />
    </>
  );
}

export default MainLayout