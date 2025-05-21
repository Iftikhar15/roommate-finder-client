import React, { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

const PostDetails = () => {

    const Navigate = useNavigate();
    const {user}= useContext(AuthContext);
    const data = useLoaderData();
    const { _id } = useParams();
    
    useEffect(() => { 
        user === null && (Navigate('/login')) 
    },[user, Navigate]);

    const posts = data.find(plan => plan._id.toString() === _id);

    if (!posts) {
        return <p className='text-center text-red-500'>Posts not found</p>
    }

    const {
        photo,
        contactInfo,
        description,
        lifeStyle,
        location,
        rentAmount,
        roomType,
        title,
        userEmail,
        userName,
        availability,
    } = posts;

    return (
        <section className='h-[calc(100vh-233px)]'>
            <div className="max-w-3xl my-15 mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-violet-200">


                <div className="bg-cyan-500 text-white p-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-sm">Posted by {userName} ({userEmail})</p>
                </div>


                <div className="flex flex-col md:flex-row">

                    <div className="md:w-1/3 bg-gray-100 flex justify-center items-center p-4">
                        <img
                            src={photo}
                            alt={title}
                            className="w-full h-48 object-cover rounded-xl shadow-sm"
                        />
                    </div>


                    <div className="md:w-2/3 p-4 space-y-2">
                        <div className="flex justify-between text-sm text-gray-700">
                            <span><strong>Location:</strong> {location}</span>
                            <span><strong>Rent:</strong> BDT {rentAmount}</span>
                        </div>

                        <div className="flex justify-between text-sm text-gray-700">
                            <span><strong>Room Type:</strong> {roomType}</span>
                            <span><strong>Available From:</strong> {availability}</span>
                        </div>

                        <div className="text-sm text-gray-700">
                            <strong>Lifestyle:</strong> {lifeStyle}
                        </div>

                        <p className="text-sm text-gray-600">
                            <strong>Description:</strong> {description}
                        </p>

                        <div className="mt-3 text-sm">
                            <strong>Contact:</strong> {contactInfo}
                        </div>

                        <button className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded-xl hover:bg-cyan-600 transition duration-300">
                            Contact Now
                        </button>
                    </div>
                </div>


            </div>
        </section>

    );
};

export default PostDetails;
