import React from 'react';

const Featured = () => {
    return (
        <>
        <div className='mx-auto flex justify-center'>
            <h3 className='text-3xl font-bold my-15 text-cyan-500'>
                Featured Roommates Post Section
            </h3>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm flex mx-auto">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Featured;