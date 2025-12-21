"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full z-50 flex justify-center">
      <nav className="bg-black/20 backdrop-blur-md w-[92%] md:w-[90%] lg:w-auto absolute rounded-lg mt-4 md:mt-5 lg:mt-6">
        <div className="px-4 sm:px-5 lg:px-5">
          <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-center gap-3"
            >
              <Image
                alt="Loadsafe Technology Logo"
                width={40}
                height={40}
                className="w-9 h-9 md:w-10 md:h-10 rounded-sm"
                src="/Images/loadsafe-logo.jpg"
                priority
              />
              <h1 className="text-white text-base md:text-lg lg:text-xl font-semibold">
                Loadsafe Technology
              </h1>
            </Link>

            {/* Desktop/Tablet menu (md and up) */}
            <div className="hidden md:block">
              <div className="mx-6 md:mx-8 lg:mx-10 flex items-center md:space-x-6 lg:space-x-8">
                <Link
                  href="/"
                  className="text-white hover:text-gray-200 px-2 md:px-3 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="text-white hover:text-gray-200 px-2 md:px-3 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link
                  href="/products"
                  className="text-white hover:text-gray-200 px-2 md:px-3 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200"
                >
                  Our Products
                </Link>
                <Link
                  href="/careers"
                  className="text-white hover:text-gray-200 px-2 md:px-3 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200"
                >
                  Careers
                </Link>
                <Link
                  href="/contact-us"
                  className="text-white hover:text-gray-200 px-2 md:px-3 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact-us"
                className="bg-[#D9ECFF] text-[#1E5AA6] font-semibold py-2.5 md:py-3 px-6 md:px-8 rounded-lg text-sm md:text-lg shadow-sm ring-1 ring-white/50 hover:bg-[#E7F3FF] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 cursor-pointer"
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-white hover:text-gray-200 p-2 inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {open && (
          <div className="md:hidden px-4 pb-4">
            <div className="mt-2 overflow-hidden rounded-md border border-white/10 bg-black/40 backdrop-blur-md">
              <div className="flex flex-col divide-y divide-white/10">
                <Link href="/" className="text-white px-4 py-3 text-base hover:bg-white/5" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="/about-us" className="text-white px-4 py-3 text-base hover:bg-white/5" onClick={() => setOpen(false)}>
                  About Us
                </Link>
                <Link href="/products" className="text-white px-4 py-3 text-base hover:bg-white/5" onClick={() => setOpen(false)}>
                  Our Products
                </Link>
                <Link href="/careers" className="text-white px-4 py-3 text-base hover:bg-white/5" onClick={() => setOpen(false)}>
                  Careers
                </Link>
                <Link href="/contact-us" className="text-white px-4 py-3 text-base hover:bg-white/5" onClick={() => setOpen(false)}>
                  Contact Us
                </Link>
                <div className="px-4 py-3">
                  <Link
                    href="/contact-us"
                    className="w-full inline-flex justify-center bg-lightBlue text-darkBlue font-semibold py-2.5 px-4 rounded-md text-base transition-colors duration-200 hover:bg-blue-100"
                    onClick={() => setOpen(false)}
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
