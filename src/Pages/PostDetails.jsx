import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData();

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
  } = post;

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-violet-200 my-10">
      {/* Header */}
      <div className="bg-cyan-500 text-white p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm">Posted by {userName} ({userEmail})</p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="md:w-1/3 bg-gray-100 flex justify-center items-center p-4">
          <img
            src={photo}
            alt={title}
            className="w-full h-48 object-cover rounded-xl shadow-sm"
          />
        </div>

        {/* Right: Details */}
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
  );
};

export default PostDetails;
