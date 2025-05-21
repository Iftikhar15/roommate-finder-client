import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router';

const FindMate = () => {
    const {user}= useContext(AuthContext);
    const Navigate = useNavigate();

    useEffect(() => {    
        user === null && (Navigate('/login'))  
    },[user, Navigate]);
    
    const handleAddlisting = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newListing = Object.fromEntries(formData.entries())
        const lowerCaseEmail = newListing.userEmail.toLowerCase();
        newListing.userEmail = lowerCaseEmail;


        // send coffee data to the db
        try {
            fetch('http://localhost:3000/Roommates', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newListing)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.data.insertedId) {
                        console.log('after adding listing to cb');
                        Swal.fire({
                            title: "Added Successfully!",
                            icon: "success",
                            draggable: true
                        });
                        // form.reset()
                    }


                })
        }
        catch (error) {
            console.log(error);

        }
    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Add a listing</h1>
                <p> Tell us a bit about yourself and your preferences — we'll help you find the perfect place and roommate.</p>
            </div>
            <form onSubmit={handleAddlisting}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Email</label>
                        <input type="text" name='userEmail' className="input w-full" placeholder="Email" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Name</label>
                        <input type="text" name='userName' className="input w-full" placeholder="Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Title</label>
                        <input type="text" name='title' className="input w-full" placeholder="Looking for a roommate in ......" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Location</label>
                        <input type="text" name='location' className="input w-full" placeholder="Location" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Rent Amount</label>
                        <input type="text" name='rentAmount' className="input w-full" placeholder="Rent Amount" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Room Type</label>
                        <select name='roomType' id="roomType">
                            <option value="">--Please choose an option--</option>
                            <option value="Single room">Single Room</option>
                            <option value="Shared room">Shared Room</option>
                            <option value="Guest room">Guest Room</option>
                            <option value="Studio room">Studio Room</option>
                            <option value="Twin room">Twin Room</option>
                            <option value="Others">Others</option>
                        </select>
                        {/* <input type="text" name='room-type' className="input w-full" placeholder="Select type of Room" /> */}
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Lifestyle Preference</label>
                        <select name='lifeStyle' id="life-style">
                            <option value="">--Please choose an option--</option>
                            <option value="Pets">Pets</option>
                            <option value="Smoking">Smoking</option>
                            <option value="Sleep Schedule">Sleep Schedule</option>
                            <option value="Cleanliness">Cleanliness</option>
                            <option value="Guests">Guests</option>
                            <option value="Others">Others</option>
                        </select>
                        {/* <input type="text" name='lifestyle-preference' className="input w-full" placeholder="Select Category of Lifestyle" /> */}
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input type="text" name='description' className="input w-full" placeholder="Details" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Contact Info</label>
                        <input type="text" name='contactInfo' className="input w-full" placeholder="Your Contact Number" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Availability</label>
                        <select name='availability' id="lifestyle">
                            <option value="">--Please choose an option--</option>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </select>
                        {/* <input type="text" name='availability' className="input w-full" placeholder="Select you Availability" /> */}
                    </fieldset>

                </div>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6 border p-4">
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                </fieldset>
                <input type="Submit" className='btn w-full bg-cyan-500 hover:bg-base-300' value="Add" />
            </form>
        </div>
    );
};

export default FindMate;