import React from 'react';
import { NavLink } from 'react-router-dom';

const Featured = ({ matePost }) => {
  const { _id, photo, description, rentAmount, roomType, title, availability } = matePost;

  return (
    <div className="card bg-base-100 shadow-sm border-2 border-cyan-500 mx-auto flex flex-col md:flex-row  max-w-5xl w-11/12">
      <figure className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          className="w-full h-full object-cover"
          src={photo}
          alt="Roommate"
        />
      </figure>

      <div className="card-body bg-cyan-100 w-full md:w-1/2">
        <div className="badge badge-secondary">{availability}</div>

        <h2 className="card-title text-black break-words">{title}</h2>

        <p className="text-black text-sm md:text-base">{description}</p>

        <NavLink to={`/postDetails/${_id}`}>
          <button className="btn btn-link text-black px-0">See more</button>
        </NavLink>

        <div className="card-actions justify-end mt-4">
          <div className="badge badge-outline text-black">{roomType}</div>
          <div className="badge badge-outline text-black">BDT: {rentAmount}</div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
