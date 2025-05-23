import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Root = () => {
    
    return (
    <>
      
        <Navbar />
        <div className="min-h-[calc(100vh-323px)]">
          <Outlet />
          <ToastContainer />
        </div>
      
      <Footer />
    </>
    );
};

export default Root;
