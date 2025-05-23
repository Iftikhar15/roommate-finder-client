import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const MyListings = () => {
    const { user, loading } = useContext(AuthContext);
    const [listings, setListings] = useState([]);
    const navigate = useNavigate();
    console.log('listings', listings);
    const fetchListings = async () => {
        try {
            const res = await fetch(`https://roommate-finder-server-zeta.vercel.app/my-listings?email=${user.email}`);
            const data = await res.json();
            console.log('data ----->', data);

            setListings(data?.data || []);
        } catch (err) {
            console.error('Failed to fetch listings:', err);
        }
    };

    useEffect(() => {
        if (loading) return;

        if (!user) {
            navigate('/login');
            return;
        }



        fetchListings();
    }, [user, loading, navigate]);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://roommate-finder-server-zeta.vercel.app/delete-listing?id=${id}`, {
                method: 'DELETE'
            });
            if (response.status === 200) {
                toast.success("Item deleted successfully", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                });
                fetchListings();

            }
        } catch (err) {
            console.error('Delete failed:', err);
        }
    };

    const handleUpdate = (id) => {
        navigate(`/update-listing/${id}`);
    };

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <section className='h-[calc(100vh-233px)] w-11/12 mx-auto'>
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">My Listings</h2>
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
                        {listings.map((item) => (
                            <tr key={item._id} className="border-t">
                                <td className="p-2 border">{item.title}</td>
                                <td className="p-2 border">{item.location}</td>
                                <td className="p-2 border">{item.rentAmount}</td>
                                <td className="p-2 border">{item.roomType}</td>
                                <td className="p-2 border space-x-2">
                                    <button
                                        onClick={() => handleUpdate(item._id)}
                                        className="bg-blue-500 hover:bg-blue-200 cursor-pointer text-white px-3 py-1 rounded"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="bg-red-500 hover:bg-red-200 cursor-pointer text-white px-3 py-1 rounded"
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

export default MyListings;
