"use client";

import { useState } from "react";
import Link from "next/link";

const defaultFormData = {
  "first-name": "",
  "last-name": "",
  "phone-number": "",
  email: "",
  servicesInterested: [] as string[],
  propertyType: [] as string[],
  additionalInfo: "",
  hearAboutUs: "",
};

const personalInfoFields = [
  { label: "First Name", id: "first-name", type: "text" },
  { label: "Last Name", id: "last-name", type: "text" },
  { label: "Phone Number", id: "phone-number", type: "number" },
  { label: "Email Address", id: "email", type: "email" },
];

const projectDetailsFields = [
  "Electrical Installation",
  "Solar Power Installation",
  "Automation",
  "Alarms",
  "Generators",
];

const propertyTypeFields = [
  "Residential",
  "Commercial",
  "Industrial",
  "Institutional",
];

const hearAboutUsOptions = [
  "Website",
  "Social Media",
  "Friend",
  "Advert",
  "Web Search",
  "Event",
  "Other",
];

export default function ReachUsForm() {
  const [formData, setFormData] = useState(defaultFormData);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "submitted" | "Failed"
  >("idle");

  const clearForm = () => {
    setFormData(defaultFormData);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    console.log("Form Data:", formData);
    clearForm();
    setSubmitStatus("submitted");

    setTimeout(() => {
      setSubmitStatus("idle");
    }, 1000);
  };

  return (
    <div className="h-max bg-(--terciary-grey)/30 rounded-[10px] p-2.5">
      <div className="text-[18px] text-center m-[5px_5px_10px_5px] font-bold">
        Here&apos;s How You Can Reach Us
      </div>

      <form action="submit" onSubmit={(e) => submit(e)}>
        <div className="grid grid-cols-2 gap-2.5">
          {personalInfoFields.map((field) => (
            <div key={field.id} className="w-full inline-flex gap-2.5">
              <label key={field.id} htmlFor={field.id} className="w-full">
                {field.label}
                <input
                  id={field.id}
                  type={field.type}
                  required
                  className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secondary-grey) mb-2.5"
                  value={formData[field.id as keyof typeof formData]}
                  onChange={(e) => {
                    const { id, value } = e.currentTarget;
                    setFormData((prev) => ({
                      ...prev,
                      [id]: value,
                    }));
                  }}
                />
              </label>
            </div>
          ))}
        </div>

        <div className="project-details">
          <div className="my-2.5">
            Which services are you interested in?
            {projectDetailsFields.map((service) => (
              <div key={service}>
                <input
                  type="checkbox"
                  className="mx-2.5"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      servicesInterested: e.target.checked
                        ? [...prev.servicesInterested, service]
                        : prev.servicesInterested.filter((s) => s !== service),
                    }))
                  }
                />
                {service}
              </div>
            ))}
          </div>

          <div className="my-2.5">
            Select Property
            {propertyTypeFields.map((property) => (
              <div key={property}>
                <input
                  type="checkbox"
                  className="mx-2.5"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      propertyType: e.target.checked
                        ? [...prev.propertyType, property]
                        : prev.propertyType.filter((s) => s !== property),
                    }))
                  }
                />
                {property}
              </div>
            ))}
          </div>

          <textarea
            placeholder="Additional information"
            className="additional-information-input w-full min-h-[5em] pl-1.25 rounded-[10px] border border-(--secodary-grey) mb-2.5"
            value={formData.additionalInfo}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                additionalInfo: e.target.value,
              }))
            }
          />

          <div className="hear-about">
            <p>How did you hear about us</p>
            <select
              className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secodary-grey) mb-2.5"
              required
              value={formData.hearAboutUs}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  hearAboutUs: e.target.value,
                }))
              }
            >
              {hearAboutUsOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secodary-grey) mb-2.5">
            {submitStatus === "idle"
              ? "Send My Inquiry"
              : submitStatus === "submitting"
                ? "Sending..."
                : submitStatus === "submitted"
                  ? "Sent Successfully!"
                  : "Failed to Send"}
          </button>

          <Link
            href="/help"
            className="italic ml-2.5 text-(--secondary-blue) hover:underline"
          >
            Need Help?
          </Link>
        </div>
      </form>
    </div>
  );
}
