import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/app/products/components/Breadcrumb";
import HeroSection from "@/app/products/components/HeroSection";
import ServicesCard from "@/app/components/ServicesCard";

export default function RotationalMoulding() {
    return (
        <div>
            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Our Products" },
                    { label: "Rotational Moulding (Rotomould)" },
                ]}
            />
            <HeroSection
                subtitle="Introducing our latest & best"
                title="Rotational Moulding (Rotomould)"
                description="We don't just manufacture products—we craft tailored solutions. Leveraging our rotational moulding expertise, we deliver custom designs that meet the unique challenges of the industrial sector, driving efficiency, innovation, and long-term impact."
                imageSrc="/Images/eps_banner_img.svg"
                imageAlt="Rotational Moulding"
            />
            <section className="bg-white pt-10">
                {/* Heading */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
                    <p className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl mx-auto leading-[1.2] font-bold text-black">
                        Agricultural Solutions. Proven Performance
                    </p>
                </div>

                {/* Background Image + Content */}
                <div className="relative overflow-hidden py-10">
                    {/* Background Image */}
                    <Image
                        src="/Images/service-banner.svg"
                        alt="Industrial background"
                        fill
                        priority
                        className="object-cover object-center"
                    />

                    {/* Content Box */}
                    <div className="relative z-10 mx-4 lg:mx-auto max-w-5xl bg-white rounded-lg shadow-lg p-6 lg:p-8 lg:py-16 text-lg lg:text-2xl">
                        <p className="text-black mb-4 font-bold">
                            Durable Tanks with Advanced Design
                        </p>

                        <p className="text-black leading-[1.5] mb-6">
                            Our rotationally moulded agricultural products are leading the way in
                            modern farming. <strong>Designed for unmatched durability and consistent
                                performance</strong>, they provide farmers with reliable solutions that
                            enhance productivity, withstand tough conditions, and support
                            <strong> long-term agricultural operations.</strong>
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {/* Feature 1 */}
                            <div className="flex items-center space-x-4">
                                <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path d="M18.953 13.467a6.572 6.572 0 0 0 -.889 -2.59l-4.89 -7.26a1.5 1.5 0 0 0 -2.346 0l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546" />
                                        <path d="M22 22l-5 -5M17 22l5 -5" />
                                    </svg>
                                </div>
                                <h3 className="text-black lg:text-xl font-medium">
                                    Budget-Friendly
                                </h3>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-center space-x-4">
                                <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path d="M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                                        <path d="M12 4v-1m1 13l2 5h1l2 -5" />
                                    </svg>
                                </div>
                                <h3 className="text-black lg:text-xl font-medium">
                                    UV-Resistant & Durable
                                </h3>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-center space-x-4">
                                <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                                        <path d="M14.5 5.5l4 4" />
                                    </svg>
                                </div>
                                <h3 className="text-black lg:text-xl font-medium">
                                    Complex to Easy Designs
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-10 lg:pt-24 lg:mb-24 mb-10 bg-[#e7f5ff] relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    {/* Heading */}
                    <div className="text-center mb-10 lg:mb-16">
                        <h2 className="text-black text-3xl lg:text-4xl xl:text-5xl max-w-5xl mx-auto leading-[1.2] font-bold text-black mb-6">
                            Shaping Excellence in Earth Moving
                        </h2>
                        <p className="text-black sm:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed">
                            We create high-quality, precision-moulded parts that help earth-moving
                            machinery perform at its best. Our key products include:
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="relative lg:max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                            {/* Left Feature */}
                            <div className="flex flex-col justify-center gap-8">
                                <div className="flex items-start space-x-4 lg:space-x-6">
                                    <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                        >
                                            <path d="M5 20a2 2 0 1 0 4 0" />
                                            <path d="M15 20a2 2 0 1 0 4 0" />
                                            <path d="M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2" />
                                            <path d="M3 6l9 -4l9 4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-black font-semibold text-xl mb-1">
                                            Protective Roof
                                        </h3>
                                        <p className="text-black lg:text-lg font-medium">
                                            Lightweight Design, Powerful Performance
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Center Image */}
                            <div className="flex justify-center">
                                <Image
                                    src="https://ik.imagekit.io/1ffpgbxim/loadsafe/products/Group%20140.svg"
                                    alt="Earth moving components"
                                    width={700}
                                    height={700}
                                    unoptimized
                                    className="lg:-ml-6 lg:w-full w-[70%]"
                                />
                            </div>

                            {/* Right Feature */}
                            <div className="flex flex-col justify-center gap-8">
                                <div className="flex items-start space-x-4 lg:space-x-6">
                                    <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                        >
                                            <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-black font-semibold text-xl mb-1">
                                            Control Panel
                                        </h3>
                                        <p className="text-black lg:text-lg font-medium">
                                            Designed for Maximum Performance and Durability
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Feature */}
                    <div className="flex lg:justify-center mt-6 lg:mt-10">
                        <div className="flex items-start space-x-4 lg:space-x-6">
                            <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                >
                                    <path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7" />
                                    <path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" />
                                    <path d="M3 20h12" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-black font-semibold text-xl mb-1">
                                    Reliable Fuel Storage Tank
                                </h3>
                                <p className="text-black lg:text-lg font-medium hidden lg:block">
                                    Our fuel tanks are designed for <br />
                                    maximum capacity with robust, <br />
                                    leak-proof construction.
                                </p>
                                <p className="text-black lg:text-lg font-medium lg:hidden">
                                    Our fuel tanks are designed for maximum capacity with robust,
                                    leak-proof construction.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Curved Bottom Shape */}
                <div className="w-full h-[15vh] lg:h-[20vh] bg-white relative">
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-[#e7f5ff]"
                        style={{ clipPath: "ellipse(50% 100% at 50% 0%)" }}
                    />
                </div>
            </section>
            <section className="pb-10 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl mx-auto leading-[1.2] font-bold text-black mb-6">
              Water Storage Tanks
            </h2>
            <p className="text-black sm:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed">
              Renowned for their exceptional durability, we offer high-quality
              water storage tanks designed for long-term use. Built to withstand
              the test of time and daily wear, our tanks provide reliable water
              storage solutions for homes, industries, and commercial
              applications alike.
            </p>
          </div>

          {/* Image */}
          <div className="mb-10 lg:mb-16">
            <div className="lg:w-[75%] mx-auto">
              <Image
                src="https://ik.imagekit.io/1ffpgbxim/loadsafe/products/Group%20125%20(1).svg"
                alt="Water Storage Tanks"
                width={1000}
                height={1000}
                unoptimized
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-12">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-[#0061a8] rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 lg:w-7 lg:h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                  <path d="M14.5 5.5l4 4" />
                </svg>
              </div>
              <div>
                <h3 className="text-black text-lg lg:text-xl font-bold mb-1">
                  Personalized Choices
                </h3>
                <p className="text-black lg:text-lg leading-relaxed">
                  We provide custom water storage tank solutions tailored to
                  your needs.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-[#0061a8] rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 lg:w-7 lg:h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M3 12h1m16 0h1m-9 0a4 4 0 1 1 8 0" />
                  <path d="M12 4v-1" />
                </svg>
              </div>
              <div>
                <h3 className="text-black text-lg lg:text-xl font-bold mb-1">
                  UV-Resistant Build
                </h3>
                <p className="text-black lg:text-lg leading-relaxed">
                  We provide UV-stabilised water storage tanks designed to
                  withstand sunlight.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-[#0061a8] rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 lg:w-7 lg:h-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M4 21c1 -4 2 -8 2 -12h6c0 4 1 8 2 12" />
                  <path d="M3 21h18" />
                </svg>
              </div>
              <div>
                <h3 className="text-black text-lg lg:text-xl font-bold mb-1">
                  Pre-Fitted Nozzles
                </h3>
                <p className="text-black lg:text-lg leading-relaxed">
                  We provide water storage tanks with pre-fitted nozzles for
                  easy installation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ServicesCard />
    </div>
    );
}
