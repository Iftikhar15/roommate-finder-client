import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const BrowseListings = () => {
    const matePosts = useLoaderData();

    return (
        <section className='h-[calc(100vh-233px)] w-11/12 mx-auto'>
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Browse Listings</h2>
                <table className="w-full border border-gray-300 ">
                    <thead>
                        <tr className="bg-cyan-200 text-left text-gray-700">
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
                                    <NavLink
                                    to={`/postDetails/${item._id}`}
                                    >
                                        <button
                                            className="bg-cyan-500 text-white hover:bg-cyan-300 cursor-pointer px-3 py-1 rounded"
                                        >
                                            See More
                                        </button>
                                    </NavLink>


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