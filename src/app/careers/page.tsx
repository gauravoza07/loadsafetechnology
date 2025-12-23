import Image from "next/image";
import Link from "next/link";

export default function Career() {
  return (
    <div className="py-6 mt-20 lg:mt-30">
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center space-x-2 text-base lg:text-lg">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-blue-600 font-medium">Careers</span>
        </nav>
      </div>
    </div>
  );
}
