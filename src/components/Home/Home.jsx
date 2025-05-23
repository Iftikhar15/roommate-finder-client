import React, { useContext, useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../Hero/Hero';
import Featured from '../Featured/Featured';
import Faq from '../Faq/Faq';
import { useLoaderData } from 'react-router';
import Redirect from '../Redirect/Redirect';
import Spinner from '../Spinner/Spinner';
import { AuthContext } from '../../Contexts/AuthContext';

const Home = () => {
    const matePosts = useLoaderData();
    const { loading } = useContext(AuthContext);

    useEffect(() => {
        if (loading) return;
    }, [loading])

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <Hero />
            <Redirect/>

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
