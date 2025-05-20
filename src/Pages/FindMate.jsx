import React from 'react';

const FindMate = () => {
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className='text-6xl'>Add a listing</h1>
                <p> Tell us a bit about yourself and your preferences — we'll help you find the perfect place and roommate.</p>
            </div>
            <form >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Email</label>
                        <input type="text" name='user-email'className="input w-full" placeholder="Email" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Name</label>
                        <input type="text" name='user-name'className="input w-full" placeholder="Name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Title</label>
                        <input type="text" name='title'className="input w-full" placeholder="Looking for a roommate in ......" />
                    </fieldset>
                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Location</label>
                        <input type="text" name='location'className="input w-full" placeholder="Location" />
                    </fieldset>
                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Rent Amount</label>
                        <input type="text" name='rent-amount'className="input w-full" placeholder="Rent Amount" />
                    </fieldset>
                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Room Type</label>
                        <input type="text" name='room-type'className="input w-full" placeholder="Select type of Room" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Lifestyle Preference</label>
                        <input type="text" name='lifestyle-preference'className="input w-full" placeholder="Select Category of Lifestyle" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Description</label>
                        <input type="text" name='description'className="input w-full" placeholder="Details" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Contact Info</label>
                        <input type="text" name='contact-info'className="input w-full" placeholder="Your Contact Number" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Availability</label>
                        <input type="text" name='availability'className="input w-full" placeholder="Select you Availability" />
                    </fieldset>

                </div>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6 border p-4">
                        <label className="label">Photo</label>
                        <input type="text" name='photo'className="input w-full" placeholder="Photo URL" />
                    </fieldset>
                    <input type="Submit" className='btn w-full bg-cyan-500 hover:bg-base-300' value="Add" />
            </form>
        </div>
    );
};

export default FindMate;