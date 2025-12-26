import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bread-crumb py-6">
        <div className="container mx-auto px-4 lg:px-8 ">
          <nav className="flex items-center space-x-2 text-base lg:text-lg">
            <Link className="text-gray-700 hover:text-gray-900 transition-colors duration-200" href="/">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-blue-600 font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      {/* Contact Info */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="mb-10 space-y-2">
                <h2 className="text-lg lg:text-xl xl:text-2xl text-black mr-auto leading-relaxed">Contact Us</h2>
                <p className="text-3xl lg:text-4xl xl:text-5xl max-w-5xl leading-[1.2] font-bold text-black mb-6">
                  We are happy to help you!
                </p>
              </div>

              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 text-[#0061a8]" aria-hidden="true">
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-base lg:text-lg font-medium text-[#0061a8] mb-1">Call Us:</p>
                    <p className="text-base lg:text-lg text-black">
                      <a href="tel:8866075852">+91 88660 75852</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-6 h-6 text-[#0061a8]" aria-hidden="true">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </div>
                  <div>
                    <p className="text-base lg:text-lg font-medium text-[#0061a8] mb-1">Mail Us:</p>
                    <p className="text-base lg:text-lg text-black">
                      <a href="mailto:info@loadsafe.com">info@loadsafe.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building w-6 h-6 text-[#0061a8]" aria-hidden="true">
                      <path d="M12 10h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M12 6h.01"></path>
                      <path d="M16 10h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M16 6h.01"></path>
                      <path d="M8 10h.01"></path>
                      <path d="M8 14h.01"></path>
                      <path d="M8 6h.01"></path>
                      <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path>
                      <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                    </svg>
                  </div>
                  <div>
                    <p className="text-base lg:text-lg font-medium text-[#0061a8] mb-1">Visit our office:</p>
                    <p className="text-base lg:text-lg text-black">Shop no 15, S cube complex, Radhanpur road, Mehsana, 384002</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://ik.imagekit.io/1ffpgbxim/loadsafe/home/Group 146.svg?updatedAt=1756290567133"
                  alt="Modern office lounge with contemporary chairs and floor lamp"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="bg-[#E7F5FF] lg:mt-24 mt-10 py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-3xl lg:text-4xl xl:text-4xl max-w-5xl leading-[1.2] font-bold text-black mb-6">
            Find us on Maps!
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4394.663363312086!2d72.65963067591166!3d23.002449317077737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa81dd05fe7ab209d%3A0x50bb48f3a4f9f253!2sJay%20Rai%20web%20developer%20in%20ahmedabad!5e1!3m2!1sen!2sin!4v1756346035740!5m2!1sen!2sin"
            className="w-full h-[50vh] border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <ContactForm />
    </main>
  );
}