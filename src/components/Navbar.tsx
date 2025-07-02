"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Holidays", href: "#", dropdown: true },
  { name: "Flights", href: "#", dropdown: true },
  { name: "Cruise", href: "#", dropdown: true },
  { name: "Promotions", href: "#", dropdown: true },
  { name: "More", href: "#", dropdown: true },
  { name: "Multi Centre", href: "#", icon: true },
];

const PALETTE = {
  blue: "#0057B7",         // Nav backgrounds, accents
  red: "#D72631",          // Buttons, highlights
  gold: "#FFD166",         // Accents
  white: "#F8F9FA",        // Backgrounds, cards
  gray: "#495057",         // Text, contrast
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-white border-b-2" style={{ borderColor: PALETTE.gold }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 md:px-8 py-2 sm:py-3">
          {/* Logo and Mobile Text */}
          <a href="#" className="flex items-center gap-2 select-none" style={{ minHeight: 48 }}>
            <Image
              src="/travelLogo.svg"
              alt="Brothers Holidays Logo"
              width={40}
              height={40}
              className="h-10 w-auto md:h-12 transition-transform duration-200 hover:scale-105 drop-shadow"
              priority
            />
            {/* Mobile: Brothers Holidays in black */}
            <span className="inline md:hidden text-lg font-bold tracking-tight" style={{ color: '#171717', fontFamily: 'Poppins, Arial, sans-serif', letterSpacing: '-0.01em' }}>
              Brothers Holidays
            </span>
            {/* Desktop: Brothers Holidays in black (existing) */}
            <span className="hidden md:inline text-xl md:text-2xl font-bold tracking-tight" style={{ fontFamily: 'Poppins, Arial, sans-serif', letterSpacing: '-0.01em' }}>
              <span style={{ color: '#171717' }}>Brothers</span> <span style={{ color: '#171717' }}>Holidays</span>
            </span>
          </a>
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+9779807872340" className="flex items-center gap-2 font-bold text-base transition" style={{ color: PALETTE.red }}>
              <span className="p-2 rounded-lg flex items-center justify-center" style={{ background: PALETTE.red, color: PALETTE.white }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M2.5 4.5A2 2 0 0 1 4.5 2.5h2A2 2 0 0 1 8.5 4.5v1A2 2 0 0 1 6.5 7.5h-2A2 2 0 0 1 2.5 5.5v-1zM17.5 15.5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <span className="inline">+977 9741726064</span>
            </a>
            <div className="flex items-center gap-2 ml-4">
              <a href="/signup" className="px-4 py-2 rounded-full font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow transition text-base" style={{ background: PALETTE.blue }}>
                Sign Up
              </a>
              <a href="/signin" className="px-4 py-2 rounded-full font-semibold text-blue-600 border-2 border-blue-600 hover:bg-blue-50 transition text-base" style={{ color: PALETTE.blue, borderColor: PALETTE.blue }}>
                Sign In
              </a>
            </div>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 group ml-2"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            style={{ touchAction: 'manipulation' }}
          >
            <span className={`block w-7 h-1 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
              style={{ background: PALETTE.red }}></span>
            <span className={`block w-7 h-1 rounded transition-all duration-300 my-1 ${open ? "opacity-0" : ""}`}
              style={{ background: PALETTE.red }}></span>
            <span className={`block w-7 h-1 rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ background: PALETTE.red }}></span>
          </button>
        </div>
      </div>
      {/* Mobile Blue Bar with Multi Centre and Call Now */}
      <div className="md:hidden w-full flex justify-center items-center gap-2 px-2 py-2" style={{ background: PALETTE.blue }}>
        <a href="#" className="flex items-center gap-2 flex-1 justify-center py-2 rounded-lg font-bold text-base transition" style={{ background: PALETTE.white, color: PALETTE.blue, maxWidth: '180px' }}>
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20" className="inline-block"><circle cx="9" cy="9" r="7" stroke={PALETTE.gold} strokeWidth="1.5"/><path d="M16 16l-2-2" stroke={PALETTE.gold} strokeWidth="1.5" strokeLinecap="round"/></svg>
          Multi Centre
        </a>
        <a href="tel:+9779807872340" className="flex items-center gap-2 flex-1 justify-center py-2 rounded-lg font-bold text-base transition" style={{ background: PALETTE.gold, color: PALETTE.blue, maxWidth: '180px' }}>
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3.08 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z" stroke={PALETTE.blue} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Call Now
        </a>
      </div>
      {/* Bottom Nav Bar */}
      <nav style={{ background: PALETTE.blue }} className="w-full shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 md:px-8">
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-1 flex-wrap">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  className={`flex items-center gap-1 px-2 md:px-2.5 lg:px-3 py-1.5 md:py-2 lg:py-2.5 font-semibold text-sm md:text-base uppercase tracking-wide transition rounded relative ${link.name === 'Multi Centre' ? 'border-2 border-gold bg-white/10 text-gold' : 'text-white'}`}
                  style={link.name === 'Multi Centre' ? { borderColor: PALETTE.gold, color: PALETTE.gold, background: 'rgba(255,255,255,0.08)' } : { color: PALETTE.white }}
                >
                  {link.icon && (
                    <svg width="18" height="18" fill="none" viewBox="0 0 20 20" className="inline-block mr-1" style={{ color: PALETTE.gold }}><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M16 16l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  )}
                  {link.name}
                  {link.dropdown && (
                    <svg width="14" height="14" fill="none" viewBox="0 0 20 20" className="ml-1"><path d="M7 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  <span
                    className="absolute left-2 right-2 bottom-1 h-0.5 rounded transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ background: PALETTE.gold }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Mobile Drawer and Overlay Wrapper */}
      {open && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          {/* Drawer */}
          <nav
            className={`md:hidden fixed top-0 left-0 h-full w-4/5 max-w-xs flex flex-col pt-8 pb-8 px-4 gap-8 transition-transform duration-300 pointer-events-auto ${open ? "translate-x-0" : "-translate-x-full"}`}
            style={{
              background: 'rgba(255,255,255,0.95)',
              borderTopRightRadius: '1.5rem',
              borderBottomRightRadius: '1.5rem',
              border: `2px solid ${PALETTE.blue}`,
              boxShadow: '0 8px 32px 0 rgba(39, 55, 85, 0.18)',
              backdropFilter: 'blur(8px)',
            }}
            aria-label="Mobile menu"
          >
            {/* Close (X) icon */}
            <button
              className="absolute top-4 right-4 text-2xl focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{ zIndex: 60 }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={PALETTE.red} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <ul className="flex flex-col gap-6 w-full items-center mt-8">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  <a
                    href={link.href}
                    className="flex items-center gap-2 w-full text-center font-semibold text-lg uppercase tracking-wide py-3 rounded-lg transition-colors duration-200 hover:bg-white/10 hover:text-gold"
                    style={{ color: PALETTE.blue, fontSize: '1.15rem' }}
                    onClick={() => setOpen(false)}
                  >
                    {link.icon && (
                      <svg width="18" height="18" fill="none" viewBox="0 0 20 20" className="inline-block mr-1" style={{ color: PALETTE.gold }}><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M16 16l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    )}
                    {link.name}
                    {link.dropdown && (
                      <svg width="14" height="14" fill="none" viewBox="0 0 20 20" className="ml-1"><path d="M7 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Overlay only covers the rest of the screen, not the drawer */}
          <div
            className="fixed top-0 right-0 h-full bg-black bg-opacity-40 transition-opacity duration-300 pointer-events-auto"
            style={{ left: '80vw', maxWidth: 'calc(100vw - 80vw)' }}
            onClick={() => setOpen(false)}
          />
        </div>
      )}
    </header>
  );
}
