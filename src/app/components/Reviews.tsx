"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <section className="pb-10 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 lg:mb-16 space-y-3">
          <h2 className="text-lg lg:text-xl xl:text-2xl text-black">
            Our Testimonials
          </h2>
          <p className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl font-bold text-black">
            What Our Customers Say.
          </p>
        </div>

        {/* Embla */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] px-2"
              >
                <div className="bg-white p-6 lg:p-8 border-l border-gray-300 h-full">
                  <div className="mb-6">
                    <Image
                      src="/Images/quote-icon.svg"
                      alt="Quote icon"
                      width={36}
                      height={36}
                    />
                  </div>

                  <p className="text-black lg:text-lg xl:text-2xl font-medium leading-relaxed mb-8">
                    “{item.text}”
                  </p>

                  <div className="flex items-center">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full mr-4 overflow-hidden relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-black lg:text-lg font-semibold">
                        {item.name}
                      </h4>
                      <p className="text-sm lg:text-base text-gray-600">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    text:
      "Loadsafe's EPP packaging solutions have drastically reduced our product damage during transit. Their design team understood our requirements better than we did!",
    name: "Rahul Mehta",
    role: "Supply Chain Head, AutoCore Components Pvt. Ltd.",
    image: "/Images/person-1.jpg",
  },
  {
    text:
      "From concept to execution, Loadsafe delivered excellence. Their ability to rapidly prototype and deliver within tight timelines helped us launch our new product successfully.",
    name: "Ankita Shah",
    role: "Product Manager, SkyGrid Technologies",
    image: "/Images/person-2.jpg",
  },
  {
    text:
      "Loadsafe's innovative approach to polymer solutions has transformed our manufacturing process. Their expertise in EPP and EPS materials is unmatched in the industry.",
    name: "Vikram Singh",
    role: "Operations Director, Precision Manufacturing Ltd.",
    image: "/Images/person-3.jpg",
  },
];
