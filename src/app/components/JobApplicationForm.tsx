"use client";

import { useState } from "react";

type FormState = {
  fullName: string;
  phoneNumber: string;
  email: string;
  gender: string;
  highestEducationQualification: string;
  positionAppliedFor: string;
  currentCompany: string;
  currentDesignation: string;
  currentLocation: string;
  willingToRelocate: string;
  totalYearsOfExperience: string;
  currentCTC: string;
  noticePeriod: string;
};

const initialState: FormState = {
  fullName: "",
  phoneNumber: "",
  email: "",
  gender: "",
  highestEducationQualification: "",
  positionAppliedFor: "",
  currentCompany: "",
  currentDesignation: "",
  currentLocation: "",
  willingToRelocate: "",
  totalYearsOfExperience: "",
  currentCTC: "",
  noticePeriod: "",
};

export default function JobApplicationForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState<FormState>(initialState);

  function validate(values: FormState) {
    const e: Record<string, string> = {};

    if (!values.fullName.trim()) e.fullName = "Full name is required";
    if (!values.phoneNumber.trim()) e.phoneNumber = "Phone number is required";
    else if (!/^\+?[0-9\-\s]{7,15}$/.test(values.phoneNumber)) e.phoneNumber = "Enter a valid phone number";

    if (!values.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Enter a valid email";

    if (!values.gender) e.gender = "Please select gender";
    if (!values.highestEducationQualification.trim()) e.highestEducationQualification = "Required";
    if (!values.positionAppliedFor.trim()) e.positionAppliedFor = "Required";

    if (!values.currentCompany.trim()) e.currentCompany = "Required";
    if (!values.currentDesignation.trim()) e.currentDesignation = "Required";
    if (!values.currentLocation.trim()) e.currentLocation = "Required";

    if (!values.willingToRelocate) e.willingToRelocate = "Please select an option";
    if (!values.totalYearsOfExperience.trim()) e.totalYearsOfExperience = "Required";
    if (!values.currentCTC.trim()) e.currentCTC = "Required";
    if (!values.noticePeriod.trim()) e.noticePeriod = "Required";

    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess("");

    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    setLoading(true);
    try {
      const res = await fetch("/api/job-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Application submitted successfully!");
        setForm(initialState);
      } else {
        const t = await res.text();
        setSuccess(t || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setSuccess("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function Input({
    name,
    label,
    type = "text",
    placeholder,
  }: {
    name: keyof FormState;
    label: string;
    type?: string;
    placeholder: string;
  }) {
    return (
      <div>
        <label className="block text-base font-medium text-black mb-2">
          {label} <span className="text-red-500">*</span>
        </label>
        <input
          type={type}
          value={form[name] as string}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          placeholder={placeholder}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-black placeholder-gray-500"
          required
        />
        {errors[name as string] && (
          <p className="text-sm text-red-600 mt-1">{errors[name as string]}</p>
        )}
      </div>
    );
  }

  function Select({
    name,
    label,
    options,
    placeholder,
  }: {
    name: keyof FormState;
    label: string;
    options: { value: string; label: string }[];
    placeholder: string;
  }) {
    return (
      <div>
        <label className="block text-base font-medium text-black mb-2">
          {label} <span className="text-red-500">*</span>
        </label>
        <select
          value={form[name] as string}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white placeholder-gray-500 text-black"
          required
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {errors[name as string] && (
          <p className="text-sm text-red-600 mt-1">{errors[name as string]}</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="py-10 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="mb-6 space-y-3 text-center">
          <h2 className="text-lg lg:text-xl xl:text-2xl text-black leading-relaxed">Job Apply</h2>
          <p className="text-3xl lg:text-4xl xl:text-4xl text-center mx-auto max-w-5xl leading-[1.2] font-bold text-black mb-6">
            Apply For Joining Our Team
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-8 mb-6">
          <h2 className="text-xl lg:text-2xl font-semibold text-black mb-6">Your Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input name="fullName" label="Full Name" placeholder="Enter your full name" />
            <Input name="phoneNumber" label="Phone number" placeholder="Enter your phone number" />
            <Input name="email" type="email" label="Email Address" placeholder="Enter your email address" />
            <Select
              name="gender"
              label="Gender"
              placeholder="Select Gender"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
              ]}
            />
            <Input
              name="highestEducationQualification"
              label="Highest Education Qualification"
              placeholder="Enter your highest edu. qualification"
            />
            <Input name="positionAppliedFor" label="Position Applied For" placeholder="Enter position applied for" />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-black mb-6">Your Current Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Input name="currentCompany" label="Current Company" placeholder="Enter your current company name" />
            <Input name="currentDesignation" label="Current Designation" placeholder="Enter your current designation" />
            <Input name="currentLocation" label="Current Location" placeholder="Enter your current location" />
            <Select
              name="willingToRelocate"
              label="Willing To Relocate"
              placeholder="Select Option"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
            <Input name="totalYearsOfExperience" label="Total Years of Experience" placeholder="Enter total year of experience" />
            <Input name="currentCTC" label="Current CTC" placeholder="Enter your current CTC" />
            <Input name="noticePeriod" label="Notice Period" placeholder="Enter notice period time" />
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary text-darkBlue font-semibold py-3 px-8 rounded-md text-lg transition-colors duration-300 hover:bg-blue-100 cursor-pointer"
          >
            {loading ? "Submitting..." : "Submit Form"}
          </button>
          {success && <p className="mt-4 text-green-600 font-medium">{success}</p>}
        </div>
      </div>
    </form>
  );
}
