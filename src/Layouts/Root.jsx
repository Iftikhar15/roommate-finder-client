import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Root = () => {
    
    return (
    <>
      <div className="max-w-full w-11/12 px-4 sm:px-6 md:px-8 mx-auto">
        <Navbar />
        <div className="min-h-[calc(100vh-323px)]">
          <Outlet />
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </>
    );
};

export default Root;
