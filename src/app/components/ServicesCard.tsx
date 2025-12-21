"use client";

import { useState } from "react";
import Image from "next/image";

const industries = [
  {
    title: "Automotive Industry",
    image:
      "/Images/service-1.jpg",
  },
  {
    title: "Drone & Aerospace Industry",
    image:
      "/Images/service-2.jpg",
  },
  {
    title: "Agriculture Industry",
    image:
      "/Images/service-3.jpg",
  },
  {
    title: "Defense Industry",
    image:
      "/Images/service-4.jpg",
  },
  {
    title: "Packaging Industry",
    image:
      "/Images/service-5.jpg",
  },
  {
    title: "Construction Industry",
    image:
      "/Images/service-6.jpg",
  },
  {
    title: "Industrial Manufacturing",
    image:
      "/Images/service-7.jpg",
  },
  {
    title: "Welding & Fabrication",
    image:
      "/Images/service-8.jpg",
  },
  {
    title: "Industrial Manufacturing",
    image:
      "/Images/service-9.jpg",
  },
];

export default function ServicesCard() {
  const [active, setActive] = useState<number | null>(1);

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 max-w-5xl">
          <h2 className="text-xl text-black mb-2">Industries We Serve</h2>
          <p className="text-4xl font-bold leading-tight text-black">
            Delivering Tailored Solutions Across a Diverse Range of Sectors.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex h-[500px] gap-3">
          {industries.map((item, index) => (

            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`
                relative transition-all duration-700 ease-in-out h-full lg:h-[500px] rounded-xl overflow-hidden shadow-lg
                ${active === index ? "flex-[5]" : "flex-[1]"}
              `}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority={index === 1}
              />

              {/* Title */}
              <div className={`
                    absolute inset-0 flex items-end
                    transition-all duration-500 ease-in-out
                    ${active === index ? "p-6" : "justify-center pb-6"}
                  `}>
                <h3
                  className={`
                    text-white font-semibold whitespace-nowrap
                    transition-all duration-500 ease-in-out
                    ${active === index ? "text-2xl" : "text-sm"}
                  `}
                >
                  {item.title}
                </h3>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
