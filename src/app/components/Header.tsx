"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="relative w-full z-50 flex justify-center">
      <nav className={isHome ? "bg-black/20 backdrop-blur-md w-[92%] md:w-[90%] lg:w-auto absolute rounded-lg mt-4 md:mt-5 lg:mt-6" : "w-[92%] md:w-[90%] lg:w-auto rounded-lg mt-4 md:mt-5 lg:mt-6 bg-white border border-gray-200 shadow-sm"}>
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
              <h1 className={(isHome ? "text-white" : "text-black") + " text-base md:text-lg lg:text-xl font-semibold"}>
                Loadsafe Technology
              </h1>
            </Link>

            {/* Desktop/Tablet menu (md and up) */}
            <div className="hidden md:block">
              <div className="mx-6 md:mx-8 lg:mx-10 flex items-center md:space-x-6 lg:space-x-8">
                <Link
                  href="/"
                  className={`${isHome ? "text-white hover:text-gray-200" : "text-black hover:text-gray-700"} px-2 md:px-3 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200`}
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className={`${isHome ? "text-white hover:text-gray-200" : "text-black hover:text-gray-700"} px-2 md:px-3 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200`}
                >
                  About Us
                </Link>
                <div className="relative group">
                  <button
                    className={`${isHome ? "text-white hover:text-gray-200" : "text-black hover:text-gray-700"}
      px-2 md:px-3 py-2 text-sm md:text-base lg:text-lg font-medium
      inline-flex items-center gap-1`}
                  >
                    Our Products
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Desktop Dropdown */}
                  <div
                    className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-gray-200 bg-white shadow-lg
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-200 z-50"
                  >
                    <Link href="/products/expanded-polypropylene" className="text-black block px-4 py-2 text-sm hover:bg-gray-50">
                      Expanded Polypropylene (EPP)
                    </Link>
                    <Link href="/products/expanded-polystyrene" className="text-black block px-4 py-2 text-sm hover:bg-gray-50">
                      Expanded Polystyrene (EPS)
                    </Link>
                    <Link href="/products/rotational-moulding" className="text-black block px-4 py-2 text-sm hover:bg-gray-50">
                      Rotational Moulding (Rotomould)
                    </Link>
                  </div>
                </div>
                <Link
                  href="/careers"
                  className={`${isHome ? "text-white hover:text-gray-200" : "text-black hover:text-gray-700"} px-2 md:px-3 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200`}
                >
                  Careers
                </Link>
                <Link
                  href="/contact-us"
                  className={`${isHome ? "text-white hover:text-gray-200" : "text-black hover:text-gray-700"} px-2 md:px-3 py-2 text-sm md:text-base lg:text-lg font-medium transition-colors duration-200`}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Desktop/Tablet CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact-us"
                className={`bg-[#D9ECFF] text-[#1E5AA6] font-semibold py-2.5 md:py-3 px-6 md:px-8 rounded-lg text-sm md:text-lg shadow-sm ring-1 ${isHome ? "ring-white/50 focus-visible:ring-white/70" : "ring-[#CFE6FF] focus-visible:ring-[#CFE6FF]"} hover:bg-[#E7F3FF] transition-colors duration-200 cursor-pointer`}
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <button
                type="button"
                className={`${isHome ? "text-white hover:text-gray-200 focus-visible:ring-white/60" : "text-black hover:text-gray-700 focus-visible:ring-gray-300"} p-2 inline-flex items-center justify-center focus:outline-none focus-visible:ring-2 rounded-md`}
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
            <div className={`mt-2 overflow-hidden rounded-md border ${isHome ? "border-white/10 bg-black/40 backdrop-blur-md" : "border-gray-200 bg-white"}`}>
              <div className={`flex flex-col divide-y ${isHome ? "divide-white/10" : "divide-gray-200"}`}>
                <Link href="/" className={`${isHome ? "text-white hover:bg-white/5" : "text-black hover:bg-gray-50"} px-4 py-3 text-base`} onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="/about-us" className={`${isHome ? "text-white hover:bg-white/5" : "text-black hover:bg-gray-50"} px-4 py-3 text-base`} onClick={() => setOpen(false)}>
                  About Us
                </Link>
                <button
                  onClick={() => setProductOpen(v => !v)}
                  className={`${isHome ? "text-white hover:bg-white/5" : "text-black hover:bg-gray-50"}
    px-4 py-3 text-base flex items-center justify-between`}
                >
                  Our Products
                  <svg
                    className={`w-4 h-4 transition-transform ${productOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {productOpen && (
                  <div className="pl-6 flex flex-col bg-gray-50">
                    <Link href="/products/expanded-polypropylene" className="text-black py-2 text-sm" onClick={() => setOpen(false)}>
                      Expanded Polypropylene (EPP)
                    </Link>
                    <Link href="/products/expanded-polystyrene" className="text-black py-2 text-sm" onClick={() => setOpen(false)}>
                      Expanded Polystyrene (EPS)
                    </Link>
                    <Link href="/products/rotational-moulding" className="text-black py-2 text-sm" onClick={() => setOpen(false)}>
                      Rotational Moulding (Rotomould)
                    </Link>
                  </div>
                )}

                <Link href="/careers" className={`${isHome ? "text-white hover:bg-white/5" : "text-black hover:bg-gray-50"} px-4 py-3 text-base`} onClick={() => setOpen(false)}>
                  Careers
                </Link>
                <Link href="/contact-us" className={`${isHome ? "text-white hover:bg-white/5" : "text-black hover:bg-gray-50"} px-4 py-3 text-base`} onClick={() => setOpen(false)}>
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
