import Image from "next/image";
import Link from "next/link";
import JobApplicationForm from "../components/JobApplicationForm";

export default function Careers() {
  return (
    <div className="">
      <div className="bread-crumb py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="flex items-center space-x-2 text-base lg:text-lg">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600 font-medium">Careers</span>
          </nav>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 space-y-1">
          <h2 className="text-lg lg:text-xl xl:text-2xl text-black mr-auto leading-relaxed">
            Careers
          </h2>
          <p className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl leading-[1.2] font-bold text-black mb-6">
            Join Our Fastest Growing Family
          </p>
        </div>
        <Image
          alt="careers"
          loading="lazy"
          width="1000"
          height="1000"
          decoding="async"
          data-nimg="1"
          className="w-full h-[30vh] object-cover lg:h-auto rounded-lg"
          src="Images/career_banner_image.svg"
        />
      </div>
      <JobApplicationForm />
    </div>
  );
}
