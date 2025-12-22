"use client";

import { useState } from "react";
import Image from "next/image";

const industries = [
  { title: "Automotive Industry", image: "/Images/service-1.jpg" },
  { title: "Drone & Aerospace Industry", image: "/Images/service-2.jpg" },
  { title: "Agriculture Industry", image: "/Images/service-3.jpg" },
  { title: "Defense Industry", image: "/Images/service-4.jpg" },
  { title: "Packaging Industry", image: "/Images/service-5.jpg" },
  { title: "Construction Industry", image: "/Images/service-6.jpg" },
  { title: "Industrial Manufacturing", image: "/Images/service-7.jpg" },
  { title: "Welding & Fabrication", image: "/Images/service-8.jpg" },
  { title: "Industrial Manufacturing", image: "/Images/service-9.jpg" },
];

export default function ServicesCard() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-10 max-w-5xl">
          <h2 className="text-lg text-black mb-2">Industries We Serve</h2>
          <p className="text-3xl lg:text-4xl font-bold leading-tight text-black">
            Delivering Tailored Solutions Across a Diverse Range of Sectors.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row lg:h-[500px] gap-3">
          {industries.map((item, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : index)}
                className={`
                  relative overflow-hidden rounded-xl shadow-lg cursor-pointer
                  transition-all duration-700 ease-in-out
                  h-[220px] lg:h-full
                  ${isActive ? "lg:flex-[5]" : "lg:flex-[1]"}
                `}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                {/* Title */}
                <div
                  className={`
                    absolute inset-0 flex items-end
                    transition-all duration-500
                    ${isActive ? "p-6" : "p-4 justify-center lg:items-end"}
                  `}
                >
                  <h3
                    className={`
                      text-white font-semibold whitespace-nowrap
                      transition-all duration-500
                      ${isActive ? "text-xl lg:text-2xl" : "text-base"}
                    `}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
