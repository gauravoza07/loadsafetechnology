import React from "react";

export default function Home() {
  return (
    <div className="lg:min-h-[110vh] min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <img
        alt="LoadSafe Hero Background"
        decoding="async"
        data-nimg="fill"
        className="object-cover object-center"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          color: "transparent",
        }}
        sizes="100vw"
        srcSet="https://images.pexels.com/photos/3345876/pexels-photo-3345876.jpeg"
        src="https://images.pexels.com/photos/3345876/pexels-photo-3345876.jpeg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 bg-opacity-40"></div>

      {/* Content */}
      <div className="relative container mx-auto z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-[1.3]">
          Innovative Packaging and Polymer Solutions for a Smarter, Safer Future.
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Advanced polymer solutions designed for protection, performance, and
          sustainability.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mt-10">
          <a href="/contact-us">
            <button className="bg-lightBlue text-darkBlue font-semibold py-3 px-8 rounded-md text-lg transition-colors duration-300 hover:bg-blue-100 w-full lg:w-auto text-center justify-center cursor-pointer flex items-center gap-2 group">
              Get in touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right w-6 h-6 -rotate-45 group-hover:rotate-0 transition-all duration-300"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </a>

          <a href="/our-products/expanded-polystyrene">
            <button className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-md text-white font-semibold cursor-pointer text-lg transition-all w-full lg:w-auto text-center justify-center duration-300 hover:bg-white/20 hover:border-white/30">
              Explore Our Products
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
