import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../Hero/Hero'; 
import Featured from '../Featured/Featured';
import Faq from '../Faq/Faq';

const Home = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <Faq />
        </div>
    );
};

export default Home;
