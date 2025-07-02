import React from 'react';

export default function About() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <h3 className="text-2xl font-bold mb-4 text-blue-700">Your Journey, Our Passion</h3>
      <p className="text-gray-700 text-lg mb-4">
        Brothers Holidays is your trusted partner for unforgettable travel experiences. With decades of expertise, a global network, and a passion for adventure, we craft journeys that inspire and delight. Whether you seek luxury escapes, cultural immersion, or thrilling adventures, our dedicated team ensures every detail is perfect—so you can travel with confidence and joy.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-6">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-yellow-500">20+</span>
          <span className="text-gray-600">Years of Experience</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-blue-700">1000+</span>
          <span className="text-gray-600">Happy Travelers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-red-500">24/7</span>
          <span className="text-gray-600">Personal Support</span>
        </div>
      </div>
    </div>
  );
}
