import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorLogo from '../assets/errorLogo.jpg';

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col text-center items-center px-4 py-10'>
      <img className='min-h-[calc(100vh-233px)] sm:w-80 md:w-96 max-w-full mb-6' src={errorLogo} alt='Error 404' />
      <h1 className='text-xl sm:text-2xl md:text-3xl text-pink-700 mb-4'>404 - Page not found</h1>
      <p className='text-sm sm:text-base mb-6'>Oops! The page you are looking for doesn't exist.</p>
      <button
        onClick={handleClick}
        className='hover:bg-violet-700 bg-gray-900 text-white font-bold py-2 px-6 rounded text-sm sm:text-base'
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Error;
