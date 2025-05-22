import React from 'react';
import { NavLink } from 'react-router';

const Featured = ({ matePost }) => {
    const { _id, photo, description, rentAmount, roomType, title, availability} = matePost;

    return (
        <>


            <div className="card card-side bg-base-100 w-120 shadow-sm flex mx-auto border-2 border-cyan-500 flex-col">
                <figure>
                    <img
                        src={photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="badge badge-secondary">{availability}</div>
                    <h2 className="card-title">
                        {title}
                        
                    </h2>
                    <p>{description}</p>
                    <NavLink
                    to={`/postDetails/${_id}`}
                    >
                        <button className="btn btn-link">See more</button>
                    </NavLink>
                    
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{roomType}</div>
                        <div className="badge badge-outline">BDT: {rentAmount}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Featured;