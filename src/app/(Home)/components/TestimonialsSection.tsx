"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedTestimonials = dynamic(() => import("@/components/ui/animated-testimonials"), { ssr: false });

const testimonials = [
  {
    quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Rustam Dhital",
    designation: "Chairperson",
    src: "/chairperson.jpeg",
    alt: "Portrait of Rustam Dhital, Chairperson"
  },
  {
    quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Rupesh Dhital",
    designation: "Director",
    src: "/director.jpg",
    alt: "Portrait of Rupesh Dhital, Director"
  },
  {
    quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Aayush Panta",
    designation: "Manager",
    src: "/manager.jpg",
    alt: "Portrait of Aayush Panta, Manager"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">What Our Travelers Say</h2>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  );
} 