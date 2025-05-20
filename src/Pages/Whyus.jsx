import React from 'react';

const WhyUs = () => {
  return (
    <section className="bg-violet-100 py-16 text-black text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-500 mb-6">Why Choose HiRoomie?</h2>
        <p className="text-lg mb-10 text-gray-700">
          Finding the right roommate and place to live shouldn't be stressful. At HiRoomie, we simplify the process with smart matching, verified listings, and a supportive community—so you can feel confident about your next move.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-cyan-500 mb-2">Smart Matching</h3>
            <p className="text-gray-600">We use intelligent filters and preferences to connect you with compatible roommates and ideal locations.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-cyan-500 mb-2">Verified Profiles</h3>
            <p className="text-gray-600">Your safety matters. All listings and profiles go through verification so you can search with peace of mind.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-cyan-500">
            <h3 className="text-xl font-semibold text-cyan-500 mb-2">Seamless Experience</h3>
            <p className="text-gray-600">From search to connection, we make it easy to find your next home and a great person to share it with.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-cyan-500 mt-16 mb-6">What Our Users Say</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <p className="text-gray-700 mb-4">"I found an amazing roommate within days! The process was smooth and the profile filters were super helpful."</p>
            <p className="font-semibold text-cyan-500">– Alex T.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-left">
            <p className="text-gray-700 mb-4">"This platform took all the stress out of finding a place. I matched with someone who shares my lifestyle and values!"</p>
            <p className="font-semibold text-cyan-500">– Priya R.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
