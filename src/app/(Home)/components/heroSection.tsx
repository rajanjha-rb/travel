"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';

const slides = [
  {
    img: "/1.png",
    headline: "Explore the Hidden Gems of Nepal",
    subheadline: "From Himalayan peaks to ancient temples — discover all.",
  },
  {
    img: "/2.png",
    headline: "Journey Through Culture and Nature",
    subheadline: "Nepal offers unforgettable experiences at every turn.",
  },
  {
    img: "/3.png",
    headline: "Timeless Nepal Awaits Your Next Escape",
    subheadline: "Nepal welcomes every soul seeking adventure and peace",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [nextLoaded, setNextLoaded] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [firstTransitionStarted, setFirstTransitionStarted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Mark as hydrated
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Preload all images (hidden)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      slides.forEach(slide => {
        const img = new window.Image();
        img.src = slide.img;
      });
    }
  }, []);

  // Start the timer for the first transition ONLY after hydration
  useEffect(() => {
    if (!firstTransitionStarted && hydrated && !transitioning) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        const nextIdx = (currentIndex + 1) % slides.length;
        setNextIndex(nextIdx);
        setTransitioning(true);
        setNextLoaded(false);
        setFirstTransitionStarted(true);
      }, 3000);
      return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }
  }, [hydrated, transitioning, firstTransitionStarted, currentIndex]);

  // For all subsequent transitions
  useEffect(() => {
    if (firstTransitionStarted && !transitioning) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        const nextIdx = (currentIndex + 1) % slides.length;
        setNextIndex(nextIdx);
        setTransitioning(true);
        setNextLoaded(false);
      }, 3000);
      return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }
  }, [transitioning, firstTransitionStarted, currentIndex]);

  // When next image is loaded and we're transitioning, update text and start fade
  useEffect(() => {
    if (transitioning && nextLoaded && nextIndex !== null) {
      setDisplayedIndex(nextIndex);
    }
  }, [transitioning, nextLoaded, nextIndex]);

  // When next image is loaded and we're transitioning, finish the transition
  useEffect(() => {
    if (transitioning && nextLoaded && nextIndex !== null && displayedIndex === nextIndex) {
      const t = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex(null);
        setTransitioning(false);
      }, 350); // match fade duration
      return () => clearTimeout(t);
    }
  }, [transitioning, nextLoaded, nextIndex, displayedIndex]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  const current = slides[currentIndex];
  const displayed = slides[displayedIndex];
  const next = nextIndex !== null ? slides[nextIndex] : null;

  // Helper for manual navigation with fade
  const handleManualNav = (idx: number) => {
    setNextIndex(idx);
    setTransitioning(true);
    setNextLoaded(false);
    setTimeout(() => {
      setCurrentIndex(idx);
      setNextIndex(null);
      setTransitioning(false);
    }, 350);
  };

  return (
    <section className="relative w-full flex flex-col justify-between items-center min-h-[400px] sm:min-h-[500px] font-sans bg-[#F8F9FA] overflow-x-hidden px-1 sm:px-0">
      {/* Preload all images hidden to avoid white flash on first transition */}
      <div style={{ display: 'none' }}>
        {slides.map((slide) => (
          <Image
            key={slide.img + '-preload'}
            src={slide.img}
            alt="preload"
            width={1920}
            height={1080}
            priority={false}
            style={{ display: 'none' }}
          />
        ))}
      </div>
      {/* Hero Image and Content */}
      <div
        className="relative w-full h-[220px] xs:h-[280px] sm:h-[350px] md:h-[500px] lg:h-[550px] overflow-hidden bg-gradient-to-br from-blue-100 to-yellow-100 flex flex-col justify-between"
        tabIndex={0}
        aria-label="Hero image carousel"
      >
        {/* Current image always fully opaque */}
        <Image
          key={current.img + '-current'}
          src={current.img}
          alt="Hero background"
          fill
          sizes="100vw"
          priority={currentIndex === 0}
          quality={90}
          className="absolute inset-0 w-full h-full object-cover opacity-100 transition-none"
          style={{ zIndex: 1, objectPosition: 'center', pointerEvents: 'none' }}
          draggable={false}
        />
        {/* Next image fades in on top, only during transition */}
        {transitioning && next && (
          <Image
            key={next.img + '-next'}
            src={next.img}
            alt="Hero background"
            fill
            sizes="100vw"
            priority={false}
            quality={90}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${nextLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: 2, objectPosition: 'center', pointerEvents: 'none' }}
            draggable={false}
            onLoad={() => setNextLoaded(true)}
          />
        )}
        {/* Overlayed Content: Only current text, no animation, no layout jump */}
        <div className="absolute inset-0 flex flex-col items-center z-10 px-4" style={{ justifyContent: 'flex-start', top: 0, height: '100%' }}>
          <div className="relative w-full h-0" style={{ minHeight: '200px' }}>
            <div
              className="flex flex-col items-center w-full mt-20 md:mt-32 absolute left-0 right-0"
              style={{ pointerEvents: 'none' }}
            >
              <div className="mb-3 px-2 sm:px-6 py-2 sm:py-4 rounded-lg shadow-lg text-center max-w-2xl relative bg-white/95 border-2 border-yellow-300 font-extrabold text-lg xs:text-xl md:text-2xl" style={{ color: '#0057B7', fontFamily: 'Poppins, Arial, sans-serif', lineHeight: 1.2 }}>
                <span style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                  filter: 'blur(18px)',
                  opacity: 0.35,
                  background: 'radial-gradient(circle, #0057B7 0%, #FFD166 80%, transparent 100%)',
                  width: '110%',
                  height: '120%',
                  borderRadius: '1.5rem',
                  pointerEvents: 'none',
                }} />
                <span style={{ position: 'relative', zIndex: 1 }}>{(transitioning && next) ? next.headline : current.headline}</span>
              </div>
              <div className="px-2 sm:px-6 py-2 rounded-lg shadow text-center max-w-xl bg-yellow-100 font-bold text-gray-700 text-sm xs:text-base md:text-lg" style={{ fontFamily: 'Poppins, Arial, sans-serif', lineHeight: 1.3 }}>
                {displayed.subheadline}
              </div>
              {/* Dots (mobile) */}
              <div className="flex md:hidden justify-center items-center gap-2 w-full mt-8" aria-label="carousel navigation">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.img}
                    onClick={() => {
                      if (idx === currentIndex || transitioning) return;
                      handleManualNav(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`block rounded-full transition-all duration-300 shadow-lg focus:outline-none ${currentIndex === idx ? 'bg-[#D4AF37] w-5 h-3' : 'bg-white/70 w-3 h-3'}`}
                    style={{ height: '12px', margin: '0 3px', boxShadow: '0 2px 8px 0 rgba(10,35,66,0.15)' }}
                    tabIndex={0}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Dots (desktop) */}
        <div className="hidden md:flex flex-col justify-center items-center gap-2 absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30" aria-label="carousel navigation">
          {slides.map((slide, idx) => (
            <button
              key={slide.img}
              onClick={() => {
                if (idx === currentIndex || transitioning) return;
                handleManualNav(idx);
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`block rounded-full transition-all duration-300 shadow-lg focus:outline-none ${currentIndex === idx ? 'bg-[#D4AF37] w-3 h-6' : 'bg-white/70 w-2 h-2'}`}
              style={{ margin: '6px 0', boxShadow: '0 2px 8px 0 rgba(10,35,66,0.15)' }}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
      {/* SearchBox - removed for floating effect, only in page.tsx now */}
      <style jsx global>{`
        @media (max-width: 640px) {
          .hero-headline {
            font-size: 1.1rem !important;
          }
          .hero-subheadline {
            font-size: 0.95rem !important;
          }
        }
      `}</style>
    </section>
  );
}
