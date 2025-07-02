"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const PALETTE = {
  navy: "#0A2342",
  sand: "#F4EBD0",
  seafoam: "#88D9E6",
  white: "#FAFAFA",
  gold: "#D4AF37",
};

const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12"
      style={{ background: PALETTE.navy, borderRadius: '1.5rem', boxShadow: `0 4px 32px 0 ${PALETTE.navy}33` }}>
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={400}
                    height={400}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                    sizes="(max-width: 600px) 100vw, 400px"
                    quality={60}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold" style={{ color: PALETTE.gold }}>
              {testimonials[active].name}
            </h3>
            <p className="text-sm" style={{ color: PALETTE.seafoam }}>
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg" style={{ color: PALETTE.sand }}>
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full shadow"
              style={{ background: PALETTE.gold }}
            >
              <IconArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12" style={{ color: PALETTE.navy }} />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full shadow"
              style={{ background: PALETTE.gold }}
            >
              <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12" style={{ color: PALETTE.navy }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
