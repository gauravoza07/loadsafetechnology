import Image from "next/image";

export default function BottomCTA() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-24">
      {/* Background Image */}
      <Image
        src="/Images/service-banner.svg"
        alt="LoadSafe Hero Background"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="relative z-10 mx-4 lg:mx-0">
        <div className="bg-white rounded-3xl shadow-lg max-w-7xl w-full mx-auto overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Image */}
            <div className="lg:w-[25%] p-6 lg:p-0 flex items-end justify-center">
              <div className="relative pt-4 w-[200px] h-[200px]">
                <Image
                  src="/Images/bottomCTA.svg"
                  alt="Sustainable Plant"
                  fill
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-[75%] pb-6 lg:py-10 px-6 flex flex-col justify-center">
              <p className="text-black lg:text-lg mb-3 text-center lg:text-left font-medium">
                Smart. Sustainable. Responsible.
              </p>

              <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold text-center lg:text-left text-gray-900 mb-4 leading-tight">
                We believe innovation and environmental responsibility must go{" "}
                <span className="text-darkBlue">hand in hand</span>.
              </h2>

              {/* Desktop Text */}
              <p className="text-black lg:text-lg hidden lg:block mb-6 leading-relaxed">
                Our products and processes are designed to reduce waste, lower
                carbon emissions, and promote <br />a circular economy.
              </p>

              {/* Mobile Text */}
              <p className="text-black lg:text-lg lg:hidden text-center leading-relaxed mb-6">
                Our products and processes are designed to reduce waste, lower
                carbon emissions, and promote a circular economy.
              </p>

              {/* Logos */}
              <div className="hidden lg:flex gap-4 flex-wrap lg:flex-nowrap mr-4">
                {[
                  {
                    src: "https://ik.imagekit.io/1ffpgbxim/loadsafe/home/Group%20108.svg",
                    width: 299,
                  },
                  {
                    src: "https://ik.imagekit.io/1ffpgbxim/loadsafe/home/Group%20109.svg",
                    width: 266,
                  },
                  {
                    src: "https://ik.imagekit.io/1ffpgbxim/loadsafe/home/Group%20110.svg",
                    width: 266,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex justify-center">
                    <Image
                      src={item.src}
                      alt="Sustainability badge"
                      width={item.width}
                      height={103}
                      className="object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
