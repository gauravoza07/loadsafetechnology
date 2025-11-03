"use client";

import { useState } from "react";

// Minimal internal UI primitives to avoid undefined component errors
type ChildrenProps = { children: React.ReactNode };

function Navbar({ children }: ChildrenProps) {
  return <nav className="bg-black/20 backdrop-blur-md w-[90%] lg:mx-0 lg:w-auto absolute rounded-lg mt-4 lg:mt-6 z-50">{children}</nav>;
}

function NavBody({ children }: ChildrenProps) {
  return (
    <div className="px-4 sm:px-5 lg:px-5">
      <div className="flex items-center justify-between h-16 lg:h-20">
        {children}
      </div>
    </div>
  );
}

function NavbarLogo() {
  return (
    <a href="/" className="flex-shrink-0 flex items-center gap-3">
      <img
        alt="Loadsafe Technology Logo"
        loading="lazy"
        width={100}
        height={100}
        decoding="async"
        className="w-10 h-10 rounded-sm"
        src="https://ik.imagekit.io/1ffpgbxim/loadsafe/loadsafe-logo.jpeg?updatedAt=1755933705599"
      />
      <h1 className="text-white text-lg lg:text-xl font-semibold">Loadsafe Technology</h1>
    </a>
  );
}

type NavItem = { name: string; link: string };
function NavItems({ items }: { items: NavItem[] }) {
  return (
    <div className="mx-10 hidden md:flex items-baseline space-x-8">
      {items.map((item, idx) => (
        <a key={`nav-link-${idx}`} href={item.link} className="text-white hover:text-gray-200 px-3 py-2 text-base lg:text-lg font-medium transition-colors duration-300">
          {item.name}
        </a>
      ))}
    </div>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};
function NavbarButton({ children, variant = "primary", className = "", onClick }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md text-lg font-semibold transition-colors";
  const variants: Record<string, string> = {
    primary: "bg-lightBlue text-darkBlue py-3 px-8 hover:bg-blue-100",
    secondary: "text-white px-3 py-2 hover:text-gray-200",
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

function MobileNav({ children }: ChildrenProps) {
  return <div className="md:hidden">{children}</div>;
}

function MobileNavHeader({ children }: ChildrenProps) {
  return <div className="flex h-16 items-center justify-between px-4">{children}</div>;
}

function MobileNavToggle({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button aria-label="Toggle menu" onClick={onClick} className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
      <span className="text-xl">{isOpen ? "×" : "≡"}</span>
    </button>
  );
}

function MobileNavMenu({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className="space-y-4 border-t border-zinc-200 px-4 pb-4 pt-2 dark:border-zinc-800">
      {children}
    </div>
  );
}

export default function Header() {
    const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Careers", link: "/careers" },
    { name: "Contact Us", link: "/contact-us" },
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
   <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="hidden md:block">
            <div className="mx-10 flex items-baseline space-x-8">
              <a className="text-white hover:text-gray-200 px-3 py-2 text-base lg:text-lg font-medium transition-colors duration-300" href="/">Home</a>
              <a className="text-white hover:text-gray-200 px-3 py-2 text-base lg:text-lg font-medium transition-colors duration-300" href="/about-us">About Us</a>
              <div className="relative">
                <button id="dropdownNavbarLink" className="text-white hover:text-gray-200 px-3 py-2 text-base lg:text-lg font-medium transition-colors duration-300 flex items-center">
                  Our Products
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <div id="dropdownNavbar" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-300" aria-labelledby="dropdownNavbarLink">
                      <li>
                        <a href="/our-products/expanded-polystyrene" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Expanded Polystyrene</a>
                      </li>
                      <li>
                        <a href="/our-products/expanded-polystyrene" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Expanded Polystyrene</a>
                      </li>
                    </ul>
                  </div>
                </button>
              </div>
              <a className="text-white hover:text-gray-200 px-3 py-2 text-base lg:text-lg font-medium transition-colors duration-300" href="/careers">Careers</a>
              <a className="text-white hover:text-gray-200 px-3 py-2 text-base lg:text-lg font-medium transition-colors duration-300" href="/contact-us">Contact Us</a>
            </div>
          </div>
          <div className="hidden md:block">
            <a href="/contact-us">
              <NavbarButton variant="primary" className="rounded-md">Get in touch</NavbarButton>
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-white hover:text-gray-200 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90">Home</a>
            <a href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90">About Us</a>
            <div className="pt-2">
              <div className="mb-1 text-xs uppercase tracking-wider text-white/50">Our Products</div>
              <a href="#prod-1" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90">Product One</a>
              <a href="#prod-2" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90">Product Two</a>
              <a href="#prod-3" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90">Product Three</a>
            </div>
            <a href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90">Careers</a>
            <a href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="block text-white/90">Contact Us</a>
            <div className="flex w-full flex-col gap-4 bg-lightBlue text-darkBlue font-semibold py-3 px-8 rounded-md text-lg transition-colors duration-300 hover:bg-blue-100 cursor-pointer">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get in touch
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
 
      {/* Navbar */}
    </div>
  );
}

