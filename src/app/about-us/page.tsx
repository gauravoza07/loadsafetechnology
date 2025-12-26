import Image from "next/image";
import Link from "next/link";
import Reviews from "../components/Reviews";
import ContactForm from "../components/ContactForm";

export default function AboutUsPage() {
  return (
    <main className="bg-white">

      {/* Breadcrumb */}
      <div className="py-6 ">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center space-x-2 text-base lg:text-lg">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Founder Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-9 lg:mb-14">
            <h2 className="text-lg lg:text-xl xl:text-2xl text-black">
              About Us
            </h2>
            <p className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mt-2">
              Words from the Founder
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <Image
                src="https://ik.imagekit.io/1ffpgbxim/loadsafe/home/Group%20144%20(1).svg"
                alt="Founder"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="text-black space-y-6 text-base lg:text-lg xl:text-xl leading-relaxed">
              <p>
                Our story is rooted in <strong>purpose</strong>,{" "}
                <strong>innovation</strong>, and the unwavering belief that{" "}
                <strong>Indian manufacturing</strong> can lead the world.
              </p>
              <p>
                It began with my parents’ decision to leave established careers
                to build something meaningful for our country.
              </p>
              <p>
                From humble beginnings in 1965, we evolved into Loadsafe
                Technology Pvt. Ltd.
              </p>
              <p>
                Today, we continue pushing boundaries while staying true to
                quality and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-10 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 mb-10">
          <h2 className="text-lg lg:text-xl xl:text-2xl text-black">
            Company Overview
          </h2>
          <p className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mt-2">
            Your Trusted Partner in Engineering Innovation
          </p>
        </div>

        <div className="relative py-16 overflow-hidden">
          <Image
            src="https://ik.imagekit.io/1ffpgbxim/Rectangle%202410%20(1).svg"
            alt="Industrial Background"
            fill
            className="object-cover"
          />

          <div className="text-black relative z-10 max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 lg:p-10 text-lg lg:text-2xl">
            <p className="mb-6">
              We go beyond manufacturing to drive{" "}
              <strong>innovation in polymer engineering.</strong>
            </p>
            <p>
              With 60 years of expertise, 1,000+ professionals, and{" "}
              <strong>1,250+ customers</strong>, we deliver scalable and
              sustainable solutions across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Sections */}
      <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 lg:mb-16 text-center max-w-5xl mx-auto space-y-4">
          <h2 className="text-lg text-black lg:text-xl xl:text-2xl text-black mr-auto leading-relaxed">
            Shaping the Future of Polymers
          </h2>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
            Engineering the Impossible into Reality
          </h2>
          <p className="text-base lg:text-lg xl:text-xl text-black leading-relaxed">
            Since our inception, we’ve challenged conventions and pioneered
            next-generation polymer engineering solutions across industries.
          </p>
        </div>

        {/* Card 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center border border-gray-300 rounded-xl p-4 lg:p-6 mb-10">
          <div className="space-y-6 lg:space-y-8">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
              India’s Pioneers in EPP-Based Engineering
            </h3>

            <p className="text-base lg:text-lg xl:text-xl text-black leading-relaxed">
              Expanded Polypropylene (EPP) is a revolutionary material offering
              high impact resistance, lightweight flexibility, and durability.
              Our solutions serve Automotive, Aerospace, Drone, and Cold Chain sectors.
            </p>

            <Link
              href="/our-products/expanded-polypropylene"
              className="inline-flex items-center gap-2 bg-[#D9ECFF] text-[#1E5AA6] font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 hover:bg-[#E7F3FF] shadow-sm ring-1 ring-white/50 group"
            >
              Explore our EPP Solution
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
                className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-all duration-300"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-lg h-[200px] lg:h-full">
            <img
              alt="EPP Engineering Solutions"
              loading="lazy"
              className="w-full h-full object-contain lg:object-cover border"
              src="https://ik.imagekit.io/1ffpgbxim/loadsafe/home/epp/WhatsApp%20Image%202025-08-30%20at%2012.13.22%20PM%20(1).jpeg"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center border border-gray-300 rounded-xl p-4 lg:p-6 mb-10">
          <div className="relative overflow-hidden rounded-lg h-[200px] lg:h-full order-1">
            <img
              alt="EPS Packaging Solutions"
              loading="lazy"
              className="w-full h-full object-contain lg:object-cover"
              src="https://ik.imagekit.io/1ffpgbxim/loadsafe/home/eps/WhatsApp%20Image%202025-08-30%20at%2012.17.18%20PM%20(2).jpeg"
            />
          </div>

          <div className="space-y-6 lg:space-y-8 order-2">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
              Revolutionizing Packaging with EPS Solutions
            </h3>

            <p className="text-base lg:text-lg xl:text-xl text-black leading-relaxed">
              Since 1971, we’ve localized EPS foam molded packaging solutions
              that protect pharmaceutical, FMCG, marine, and consumer products
              with efficiency and sustainability.
            </p>

            <Link
              href="/our-products/expanded-polystyrene"
              className="inline-flex items-center gap-2 bg-[#D9ECFF] text-[#1E5AA6] font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 hover:bg-[#E7F3FF] shadow-sm ring-1 ring-white/50 group"
            >
              Explore our EPS Solution
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
                className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-all duration-300"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center border border-gray-300 rounded-xl p-4 lg:p-6">
          <div className="space-y-6 lg:space-y-8">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
              Global Expertise in Rotomoulded Products
            </h3>

            <p className="text-base lg:text-lg xl:text-xl text-black leading-relaxed">
              With over 20 years of global experience, we convert traditional
              materials into custom-engineered rotomoulded polymer components
              offering durability and cost efficiency.
            </p>

            <Link
              href="/our-products/rotational-moulding"
              className="inline-flex items-center gap-2 bg-[#D9ECFF] text-[#1E5AA6] font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 hover:bg-[#E7F3FF] shadow-sm ring-1 ring-white/50 group"
            >
              Explore our Rotomould Solution
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
                className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-all duration-300"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-lg h-[200px] lg:h-full">
            <img
              alt="Rotomoulded Products"
              loading="lazy"
              className="w-full h-full object-contain lg:object-cover"
              src="https://ik.imagekit.io/1ffpgbxim/loadsafe/home/roto/WhatsApp%20Image%202025-08-30%20at%2012.28.49%20PM%20(1).jpeg"
            />
          </div>
        </div>

      </div>
    </section>

    {/* Company Overview */}
    <section className="py-10 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 mb-10">
          <h2 className="text-lg lg:text-xl xl:text-2xl text-black">
            Company Overview
          </h2>
          <p className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mt-2">
          Built on Values. Powered by Vision
          </p>
        </div>

        <div className="relative py-16 overflow-hidden">
          <Image
            src="https://ik.imagekit.io/1ffpgbxim/Rectangle%202410%20(1).svg"
            alt="Industrial Background"
            fill
            className="object-cover"
          />

          <div className="text-black relative z-10 max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 lg:p-10 text-lg lg:text-2xl">
            <p className="mb-6">
            At Loadsafe, we believe the future is flexible, modular, and sustainable—and we're here to build it. We are <strong>driven by purpose, led by innovation</strong>, and united by our mission to deliver reliable, eco-conscious, and technologically advanced polymer solutions. From automobiles to sanitation, and drones to water treatment— we serve the most critical sectors with precision and pride.
            </p>
          </div>
        </div>
      </section>


      {/* Trusted Clients */}
        <div className="justify-center align-items-center container mx-auto px-4 sm:px-6 pb-20 lg:px-8 text-center">
          <h2 className="text-lg text-center lg:mb-12 mb-6 lg:text-xl xl:text-2xl text-center font-semibold text-black mr-auto leading-relaxed text-black">
            These organizations trust Loadsafe
          </h2>

          <div className="flex flex-row flex-wrap lg:flex-nowrap lg:gap-8 gap-4 justify-center">
            {[
              "Group 108 (1).svg",
              "Group 113.svg",
              "Group 114.svg",
              "Group 116 (1).svg",
            ].map((logo, i) => (
              <div className="col w-full md:w-1/4 mx-auto">
                <Image
                  key={i}
                  src={`https://ik.imagekit.io/1ffpgbxim/loadsafe/about us/${logo}`}
                  alt="Client Logo"
                  width={160}
                  height={80}
                  className="mx-auto block w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      {/* Reviews + Contact */}
      <Reviews />
      <ContactForm />

    </main>
  );
}
