import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="py-10 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
              Where Engineering Excellence Drives Innovation
            </h2>

            <div className="space-y-6">
              <p className="text-base lg:text-lg xl:text-xl text-black leading-relaxed">
                At Loadsafe Technology Pvt. Ltd., innovation is our foundation. We&apos;re redefining
                polymer engineering and packaging with reliable alternatives and advanced EPP solutions
                for next-gen automobiles, drones, and electronics.
              </p>
              <p className="text-base lg:text-lg xl:text-xl text-black leading-relaxed">
                With expert design and world-class manufacturing, we create precision components that
                meet the highest industry standards.
              </p>
            </div>

            <Link
              href="/about-us"
              className="btn inline-flex items-center gap-2 bg-[#D9ECFF] text-[#1E5AA6] font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 hover:bg-[#E7F3FF] shadow-sm ring-1 ring-white/50"
            >
              Know more about us
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
                className="btn-arrow w-6 h-6 -rotate-45 transition-all duration-300"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="relative overflow-hidden rounded-lg">
              <img
                alt="Industrial machinery with blue motor and metallic pipes"
                loading="lazy"
                width="600"
                height="300"
                decoding="async"
                className="w-full object-cover"
                style={{ color: "transparent" }}
                src="https://ik.imagekit.io/1ffpgbxim/loadsafe/home/Group 142.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}