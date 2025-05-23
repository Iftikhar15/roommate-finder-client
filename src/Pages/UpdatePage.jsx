import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatePage = () => {
    const { user, loading } = useContext(AuthContext);
    const posts = useLoaderData();
    const navigate = useNavigate();
    const { id } = useParams();

    const updatableData = posts.find((item) => item._id === id);

    const [formData, setFormData] = useState({
        userEmail: '',
        userName: '',
        title: '',
        location: '',
        rentAmount: '',
        roomType: '',
        lifeStyle: '',
        description: '',
        contactInfo: '',
        availability: '',
        photo: ''
    });

    useEffect(() => {
        if (loading) return;
        if (!user) {
            navigate('/login');
            return;
        } if (updatableData) {
            setFormData({ ...updatableData });
        }
    }, [user, loading, navigate, updatableData]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdateListing = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`https://roommate-finder-server-zeta.vercel.app/update-listing?id=${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                Swal.fire({
                    title: "Your Data Updated ",
                    showClass: {
                        popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                                `
                    },
                    hideClass: {
                        popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                                `
                    }
                });
                navigate('/mylistings');
            } else {
                alert('Failed to update listing.');
            }
        } catch (error) {
            console.error('Update failed', error);
        }
    };

    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Update your listing</h1>
                <p>Tell us a bit about yourself and your preferences — we'll help you find the perfect place and roommate.</p>
            </div>
            <form onSubmit={handleUpdateListing}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {[
                        { label: 'User Email', name: 'userEmail', readOnly: true },
                        { label: 'User Name', name: 'userName', readOnly: true },
                        { label: 'Title', name: 'title' },
                        { label: 'Location', name: 'location' },
                        { label: 'Rent Amount', name: 'rentAmount' },
                        { label: 'Description', name: 'description' },
                        { label: 'Contact Info', name: 'contactInfo' },
                        { label: 'Photo', name: 'photo' },
                    ].map(({ label, name, readOnly }) => (
                        <fieldset key={name} className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">{label}</label>
                            <input
                                type="text"
                                name={name}
                                className="input w-full"
                                placeholder={label}
                                value={formData[name]}
                                onChange={handleChange}
                                readOnly={readOnly}
                            />
                        </fieldset>
                    ))}

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Room Type</label>
                        <select name='roomType' className='input w-full' value={formData.roomType} onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Single room">Single Room</option>
                            <option value="Shared room">Shared Room</option>
                            <option value="Guest room">Guest Room</option>
                            <option value="Studio room">Studio Room</option>
                            <option value="Twin room">Twin Room</option>
                            <option value="Others">Others</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Lifestyle Preference</label>
                        <select name='lifeStyle' className='input w-full' value={formData.lifeStyle} onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Pets">Pets</option>
                            <option value="Smoking">Smoking</option>
                            <option value="Sleep Schedule">Sleep Schedule</option>
                            <option value="Cleanliness">Cleanliness</option>
                            <option value="Guests">Guests</option>
                            <option value="Others">Others</option>
                        </select>
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Availability</label>
                        <select name='availability' className='input w-full' value={formData.availability} onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </select>
                    </fieldset>
                </div>

                <input type="submit" className='btn w-full bg-cyan-500 hover:bg-base-300 mt-6' value="Update Listing" />
            </form>
        </div>
    );
};

export default UpdatePage;
