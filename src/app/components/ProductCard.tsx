import Link  from "next/link";

export default function ProductCard() {
  const products = [
    {
        name: "Expanded Polypropylene (EPP)",
        desc: "Engineered for performance, our EPP products offer superior energy absorption, impact resistance, thermal insulation, and buoyancy. Widely preferred in the automotive, dunnage, and aerospace/drone industries, these multi-use components are lightweight, durable, and 100% recyclable.",
        img: "/Images/product-1.jpg",
        url: "/our-products/expanded-polypropylene.html",
      },
    {
      name: "Expanded Polystyrene (EPS)",
      desc: "Renowned for its excellent insulation, compressive strength, and resistance to chemicals and microbes, EPS remains the material of choice for protective packaging across consumer durables, agriculture & pharmaceuticals.",
      img: "/Images/product-2.jpg",
      url: "/our-products/expanded-polystyrene.html",
    },
    {
      name: "Rotational Moulding (Rotomould)",
      desc: "Our rotomoulding division delivers robust, large-sized, and custom-moulded components with exceptional durability. Ideal for industrial containers, storage tanks, logistics bins, and a variety of custom applications, these products are built to withstand tough environments with ease.",
      img: "/Images/product-3.jpg",
      url: "/our-products/rotational-moulding.html",
    },
  ];

  return (
    <section className="pb-10 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 space-y-3">
          <h2 className="text-lg lg:text-xl xl:text-2xl text-black mr-auto leading-relaxed">
            Our Product Lines
          </h2>
          <p className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl leading-[1.2] font-bold text-black mb-6">
            Three Specialized Business Divisions Powered by Advanced Foam and Rotational Molding Technologies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div
                className="relative h-48 lg:h-[290px] bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"
              >
                <img
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  src={product.img}
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-1 justify-between">
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-4">
                  {product.name}
                </h3>
                <p className="text-base lg:text-lg text-black leading-relaxed mb-6">
                  {product.desc}
                </p>
                <div className="">
                  <Link href={product.url} className="btn bg-[#D9ECFF] text-[#1E5AA6] font-semibold py-3 px-8 rounded-md text-lg transition-colors duration-300 hover:bg-blue-100 cursor-pointer">
                    Know more
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
                        className="lucide lucide-arrow-right w-6 h-6 -rotate-45 group-hover:rotate-0 transition-all duration-300 btn-arrow"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}