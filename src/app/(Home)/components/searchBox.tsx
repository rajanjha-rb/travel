"use client";

import React, { useState } from 'react';
import { MapPin, Moon, DollarSign, Search } from 'lucide-react';

const PALETTE = {
  blue: "#0057B7",
  gold: "#FFD166",
  white: "#F8F9FA",
  gray: "#7B8A99",
  red: "#D72631",
};

export default function SearchBox() {
  const [destination, setDestination] = useState('');
  const [nights, setNights] = useState('');
  const [budget, setBudget] = useState('');

  return (
    <div className="w-full flex justify-center font-sans relative -top-2 z-10 mb-6 md:mb-16 px-1 sm:px-0 overflow-x-hidden">
      <div
        className="w-full max-w-5xl px-2 sm:px-4 md:px-8 py-3 sm:py-6 md:py-8 flex flex-col gap-2 border-2 border-yellow-300 shadow-lg rounded-[2.5rem] bg-white/60 backdrop-blur-sm hover:shadow-2xl relative"
        style={{
          boxShadow: '0 4px 24px 0 rgba(0,87,183,0.10), 0 0 0 4px #FFD16633',
          border: '2px solid #FFD166',
        }}
      >
        {/* Packages Heading */}
        <div className="flex justify-center mb-3 mt-2">
          <div className="flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-2 bg-white/70 rounded-full shadow-lg font-extrabold text-lg sm:text-xl md:text-2xl border-2 border-yellow-300 gold-glow relative">
            <span className="text-[#D72631]">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="7" y="7" width="10" height="10" rx="2" stroke="#D72631" strokeWidth="2"/><path d="M9 7V5a3 3 0 0 1 6 0v2" stroke="#D72631" strokeWidth="2"/></svg>
            </span>
            <span className="text-[#D72631]">Packages</span>
          </div>
        </div>
        {/* Fields Row */}
        <form
          className="flex flex-col md:flex-row items-center justify-center gap-3 w-full max-w-2xl px-2 py-2 mx-auto"
          onSubmit={e => { e.preventDefault(); /* handle search here */ }}
        >
          {/* Destination */}
          <div className="w-full md:w-64 flex min-h-[48px] items-center">
            <div className="flex items-center min-h-[48px] w-full bg-gray-100 rounded-full px-5 py-3 group">
              <span className="flex items-center text-blue-400 flex-shrink-0 mr-2 h-6 w-6 justify-center" aria-hidden="true">
                <MapPin size={24} strokeWidth={2} className="text-blue-400" aria-label="Destination" />
              </span>
              <input
                type="text"
                value={destination}
                onChange={e => setDestination(e.target.value)}
                className="bg-transparent outline-none border-none text-base md:text-lg text-gray-500 font-semibold flex-1 min-w-0 max-w-full placeholder:text-gray-400 text-left group-focus-within:text-blue-700 transition-colors duration-200 min-h-[32px] px-0"
                placeholder="Destination"
                aria-label="Destination"
                required
                autoComplete="off"
              />
            </div>
          </div>
          {/* Number of Nights */}
          <div className="w-full md:w-64 flex min-h-[48px] items-center">
            <div className="flex items-center min-h-[48px] w-full bg-gray-100 rounded-full px-5 py-3 group">
              <span className="flex items-center text-blue-400 flex-shrink-0 mr-2 h-6 w-6 justify-center" aria-hidden="true">
                <Moon size={24} strokeWidth={2} className="text-blue-400" aria-label="Number of Nights" />
              </span>
              <input
                type="number"
                min={1}
                value={nights}
                onChange={e => setNights(e.target.value)}
                className="bg-transparent outline-none border-none text-base md:text-lg text-gray-500 font-semibold flex-1 min-w-0 max-w-full placeholder:text-gray-400 text-left group-focus-within:text-blue-700 transition-colors duration-200 min-h-[32px] px-0"
                placeholder="Number of Nights"
                aria-label="Number of Nights"
                required
                autoComplete="off"
              />
            </div>
          </div>
          {/* Budget Per Person */}
          <div className="w-full md:w-64 flex min-h-[48px] items-center">
            <div className="flex items-center min-h-[48px] w-full bg-gray-100 rounded-full px-5 py-3 group">
              <span className="flex items-center text-blue-400 flex-shrink-0 mr-2 h-6 w-6 justify-center" aria-hidden="true">
                <DollarSign size={24} strokeWidth={2} className="text-blue-400" aria-label="Budget Per Person" />
              </span>
              <input
                type="number"
                min={0}
                value={budget}
                onChange={e => setBudget(e.target.value)}
                className="bg-transparent outline-none border-none text-base md:text-lg text-gray-500 font-semibold flex-1 min-w-0 max-w-full placeholder:text-gray-400 text-left group-focus-within:text-blue-700 transition-colors duration-200 min-h-[32px] px-0"
                placeholder="Budget Per Person"
                aria-label="Budget Per Person"
                required
                autoComplete="off"
              />
            </div>
          </div>
          {/* Search Button - visually integrated at the end */}
          <div className="flex items-center justify-center mt-3 md:mt-0">
            <button
              type="submit"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400 hover:bg-red-500 transition-all duration-200 text-white text-xl shadow focus:outline-none focus:ring-4 focus:ring-blue-200 group"
              aria-label="Search"
            >
              <span className="flex items-center justify-center w-7 h-7">
                <Search size={24} strokeWidth={2.5} className="text-white" aria-label="Search" />
              </span>
            </button>
          </div>
        </form>
        <style jsx>{`
          .gold-glow {
            box-shadow: 0 0 0 4px #FFD16633, 0 2px 16px 0 #FFD16655 !important;
          }
          .search-glow-premium {
            box-shadow: 0 0 0 8px #60A5FA33, 0 4px 24px 0 #93C5FD99 !important;
            transition: box-shadow 0.2s;
          }
          .search-glow-premium:hover, .search-glow-premium:focus {
            box-shadow: 0 0 0 12px #60A5FA44, 0 8px 32px 0 #93C5FDCC !important;
          }
          @media (max-width: 640px) {
            form {
              flex-direction: column !important;
              gap: 1.2rem !important;
            }
            input {
              font-size: 1rem !important;
              padding-left: 0.5rem !important;
              padding-right: 0.5rem !important;
            }
            .gold-glow {
              font-size: 1.1rem !important;
            }
          }
        `}</style>
        <style jsx global>{`
          body { overflow-x: hidden !important; }
        `}</style>
      </div>
    </div>
  );
}
