import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/app/products/components/Breadcrumb";
import HeroSection from "../components/HeroSection";
import ServicesCard from "@/app/components/ServicesCard";

export default function ExpandedPolystyrene() {
    return (
        <div>
            <Breadcrumb
                items={[
                    { label: "Home", href: "/" },
                    { label: "Our Products" },
                    { label: "Expanded Polystyrene (EPS)" },
                ]}
            />
            <HeroSection
                subtitle="Introducing our latest & best"
                title="Expanded Polystyrene (EPS)"
                description="We are constantly working on enhancing and refining our EPS solutions, ensuring that we deliver one of the best EPS offerings for various industries and sectors. This continuous commitment to innovation and quality is one of the key reasons why our clients place their trust in our EPS solutions."
                imageSrc="/Images/eps_banner_img.svg"
                imageAlt="Expanded Polystyrene"
            />
            <section className="bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Heading */}
                    <div className="mb-10 lg:mb-16 space-y-1">
                        <h2 className="text-lg lg:text-xl xl:text-2xl text-black">
                            We are providing,
                        </h2>
                        <p className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl leading-[1.2] font-bold text-black">
                            Complete Protection for Modern Appliances
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10 lg:mb-16">
                        {/* Television */}
                        <div className="text-center">
                            <div className="relative mb-6">
                                <Image
                                    src="/Images/Group4.jpg"
                                    alt="Television Protection"
                                    width={200}
                                    height={200}
                                    className="w-32 h-32 lg:w-full lg:h-40 mx-auto object-contain"
                                />
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-3">
                                For Television
                            </h3>
                            <p className="text-black lg:text-lg leading-relaxed">
                                EPS provides reliable shock protection, keeping Television safe
                                and secure while being transported.
                            </p>
                        </div>

                        {/* Washing Machine */}
                        <div className="text-center">
                            <div className="relative mb-6">
                                <Image
                                    src="/Images/Group3.jpg"
                                    alt="Washing Machine Protection"
                                    width={200}
                                    height={200}
                                    className="w-32 h-32 lg:w-full lg:h-40 mx-auto object-contain"
                                />
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-3">
                                For Washing Machine
                            </h3>
                            <p className="text-black lg:text-lg leading-relaxed">
                                EPS provides reliable shock protection, keeping Washing Machine
                                safe and secure while being transported.
                            </p>
                        </div>

                        {/* Refrigerator */}
                        <div className="text-center">
                            <div className="relative mb-6">
                                <Image
                                    src="/Images/Group1.jpg"
                                    alt="Refrigerator Protection"
                                    width={200}
                                    height={200}
                                    className="w-32 h-32 lg:w-full lg:h-40 mx-auto object-contain"
                                />
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-3">
                                For Refrigerator
                            </h3>
                            <p className="text-black lg:text-lg leading-relaxed">
                                EPS provides reliable shock protection, keeping Refrigerator safe
                                and secure while being transported.
                            </p>
                        </div>

                        {/* Air Conditioner */}
                        <div className="text-center">
                            <div className="relative mb-6">
                                <Image
                                    src="/Images/Group2.jpg"
                                    alt="Air Conditioner Protection"
                                    width={200}
                                    height={200}
                                    className="w-32 h-32 lg:w-full lg:h-40 mx-auto object-contain"
                                />
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-3">
                                For Air Conditioner
                            </h3>
                            <p className="text-black lg:text-lg leading-relaxed">
                                EPS provides reliable shock protection, keeping Air Conditioner
                                safe and secure while being transported.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="py-24">
                    <div className="bg-[#e7f5ff] py-8 lg:py-4 text-center">
                        <p className="text-black lg:text-lg">
                            ..and protection for many more modern appliances:{" "}
                            <Link
                                href="/contact-us"
                                className="text-[#0061a8] font-semibold border-b border-blue-300"
                            >
                                Contact Us Now To Know More
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            <ServicesCard />

            <section className="py-10 lg:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Heading */}
                        <div className="text-center mb-10 lg:mb-16">
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl mx-auto leading-[1.2] font-bold text-black mb-4">
                                Use of EPS in Different Industries
                            </h2>
                            <p className="text-black sm:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed">
                                EPS is used in many industries apart from electronic appliances.
                                It is also used in industries like food, pharmaceuticals, and more.
                            </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                            {/* Food Industry */}
                            <div className="text-center">
                                <div className="mb-6 flex justify-center">
                                    <div className="p-3 bg-[#0061a8] rounded-lg flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-8 h-8 lg:w-12 lg:h-12 text-white"
                                        >
                                            <path d="M4 11.319c0 3.102 .444 5.319 2.222 7.978c1.351 1.797 3.156 2.247 5.08 .988c.426 -.268 .97 -.268 1.397 0c1.923 1.26 3.728 .809 5.079 -.988c1.778 -2.66 2.222 -4.876 2.222 -7.977c0 -2.661 -1.99 -5.32 -4.444 -5.32c-1.267 0 -2.41 .693 -3.22 1.44a.5 .5 0 0 1 -.672 0c-.809 -.746 -1.953 -1.44 -3.22 -1.44c-2.454 0 -4.444 2.66 -4.444 5.319" />
                                            <path d="M7 12c0 -1.47 .454 -2.34 1.5 -3" />
                                            <path d="M12 7c0 -1.2 .867 -4 3 -4" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-black text-lg lg:text-xl font-bold mb-4">
                                    Food Industry
                                </h3>
                                <p className="text-black lg:text-lg leading-relaxed">
                                    EPS preserves freshness, making it the preferred choice for
                                    exporting fruits and vegetables.
                                </p>
                            </div>

                            {/* Fish Industry */}
                            <div className="text-center">
                                <div className="mb-6 flex justify-center">
                                    <div className="p-3 bg-[#0061a8] rounded-lg flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-8 h-8 lg:w-12 lg:h-12 text-white"
                                        >
                                            <path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571" />
                                            <path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504" />
                                            <path d="M18 11v.01" />
                                            <path d="M11.5 10.5c-.667 1 -.667 2 0 3" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-black text-lg lg:text-xl font-bold mb-4">
                                    Fish Industry
                                </h3>
                                <p className="text-black lg:text-lg leading-relaxed">
                                    EPS keeps fish at a stable temperature, ensuring freshness during
                                    storage and transport.
                                </p>
                            </div>

                            {/* Pharmaceutical Industry */}
                            <div className="text-center">
                                <div className="mb-6 flex justify-center">
                                    <div className="p-3 bg-[#0061a8] rounded-lg flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-8 h-8 lg:w-12 lg:h-12 text-white"
                                        >
                                            <path d="M4.5 12.5l8 -8a4.94 4.94 0 0 1 7 7l-8 8a4.94 4.94 0 0 1 -7 -7" />
                                            <path d="M8.5 8.5l7 7" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-black text-lg lg:text-xl font-bold mb-4">
                                    Pharmaceuticals
                                </h3>
                                <p className="text-black lg:text-lg leading-relaxed">
                                    EPS ensures safe transport of fragile items with its lightweight,
                                    shock-resistant design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 lg:py-24 bg-[#e7f5ff]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 lg:w-[70%] mx-auto">

                        {/* EPS Card */}
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm flex flex-col">
                            <div className="p-2 flex items-center justify-center">
                                <Image
                                    src="/Images/product-3.jpg"
                                    width={500}
                                    height={500}
                                    alt="EPS Products"
                                    className="w-full h-full lg:h-[290px] object-cover rounded-xl"
                                />
                            </div>

                            <div className="p-5 lg:p-8 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-black mb-4">
                                    Expanded Polypropylene (EPP)
                                    </h3>

                                    <p className="text-black lg:text-lg leading-relaxed mb-6">
                                        Renowned for its <strong>excellent insulation, compressive strength,
                                            and resistance to chemicals and microbes,</strong> EPS remains the
                                        material of choice for protective packaging across consumer durables,
                                        agriculture & marine logistics, and pharmaceuticals.
                                    </p>
                                </div>

                                <Link
                                    href="/products/expanded-polypropylene/">
                                    <button className="bg-[#e7f5ff] text-[#0061a8] font-semibold py-3 px-8 rounded-md text-lg hover:bg-blue-100 transition flex items-center gap-2 group">
                                        Know more
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-all duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Rotomould Card */}
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm flex flex-col">
                            <div className="p-2 flex items-center justify-center">
                                <Image
                                    src="/Images/product2.jpg"
                                    width={500}
                                    height={500}
                                    alt="Rotomould Products"
                                    className="w-full h-full lg:h-[290px] object-cover rounded-xl"
                                />
                            </div>

                            <div className="p-5 lg:p-8 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-black mb-4">
                                        Rotational Moulding (Rotomould)
                                    </h3>

                                    <p className="text-black lg:text-lg leading-relaxed mb-6">
                                        Our rotomoulding division delivers <strong>robust, large-sized,
                                            and custom-moulded components with exceptional durability.</strong>
                                        Ideal for industrial containers, storage tanks, logistics bins,
                                        and custom applications built to withstand tough environments.
                                    </p>
                                </div>

                                <Link
                                    href="/products/rotational-moulding/">
                                    <button className="bg-[#e7f5ff] text-[#0061a8] font-semibold py-3 px-8 rounded-md text-lg hover:bg-blue-100 transition flex items-center gap-2 group">
                                        Know more
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-all duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section> 
        </div>
    );
}
