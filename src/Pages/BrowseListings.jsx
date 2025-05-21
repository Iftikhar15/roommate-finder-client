import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Featured from '../components/Featured/Featured';

const BrowseListings = () => {
    const matePosts = useLoaderData();
    const [listings, setListings] = useState([]);
    const navigate = useNavigate();


    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3000/listings/${id}`, {
                method: 'DELETE'
            });
            setListings((prev) => prev.filter((item) => item._id !== id));
        } catch (err) {
            console.error('Delete failed:', err);
        }
    };

    const handleUpdate = (id) => {
        navigate(`/update-listing/${id}`);
    };

    return (
        <section className='h-[calc(100vh-233px)] w-11/12 mx-auto'>
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">My Listings</h2>
                <table className="w-full border border-gray-300 ">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-2 border">Title</th>
                            <th className="p-2 border">Location</th>
                            <th className="p-2 border">Rent</th>
                            <th className="p-2 border">Room Type</th>
                            <th className="p-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matePosts.map((item) => (
                            <tr key={item._id} className="border-t">
                                <td className="p-2 border">{item.title}</td>
                                <td className="p-2 border">{item.location}</td>
                                <td className="p-2 border">{item.rentAmount}</td>
                                <td className="p-2 border">{item.roomType}</td>
                                <td className="p-2 border space-x-2">
                                    <button
                                        onClick={() => handleUpdate(item._id)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default BrowseListings;