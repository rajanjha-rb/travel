"use client";

import React from "react";

const PALETTE = {
  blue: "#0057B7",         // Nav backgrounds, accents
  red: "#D72631",          // Buttons, highlights
  gold: "#FFD166",         // Accents
  white: "#F8F9FA",        // Backgrounds, cards
  gray: "#495057",         // Text, contrast
};

const navLinks1 = [
  { name: "Home", href: "#" },
  { name: "Holidays", href: "#" },
  { name: "Flights", href: "#" },
  { name: "Cruise", href: "#" },
  { name: "Promotions", href: "#" },
];
const navLinks2 = [
  { name: "About Us", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Careers", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Contact", href: "#" },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17 2.5h-2.5A4.5 4.5 0 0 0 10 7v3H7v4h3v8h4v-8h3l1-4h-4V7a1.5 1.5 0 0 1 1.5-1.5H17V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
  { name: "Instagram", href: "#", icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
  ) },
  { name: "Twitter", href: "#", icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 12 8.5c0 .352.04.695.116 1.022C8.728 9.37 5.7 7.7 3.671 5.149a4.48 4.48 0 0 0-.607 2.257c0 1.557.793 2.933 2.002 3.74a4.48 4.48 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.6 4.393c-.34.093-.698.143-1.068.143-.262 0-.515-.025-.763-.073a4.48 4.48 0 0 0 4.184 3.114A8.98 8.98 0 0 1 2 19.07a12.68 12.68 0 0 0 6.88 2.017c8.26 0 12.785-6.84 12.785-12.785 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 22 5.924Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ) },
];

const trustBadges = [
  { name: "ABTA", icon: <span style={{ fontWeight: 700, color: PALETTE.blue, fontSize: 14 }}>ABTA</span> },
  { name: "ATOL", icon: <span style={{ fontWeight: 700, color: PALETTE.gold, fontSize: 14 }}>ATOL</span> },
  { name: "5-Star", icon: <span style={{ fontWeight: 700, color: PALETTE.gold, fontSize: 14 }}>★★★★★</span> },
];

export default function Footer() {
  return (
    <footer style={{ background: PALETTE.white, color: PALETTE.gray }} className="w-full border-t border-[#FFD166] pt-0 pb-8 px-2 sm:px-4 md:px-8 mt-16 text-sm sm:text-base">
      {/* Gold Divider */}
      <div style={{ height: 5, background: `linear-gradient(90deg, ${PALETTE.gold} 0%, ${PALETTE.blue} 100%)` }} className="w-full mb-10" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-start pb-8">
        {/* Brand & Trust */}
        <div className="flex flex-col gap-3 items-start sm:items-start">
          <div className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold italic font-sans" style={{ color: PALETTE.blue }}>Brothers</span>
            <span className="text-2xl md:text-3xl font-bold italic font-sans" style={{ color: PALETTE.red }}>Holidays</span>
          </div>
          <p className="text-sm" style={{ color: PALETTE.gray, maxWidth: 260 }}>
            Luxury escapes, tailored journeys, and unforgettable experiences4crafted for you by the UK&apos;s most trusted travel experts.
          </p>
          <div className="mt-2 w-full">
            <span className="uppercase text-xs font-bold tracking-widest block mb-1" style={{ color: PALETTE.gold }}>Trusted by</span>
            <div className="flex gap-2">
              {trustBadges.map(badge => (
                <span key={badge.name} className="flex items-center gap-1 px-2 py-1 rounded bg-white/10 text-xs font-semibold border border-[#F8F9FA]">
                  {badge.icon}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col gap-2 items-start sm:items-start">
          <span className="uppercase text-xs font-bold tracking-widest mb-1" style={{ color: PALETTE.gold }}>Newsletter</span>
          <p className="text-xs mb-1" style={{ color: PALETTE.gray, maxWidth: 260 }}>Get exclusive deals & travel inspiration. No spam, ever.</p>
          <form className="flex w-full gap-2" onSubmit={e => e.preventDefault()} style={{ maxWidth: 320 }}>
            <span className="flex items-center px-3 bg-white/80 rounded border border-[#FFD166] w-full">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mr-2"><path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" stroke="#0057B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <input
                type="email"
                required
                placeholder="Your email"
                className="bg-transparent outline-none text-[#495057] placeholder-[#495057]/60 py-2 min-w-[80px] w-full"
                style={{ minWidth: 0 }}
              />
            </span>
            <button type="submit" className="px-5 py-2 rounded font-bold text-white whitespace-nowrap" style={{ background: PALETTE.red }}>
              Subscribe
            </button>
          </form>
        </div>
        {/* Navigation */}
        <div className="flex flex-col gap-2 items-start sm:items-start">
          <span className="uppercase text-xs font-bold tracking-widest mb-1" style={{ color: PALETTE.gold }}>Explore</span>
          <div className="flex gap-8">
            <ul className="flex flex-col gap-1">
              {navLinks1.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline font-medium" style={{ color: PALETTE.blue }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1">
              {navLinks2.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:underline font-medium" style={{ color: PALETTE.blue }}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Contact & Social */}
        <div className="flex flex-col gap-2 items-start sm:items-start">
          <span className="uppercase text-xs font-bold tracking-widest mb-1" style={{ color: PALETTE.gold }}>Contact</span>
          <a href="tel:02076127222" className="font-semibold text-base" style={{ color: PALETTE.red }}>0207 612 7222</a>
          <a href="mailto:info@brothersholidays.com" className="font-medium text-sm" style={{ color: PALETTE.gray }}>info@brothersholidays.com</a>
          <div className="flex gap-4 mt-2">
            {socialLinks.map(link => (
              <a key={link.name} href={link.href} aria-label={link.name}
                className="transition-transform"
                style={{ color: PALETTE.blue }}>
                {link.icon}
              </a>
            ))}
          </div>
          {/* Nepali flag/cultural icon */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs">Made with</span>
            <span style={{ fontSize: 18 }}>🇳🇵</span>
            <span className="text-xs">in Nepal</span>
          </div>
          <div className="mt-4 text-xs" style={{ color: PALETTE.gray }}>
            <span className="block font-bold mb-1">Visit Us</span>
            123 Luxury Lane, London, UK
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-10 text-center text-xs" style={{ color: PALETTE.gray }}>
        &copy; {new Date().getFullYear()} Brothers Holidays. All rights reserved.
      </div>
      {/* Floating Chatbot Button (bottom-right) */}
      <button
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center text-2xl"
        style={{ background: PALETTE.blue, fontFamily: 'Poppins, Arial, sans-serif', minWidth: 56, minHeight: 56 }}
        aria-label="Chatbot"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4c-.2.2-.3.5-.2.8l.5 2.2c.1.5-.3.9-.8.8l-2.2-.5c-.3-.1-.6 0-.8.2A8.5 8.5 0 1 1 21 11.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8.5" cy="10.5" r="1" fill="white"/><circle cx="15.5" cy="10.5" r="1" fill="white"/></svg>
      </button>
      <style>{`
        @media (max-width: 768px) {
          footer .grid-cols-1.md\:grid-cols-4 {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          footer .flex.items-center.gap-2 {
            justify-content: center;
          }
          footer .flex.flex-col.gap-4.items-start,
          footer .flex.flex-col.gap-3.items-start {
            align-items: center !important;
          }
          footer .flex.gap-8 {
            flex-direction: column;
            gap: 1.5rem !important;
            align-items: center;
          }
          footer .flex.gap-2 {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
}
