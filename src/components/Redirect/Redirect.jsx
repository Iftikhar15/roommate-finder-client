import React from 'react';
import { NavLink } from 'react-router';

const Redirect = () => {
    return (
        <div class="bg-cyan-500 px-6 relative">
            <div class="max-w-4xl mx-auto relative">
                <div class="py-6 md:py-12 text-white text-center">
                    <h1 class="leading-snug text-4xl sm:text-5xl mb-4 animate-slide-top">
                        USA’s largest roommate finder
                    </h1>
                    <h2 class="leading-snug text-xl sm:text-3xl font-medium mb-6 animate-slide-top delay-[300ms]">
                        Free to list, search & communicate
                    </h2>

                    <div class="grid md:grid-cols-2 gap-8 sm:gap-4">

                        <NavLink
                        to="/findRoommate"
                        >
                            <a href=""
                            class="flex items-center gap-4 px-6 py-3 bg-white hover:bg-teal-100 rounded-md group transition-all">
                            <div class="flex-1 flex flex-col items-start">
                                <div class="font-semibold text-xl sm:text-2xl mb-2 text-gray-600">Need a roommate?</div>
                                <div class="inline-flex items-center gap-2 bg-teal-500 font-semibold px-5 py-1 text-white rounded-full">
                                    <span class="sm:text-lg">List your room</span>
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M23.987 12a2.411 2.411 0 0 0 -0.814 -1.8L11.994 0.361a1.44 1.44 0 0 0 -1.9 2.162l8.637 7.6a0.25 0.25 0 0 1 -0.165 0.437H1.452a1.44 1.44 0 0 0 0 2.88h17.111a0.251 0.251 0 0 1 0.165 0.438l-8.637 7.6a1.44 1.44 0 1 0 1.9 2.161L23.172 13.8a2.409 2.409 0 0 0 0.815 -1.8Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                            <img src="https://i.ibb.co/kgvgsSF4/home-roomie.png"
                                alt="Roommate illustration"
                                class="h-24 scale-150 transition-all group-hover:-mt-2 group-hover:mb-2" />
                        </a>
                        </NavLink>
                        
                        <NavLink
                        to={"/browselinstings"}>
                            <a href=""
                            class="flex items-center gap-4 px-6 py-3 bg-white hover:bg-orange-100 rounded-md group transition-all">
                            <div class="flex-1 flex flex-col items-start">
                                <div class="font-semibold text-xl sm:text-2xl mb-2 text-gray-600">Looking for a place?</div>
                                <div class="inline-flex items-center gap-2 bg-orange-500 font-semibold px-5 py-1 text-white rounded-full">
                                    <span class="sm:text-lg">Browse Listings</span>
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M23.987 12a2.411 2.411 0 0 0 -0.814 -1.8L11.994 0.361a1.44 1.44 0 0 0 -1.9 2.162l8.637 7.6a0.25 0.25 0 0 1 -0.165 0.437H1.452a1.44 1.44 0 0 0 0 2.88h17.111a0.251 0.251 0 0 1 0.165 0.438l-8.637 7.6a1.44 1.44 0 1 0 1.9 2.161L23.172 13.8a2.409 2.409 0 0 0 0.815 -1.8Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                            <img src="https://i.ibb.co/cc9zpYkh/home-homie.png"
                                alt="Looking for room illustration"
                                class="h-24 scale-150 transition-all group-hover:-mt-2 group-hover:mb-2" />
                        </a>
                        </NavLink>

                        
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Redirect;