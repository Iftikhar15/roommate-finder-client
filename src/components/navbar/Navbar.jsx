import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from '../../Contexts/AuthContext';
import navLogo from '../../assets/HR logo.png';
import userDef from '../../assets/userdef.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, signOutUser } = useContext(AuthContext);




    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                navigate("/login");
            })
            .catch(error => {
                console.error(error);
            });
    };



    const links = (

        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/browselinstings">Browse Listings</NavLink></li>
            <li><NavLink to="/why-us">Why Us!</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/findRoommate">Add to Find Roommate</NavLink></li>
                    <li><NavLink to="/mylistings">My Listings</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-white shadow-sm px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52 z-[1000]">
                        {links}
                    </ul>
                </div>
                <img className='w-10 h-10' src={navLogo} alt="Logo" />
                <NavLink to="/" className="btn btn-ghost text-xl lg:hidden">HM</NavLink>
                <NavLink to="/" className="btn btn-ghost text-2xl hidden lg:block">Hi<span className='text-cyan-500'>Mate!</span></NavLink>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black">
                    {links}
                </ul>
            </div>


            <div className="navbar-end space-x-2">
                <label className="flex cursor-pointer gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" />
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>

                {user && (
                    <div className="relative group">
                        <img
                            className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
                            src={user.photoURL || userDef}
                            alt={user?.displayName}
                            onClick={() => navigate('/profile')}
                        />
                        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 p-2 bg-white text-sm text-center rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                            <p className="text-gray-900 font-medium">{user.displayName}</p>
                        </div>
                    </div>
                )}

                {user ? (
                    <button onClick={handleSignOut} className="btn bg-cyan-500 hover:bg-white text-black text-sm rounded-full px-4 py-2">
                        Logout
                    </button>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="btn bg-cyan-500 hover:bg-white text-black  text-sm rounded-full px-4 py-2">
                                Login
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="btn bg-cyan-500 hover:bg-white text-black  text-sm rounded-full px-4 py-2">
                                Sign Up
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
