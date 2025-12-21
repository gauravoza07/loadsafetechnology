import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#1c1c2c] pt-10 text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ik.imagekit.io/1ffpgbxim/loadsafe/home/Group%20122.svg?updatedAt=1756128121761"
          alt="Footer Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10">
        {/* Main footer */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 pb-6">
            {/* Logo + About */}
            <div className="flex flex-col lg:w-[33%] gap-6">
              <Link href="/">
                <Image
                  src="/Images/Footer-logo.svg"
                  alt="Loadsafe Logo"
                  width={150}
                  height={100}
                />
              </Link>

              <p className="lg:text-lg">
                Loadsafe Technology Pvt. Ltd. – Innovating polymer engineering
                with advanced EPP solutions for a smarter, safer, and sustainable
                India.
              </p>

              {/* Social icons */}
              <div className="flex gap-5 items-center">
                <SocialIcon href="#" icon="instagram" />
                <SocialIcon href="https://wa.me/918866075852" icon="whatsapp" />
                <SocialIcon href="mailto:info@loadsafe.com" icon="mail" />
                <SocialIcon href="tel:8866075852" icon="phone" />
              </div>
            </div>

            {/* Links */}
            <div className="flex justify-between lg:justify-evenly lg:w-[40%] lg:text-lg">
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Links</h3>
                <ul className="flex flex-col gap-3 capitalize">
                  <FooterLink href="/">Home</FooterLink>
                  <FooterLink href="/about-us">About Us</FooterLink>
                  <FooterLink href="/careers">Careers</FooterLink>
                  <FooterLink href="/products">Products</FooterLink>
                  <FooterLink href="/contact-us">Contact Us</FooterLink>
                </ul>
              </div>

              <div className="flex flex-col gap-4 capitalize">
                <h3 className="text-2xl font-bold">Our Products</h3>
                <ul className="flex flex-col gap-3">
                  <FooterLink href="/our-products/expanded-polypropylene">
                    Expanded Polypropylene (EPP)
                  </FooterLink>
                  <FooterLink href="/our-products/expanded-polystyrene">
                    Expanded Polystyrene (EPS)
                  </FooterLink>
                  <FooterLink href="/our-products/rotational-moulding">
                    Rotational Moulding (Rotomould)
                  </FooterLink>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:w-[27%] flex flex-col gap-4 lg:text-lg">
              <h3 className="text-2xl font-bold">Contact</h3>

              <div className="flex flex-col gap-4">
              <div className="flex gap-4">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-building h-9 w-9"
                >
                  <path d="M3 21l18 0"></path>
                  <path d="M9 8l1 0"></path>
                  <path d="M9 12l1 0"></path>
                  <path d="M9 16l1 0"></path>
                  <path d="M14 8l1 0"></path>
                  <path d="M14 12l1 0"></path>
                  <path d="M14 16l1 0"></path>
                  <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"></path>
                </svg>Shop no 15, S Cube Complex, Radhanpur Road, Mehsana – 384002
                </div>

                <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-brand-whatsapp h-7 w-7"
                >
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                  <path
                    d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
                  ></path></svg>
                <Link
                  href="https://wa.me/918866075852"
                  className="hover:text-blue-300 transition-colors"
                >
                  +91 88660 75852
                  </Link>
                  </div>

                  <div className="flex gap-4">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-mail h-7 w-7"
                >
                  <path
                    d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                  ></path>
                  <path d="M3 7l9 6l9 -6"></path></svg>
                <Link
                  href="mailto:info@loadsafe.com"
                  className="hover:text-blue-300 transition-colors"
                >
                  info@loadsafe.com
                </Link>
                </div>
                <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-phone h-7 w-7"
                >
                  <path
                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                  ></path></svg>
                <Link
                  href="tel:8866075852"
                  className="hover:text-blue-300 transition-colors"
                >
                  +91 88660 75852
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-500">
          <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col lg:flex-row gap-2 justify-between items-center text-md">
            <p>© 2025 Loadsafe Technology Pvt. Ltd. All rights reserved.</p>
            <p>
              Developed by{" "}
              <a
                href="https://www.jayraiweb.com/"
                className="uppercase hover:text-blue-300 transition-colors"
                target="_blank"
              >
                Jay Rai Web
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Helpers ---------- */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className="hover:text-blue-300 transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: "instagram" | "whatsapp" | "mail" | "phone";
}) {
  const icons: Record<string, JSX.Element> = {
    instagram: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    whatsapp: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
        <path d="M3 21l1.6-3.8A9 9 0 1 1 21 12a9 9 0 0 1-9 9z" />
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 1-2z" />
      </svg>
    ),
  };

  return (
    <Link href={href} className="group">
      <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
        {icons[icon]}
      </div>
    </Link>
  );
}
