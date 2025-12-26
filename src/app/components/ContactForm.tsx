"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        fullName: formData.get("fullName"),
        phoneNumber: formData.get("phoneNumber"),
        message: formData.get("message"),
      }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess("Message sent successfully!");
      e.currentTarget.reset();
    } else {
      setSuccess("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="bg-white py-10 lg:py-24">
      <div className="lg:mr-20 px-4 lg:px-0">
        <div className="overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full h-64 lg:h-full min-h-[400px]">
                <Image
                  src="/Images/contact-form-img.jpg"
                  alt="Industrial Complex"
                  fill
                  className="object-cover rounded-3xl lg:rounded-l-none"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-1/2 py-6 lg:p-8 lg:py-12">
              <h2 className="text-black text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                Get in Touch With Us
              </h2>

              <p className="text-black lg:text-lg text-gray-600 mb-8">
                Use the form below to tell us what you're looking for or how we
                can help.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label className="text-black block font-medium mb-2">
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      name="fullName"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-black rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="text-black block font-medium mb-2">
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                    <input
                      name="phoneNumber"
                      required
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-black rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-black block font-medium mb-2">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border border-black rounded-lg resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary btn-lg text-darkBlue font-semibold py-3 px-8 rounded-md flex items-center gap-2 hover:bg-blue-100 transition"
                >
                    
                  {loading ? "Sending..." : "Send message now"}
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="btn-arrow"
                        aria-hidden="true"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
                

                {success && (
                  <p className="text-green-600 font-medium">{success}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
