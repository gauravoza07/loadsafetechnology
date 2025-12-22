"use client";

import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Reviews from "../components/Reviews";

export default function AboutUs() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="py-6 mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center space-x-2 text-black lg:text-lg">
            <a
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Founder Section */}
      <section className="bg-white py-10 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 lg:mb-14">
            <h2 className="text-lg lg:text-xl xl:text-2xl text-black">
              About Us
            </h2>
            <p className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl font-bold text-black leading-tight mt-2">
              Words from the Founder
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <Image
                src="/Images/About Bannner image.svg"
                alt="Loadsafe Technology Founder"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="space-y-6 text-black lg:text-lg xl:text-xl leading-relaxed">
              <p>
                Our story is rooted in <strong>purpose</strong>,{" "}
                <strong>innovation</strong>, and the unwavering belief that{" "}
                <strong>Indian manufacturing</strong> can lead the world in
                engineering excellence.
              </p>
              <p>
                It began with my parents&apos; decision to leave their established
                careers in Mumbai to build something meaningful for our country.
              </p>
              <p>
                From our humble beginnings in 1965, we evolved into Loadsafe
                Technology Pvt. Ltd., carrying forward a legacy of excellence.
              </p>
              <p>
                Today, we continue to push boundaries while staying true to
                quality, innovation, and commitment to India&apos;s manufacturing
                future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 lg:mb-12">
          <h2 className="text-lg lg:text-xl xl:text-2xl text-black">
            Company Overview
          </h2>
          <p className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl font-bold text-black leading-tight mt-2">
            Built on Values. Powered by Vision
          </p>
        </div>

        <div className="relative py-14 lg:py-24 overflow-hidden">
          <Image
            src="https://ik.imagekit.io/1ffpgbxim/Rectangle%202410%20(1).svg"
            alt="Industrial Background"
            fill
            className="object-cover"
          />

          <div className="relative z-10 max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 lg:p-10 text-lg lg:text-2xl">
            <p className="leading-relaxed">
              At Loadsafe, we believe the future is flexible, modular, and
              sustainable. We are{" "}
              <strong>driven by purpose, led by innovation,</strong> delivering
              reliable and eco-conscious polymer solutions across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted Organizations */}
      <section className="py-10 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg lg:text-xl xl:text-2xl text-center font-semibold text-black mb-8 lg:mb-12">
            These organizations count on Loadsafe for:
          </h2>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {[
              "Group 108 (1).svg",
              "Group 113.svg",
              "Group 114.svg",
              "Group 116 (1).svg",
            ].map((logo, index) => (
              <div
                key={index}
                className="w-[45%] sm:w-[30%] lg:w-[180px]"
              >
                <Image
                  src={`https://ik.imagekit.io/1ffpgbxim/loadsafe/about us/${logo}`}
                  alt={`Organisation ${index + 1}`}
                  width={200}
                  height={100}
                  className="object-contain w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <ContactForm />
    </>
  );
}
