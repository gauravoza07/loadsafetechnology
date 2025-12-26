import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/app/products/components/Breadcrumb";
import HeroSection from "@/app/products/components/HeroSection";

export default function ExpandedPolypropylene() {
    return (
        <div className="">
           <Breadcrumb
                items={[
                { label: "Home", href: "/" },
                { label: "Our Products" },
                { label: "Expanded Polypropylene (EPP)" },
                ]}
            />
             <HeroSection
        subtitle="Introducing our latest & best"
        title="Expanded Polypropylene (EPP)"
        description="Expanded Polypropylene (EPP) is a next-generation material known for its strength, flexibility, and versatility—driving innovation in industries ranging from automotive and defense to the rapidly expanding drone market. Lightweight, durable, and endlessly adaptable—EPP is built for the future."
        imageSrc="/Images/eps_banner_img.svg"
        imageAlt="Expanded Polypropylene"
      />

            

            <div className="container mx-auto px-4 lg:px-0 pb-6 lg:pb-14 mt-5 lg:-mt-10">
                <div className="lg:w-[75%] mx-auto">
                    <Image
                        src="https://ik.imagekit.io/1ffpgbxim/loadsafe/products/Group 125 (1).svg"
                        alt="EPP"
                        width={1000}
                        height={1000}
                        className="w-full h-full"
                        priority
                    />
                </div>
            </div>

            {/* Drone Applications */}
            <section className="pt-10 lg:pt-24 mb-10 lg:mb-24 bg-[#e7f5ff]">
                <div className="container mx-auto px-4 lg:px-8">

                    {/* Heading */}
                    <div className="text-center mb-12 max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6">
                            Elevating Drone Capabilities
                        </h2>
                        <p className="text-black sm:text-lg lg:text-xl leading-relaxed text-black">
                            Drones face unique challenges in flight, demanding materials that are both
                            lightweight and durable. EPP offers the strength and adaptability drones
                            need to perform at their best.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">

                        {/* Left Features */}
                        <div className="space-y-2 lg:space-y-10 flex flex-col justify-center h-full gap-4">

                            <div className="flex items-center gap-5">
                                <div className="p-2 bg-[#0061a8] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-feather w-8 h-8 lg:w-10 lg:h-10 text-white"><path d="M4 20l10 -10m0 -5v5h5m-9 -1v5h5m-9 -1v5h5m-5 -5l4 -4l4 -4"></path><path d="M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1m-3 13l4 -4l4 -4"></path></svg>
                                </div>
                                <p className="text-black lg:text-lg font-medium text-black">
                                    Lightweight Design, Powerful Performance
                                </p>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="p-2 bg-[#0061a8] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-bong w-8 h-8 lg:w-10 lg:h-10 text-white"><path d="M13 3v8.416c.134 .059 .265 .123 .393 .193l3.607 -3.609l2 2l-3.608 3.608a5 5 0 1 1 -6.392 -2.192v-8.416h4z"></path><path d="M8 3h6"></path><path d="M6.1 17h9.8"></path></svg>
                                </div>
                                <p className="text-black lg:text-lg font-medium text-black">
                                    Custom-Built for Unique Drone Needs
                                </p>
                            </div>

                        </div>

                        {/* Center Image */}
                        <div className="">
                            <img
                                src="https://ik.imagekit.io/1ffpgbxim/loadsafe/products/Group%20128.png"
                                alt="Drone EPP"
                                className="w-full max-w-md object-contain"
                            />
                        </div>

                        {/* Right Features */}
                        <div className="space-y-2 lg:space-y-10 flex flex-col justify-center h-full gap-4">

                            <div className="flex items-center gap-5">
                                <div className="p-2 bg-[#0061a8] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-drone w-8 h-8 lg:w-10 lg:h-10 text-white"><path d="M10 10h4v4h-4z"></path><path d="M10 10l-3.5 -3.5"></path><path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96"></path><path d="M14 10l3.5 -3.5"></path><path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96"></path><path d="M14 14l3.5 3.5"></path><path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96"></path><path d="M10 14l-3.5 3.5"></path><path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96"></path></svg>
                                </div>
                                <p className="text-black lg:text-lg font-medium text-black">
                                    Built Tough for Crash Protection
                                </p>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="p-2 bg-[#0061a8] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-tools w-8 h-8 lg:w-10 lg:h-10 text-white"><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path><path d="M14.5 5.5l4 4"></path><path d="M12 8l-5 -5l-4 4l5 5"></path><path d="M7 8l-1.5 1.5"></path><path d="M16 12l5 5l-4 4l-5 -5"></path><path d="M16 17l-1.5 1.5"></path></svg>
                                </div>
                                <p className="text-black lg:text-lg font-medium text-black">
                                    Protection Against Heat & Corrosion
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <div className="container mx-auto pb-10 lg:pb-24">
                <div className="wrapper px-4 lg:px-8">
                    <div className="heading mb-10 lg:mb-16">
                        <p
                            className="text-3xl mx-auto lg:text-4xl text-center xl:text-5xl max-w-5xl leading-[1.2] font-bold text-black mb-6">
                            Protecting Drones in Harsh Weather</p>
                        <p className="text-black text-center sm:text-lg lg:text-xl max-w-6xl mx-auto leading-relaxed">The
                            fast-growing drone industry depends on packaging that combines durability with efficiency.
                            Expanded Polypropylene offers robust protection with minimal weight, making it the ideal
                            choice for secure drone packaging solutions.</p>
                    </div>
                    <div className="relative lg:max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-center">
                            <div
                                className="space-y-2 lg:space-y-10 order-1 lg:order-1 flex flex-col justify-center h-full gap-4">
                                <div className="flex items-center space-x-4 lg:space-x-6">
                                    <div
                                        className="p-2 bg-[#0061a8] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-shield-check w-8 h-8 lg:w-10 lg:h-10 text-white">
                                            <path
                                                d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06">
                                            </path>
                                            <path d="M15 19l2 2l4 -4"></path>
                                        </svg></div>
                                    <div className="flex-1">
                                        <h3 className="text-black lg:text-lg font-medium mb-2 ">Strong Protection for
                                            Critical Components</h3>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 lg:space-x-6">
                                    <div
                                        className="p-2 bg-[#0061a8] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-feather w-8 h-8 lg:w-10 lg:h-10 text-white">
                                            <path d="M4 20l10 -10m0 -5v5h5m-9 -1v5h5m-9 -1v5h5m-5 -5l4 -4l4 -4"></path>
                                            <path
                                                d="M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1m-3 13l4 -4l4 -4">
                                            </path>
                                        </svg></div>
                                    <div className="flex-1">
                                        <h3 className="text-black lg:text-lg font-medium mb-2">Cut Costs with
                                            Lighter, Stronger Packaging</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center order-1 lg:order-2">
                                <Image
                                    src="/Images/Drone_protection_img.jpg"
                                    alt="Drone with EPP capabilities"
                                    width={600}
                                    height={600}
                                    className="rounded-2xl shadow-lg object-contain"
                                />
                            </div>
                            <div
                                className="space-y-2 lg:space-y-10 order-3 lg:order-3 flex flex-col justify-center h-full gap-4">
                                <div className="flex items-center space-x-4 lg:space-x-6">
                                    <div
                                        className="p-2 bg-[#0061a8] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-puzzle w-8 h-8 lg:w-10 lg:h-10 text-white">
                                            <path
                                                d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1">
                                            </path>
                                        </svg></div>
                                    <div className="flex-1">
                                        <h3 className="text-black lg:text-lg font-medium mb-2">Adaptable
                                            Packaging Designed for Every Drone</h3>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 lg:space-x-6">
                                    <div
                                        className="p-2 bg-[#0061a8] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="tabler-icon tabler-icon-creative-commons-sa w-8 h-8 lg:w-10 lg:h-10 text-white">
                                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                            <path d="M12 16a4 4 0 1 0 -4 -4v1"></path>
                                            <path d="M6 12l2 2l2 -2"></path>
                                        </svg></div>
                                    <div className="flex-1">
                                        <h3 className="text-black lg:text-lg font-medium mb-2">Reusable
                                            Solutions for a Greener Future</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:justify-center mt-6 lg:mt-10">
                            <div className="flex items-center space-x-4 lg:space-x-6">
                                <div
                                    className="p-2 bg-[#0061a8] rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="tabler-icon tabler-icon-bong w-8 h-8 lg:w-10 lg:h-10 text-white">
                                        <path
                                            d="M13 3v8.416c.134 .059 .265 .123 .393 .193l3.607 -3.609l2 2l-3.608 3.608a5 5 0 1 1 -6.392 -2.192v-8.416h4z">
                                        </path>
                                        <path d="M8 3h6"></path>
                                        <path d="M6.1 17h9.8"></path>
                                    </svg></div>
                                <div className="flex-1">
                                    <h3 className="text-black hidden lg:block lg:text-lg font-medium mb-2 ">Built Tough for
                                        <br /> Demanding Conditions</h3>
                                    <h3 className="text-black lg:hidden block lg:text-lg font-medium mb-2 ">Built Tough for
                                        Demanding Conditions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="pt-10 lg:pt-24 mb-10 lg:mb-24 bg-[#e7f5ff] relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-10 lg:mb-16">
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl mx-auto font-bold text-black mb-6 leading-[1.2]">
                            EPP Packaging
                        </h2>
                        <p className="text-black sm:text-lg lg:text-xl max-w-5xl mx-auto leading-relaxed">
                            In manufacturing and industrial settings, safe storage and transport are key
                            to quality and cost savings. EPP is the perfect choice, combining strength,
                            lightness, and sustainability unlike traditional packaging.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="mb-10 lg:mb-16 max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center items-center">

                            {/* Feature 1 */}
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                        <path d="M15 11v.01" />
                                        <path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377" />
                                        <path d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2a6 6 0 0 1 4 -10.473h2.5l4.5 -3z" />
                                    </svg>
                                </div>
                                <h3 className="text-black lg:text-lg font-medium">Budget-Friendly</h3>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                        <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                                        <path d="M15 19l2 2l4 -4" />
                                    </svg>
                                </div>
                                <h3 className="text-black lg:text-lg font-medium">
                                    Advanced Damage Resistance
                                </h3>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                        <path d="M12 16a4 4 0 1 0 -4 -4v1" />
                                        <path d="M6 12l2 2l2 -2" />
                                    </svg>
                                </div>
                                <h3 className="text-black lg:text-lg font-medium">Long-Lasting</h3>
                            </div>

                        </div>
                    </div>

                    {/* Images */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                        <Image
                            src="/Images/EPS_packing_img1.jpg"
                            alt="Drone with EPP capabilities"
                            width={600}
                            height={600}
                            className="w-full lg:w-[30%] h-auto lg:h-[250px] rounded-2xl object-cover"
                        />
                        <Image
                            src="/Images/EPS_packing_img2.jpg"
                            alt="Drone with EPP capabilities"
                            width={600}
                            height={600}
                            className="w-full lg:w-[40%] h-auto rounded-2xl object-cover"
                        />
                        <Image
                            src="/Images/EPS_packing_img3.jpg"
                            alt="Drone with EPP capabilities"
                            width={600}
                            height={600}
                            className="w-full lg:w-[30%] h-auto lg:h-[250px] rounded-2xl object-cover"
                        />
                    </div>

                </div>

                {/* Bottom Curve */}
                <div className="w-full h-[15vh] lg:h-[20vh] bg-white relative">
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-[#e7f5ff]"
                        style={{ clipPath: "ellipse(50% 100% at 50% 0%)" }}
                    />
                </div>
            </section>

            <section className="pb-10 lg:pb-24 relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 relative z-10">

                    {/* Heading */}
                    <div className="text-center mb-10 lg:mb-14">
                        <h2 className="text-lg lg:text-xl xl:text-2xl text-black mb-2">
                            Our Custom EPP Solution for...
                        </h2>

                        <h2 className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl mx-auto font-bold text-black mb-6 leading-[1.2]">
                            Defense Equipment Packaging
                        </h2>

                        <p className="text-black sm:text-lg lg:text-xl max-w-6xl mx-auto leading-relaxed">
                            The defence sector demands materials that combine strength, reliability,
                            and adaptability. EPP meets these needs with excellence, serving in
                            applications that range from protective packaging to specialised drone
                            parts and more.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="relative lg:max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 items-center">

                            {/* Left Features */}
                            <div className="flex flex-col justify-center gap-6">

                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                            <path d="M4 20l10 -10m0 -5v5h5m-9 -1v5h5m-9 -1v5h5m-5 -5l4 -4l4 -4" />
                                            <path d="M19 10c.638 -.636 1 -1.515 1 -2.486a3.515 3.515 0 0 0 -3.517 -3.514c-.97 0 -1.847 .367 -2.483 1m-3 13l4 -4l4 -4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-black lg:text-lg font-medium">
                                        Smart, Lightweight, and Easy to Carry
                                    </h3>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                            <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                                            <path d="M14.5 5.5l4 4" />
                                            <path d="M12 8l-5 -5l-4 4l5 5" />
                                            <path d="M7 8l-1.5 1.5" />
                                            <path d="M16 12l5 5l-4 4l-5 -5" />
                                            <path d="M16 17l-1.5 1.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-black lg:text-lg font-medium">
                                        Versatile and Ready for Specialized Demands
                                    </h3>
                                </div>

                            </div>

                            {/* Center Image */}
                            <div className="flex justify-center items-center">
                                <Image
                                    src="/Images/Equipment_packaging.jpg"
                                    alt="Drone with EPP capabilities"
                                    width={600}
                                    height={600}
                                    className="w-[80%] lg:-ml-6"
                                />
                            </div>

                            {/* Right Features */}
                            <div className="flex flex-col justify-center gap-6">

                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                            <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
                                            <path d="M15 19l2 2l4 -4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-black lg:text-lg font-medium">
                                        Maximum Protection for High-Value Equipment
                                    </h3>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-[#0061a8] rounded-lg shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                            <path d="M21 12a9 9 0 1 0 -8.98 9" />
                                            <path d="M12 7v5l1 1" />
                                            <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-black lg:text-lg font-medium">
                                        Built Strong for Lasting Performance
                                    </h3>
                                </div>

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
                                    src="/Images/product1.jpg"
                                    width={500}
                                    height={500}
                                    alt="EPS Products"
                                    className="w-full h-full lg:h-[290px] object-cover rounded-xl"
                                />
                            </div>

                            <div className="p-5 lg:p-8 flex flex-col flex-1 justify-between">
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-black mb-4">
                                        Expanded Polystyrene (EPS)
                                    </h3>

                                    <p className="text-black lg:text-lg leading-relaxed mb-6">
                                        Renowned for its <strong>excellent insulation, compressive strength,
                                            and resistance to chemicals and microbes,</strong> EPS remains the
                                        material of choice for protective packaging across consumer durables,
                                        agriculture & marine logistics, and pharmaceuticals.
                                    </p>
                                </div>

                                <Link
                                    href="/products/expanded-polystyrene/">
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
