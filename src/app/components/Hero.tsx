import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] lg:min-h-[110vh] flex items-center justify-center">
      {/* Background image */}
      <Image
        src="/Images/hero-banner-img.jpg"
        alt="Loadsafe Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.2] max-w-5xl mx-auto">
          Innovative Packaging and Polymer Solutions for a Smarter, Safer Future.
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
          Advanced polymer solutions designed for protection, performance, and sustainability.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Link href="/contact-us" className="btn btn-primary btn-lg">
        Get in touch
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="btn-arrow"
            aria-hidden="true"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
        </Link>
        <Link href="/products" className="btn btn-glass btn-lg">
        Explore Our Products
        </Link>
        </div>
      </div>
    </section>
  );
}