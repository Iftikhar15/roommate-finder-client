import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../Hero/Hero';
import Featured from '../Featured/Featured';
import Faq from '../Faq/Faq';
import { useLoaderData } from 'react-router';

const Home = () => {
    const matePosts = useLoaderData();
    console.log(matePosts);

    return (
        <div>
            <Hero />

            <div>
                <div className='mx-auto flex justify-center '>
                    <h3 className='text-3xl font-bold my-15 text-cyan-500'>
                        Featured Roommates Post Section
                    </h3>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {
                        matePosts.map(matePost => <Featured key={matePost._id} matePost={matePost} />)
                    }
                </div>
            </div>

            <Faq />
        </div>
    );
};

export default Home;
