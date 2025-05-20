import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default Root;
