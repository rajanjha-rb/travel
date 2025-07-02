"use client";
import dynamic from 'next/dynamic';
const AnimatedTestimonials = dynamic(() => import('@/components/ui/animated-testimonials'), { ssr: false });

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Rustam Dhital",
    designation: "Chairperson",
    src: "/chairperson.jpeg",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Rupesh Dhital",
    designation: "Director",
    src: "/director.jpg",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Aayush Panta",
    designation: "Manager",
    src: "/manager.jpg",
  },
];

export default function TeamSection() {
  return (
    <section>
      <h2 style={{ color: '#D4AF37' }} className="text-3xl md:text-4xl font-bold text-center mb-10">Our Team</h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
} 