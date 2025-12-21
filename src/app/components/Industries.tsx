import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-10 lg:py-24 bg-white">
      {/* Heading */}
      <div className="mb-10 lg:mb-16 space-y-3 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg lg:text-xl xl:text-2xl text-black leading-relaxed">
          Our Services
        </h2>
        <p className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl leading-[1.2] font-bold text-black mb-6">
          Comprehensive Solutions Designed to <br />
          Meet Every Industry Need.
        </p>
      </div>

      {/* Background Section */}
      <div className="relative overflow-hidden py-10">
        {/* Background Image */}
        <Image
          src="/Images/service-banner.svg"
          alt="Industrial background"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="relative container mx-auto z-10 px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 01 */}
            <div className="bg-white relative rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-5 left-5">
                <div className="bg-darkBlue rounded-full border-[10px] border-white p-2">
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
                    className="text-white h-7 w-7"
                  >
                    <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                    <path d="M14.5 5.5l4 4" />
                    <path d="M12 8l-5 -5l-4 4l5 5" />
                    <path d="M7 8l-1.5 1.5" />
                    <path d="M16 12l5 5l-4 4l-5 -5" />
                    <path d="M16 17l-1.5 1.5" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl mt-6 lg:text-2xl font-bold text-black mb-4">
                01. End-to-End Solutions
              </h3>
              <p className="text-base lg:text-lg text-black leading-relaxed">
                We are your all-in-one partner—from concept development to final
                product delivery. With in-house design, prototyping, tooling, and
                manufacturing capabilities, we deliver seamless, cost-effective
                solutions.
              </p>
            </div>

            {/* Card 02 */}
            <div className="bg-white relative rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-5 left-5">
                <div className="bg-darkBlue rounded-full border-[10px] border-white p-2">
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
                    className="text-white h-7 w-7"
                  >
                    <path d="M12 12v.01" />
                    <path d="M19.071 4.929c-1.562 -1.562 -6 .337 -9.9 4.243c-3.905 3.905 -5.804 8.337 -4.242 9.9c1.562 1.561 6 -.338 9.9 -4.244c3.905 -3.905 5.804 -8.337 4.242 -9.9" />
                    <path d="M4.929 4.929c-1.562 1.562 .337 6 4.243 9.9c3.905 3.905 8.337 5.804 9.9 4.242c1.561 -1.562 -.338 -6 -4.244 -9.9c-3.905 -3.905 -8.337 -5.804 -9.9 -4.242" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl mt-6 lg:text-2xl font-bold text-black mb-4">
                02. Value Engineering
              </h3>
              <p className="text-base lg:text-lg text-black leading-relaxed">
                We believe in smart innovation. Our team works closely with
                customers to optimize designs, reduce material usage, and improve
                cost efficiency—without compromising quality or performance.
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-white relative rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-5 left-5">
                <div className="bg-darkBlue rounded-full border-[10px] border-white p-2">
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
                    className="text-white h-7 w-7"
                  >
                    <path d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z" />
                    <path d="M12 22v-10" />
                    <path d="M12 12l8.73 -5.04" />
                    <path d="M3.27 6.96l8.73 5.04" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl mt-6 lg:text-2xl font-bold text-black mb-4">
                03. Product Assembly
              </h3>
              <p className="text-base lg:text-lg text-black leading-relaxed">
                Focus on your core operations—we&apos;ll handle the rest. Our
                in-house assembly services ensure fully integrated,
                ready-to-use components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
