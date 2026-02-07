"use client";

import { useState } from "react";
import Link from "next/link";
import { DEFAULT_FORM_DATA, PERSONAL_INFO_FIELDS } from "@/utils/constants";
import { formFillingOptions } from "@/data/dummyData";

export default function ReachUsForm() {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "submitted" | "Failed"
  >("idle");

  const clearForm = () => {
    setFormData(DEFAULT_FORM_DATA);
  };

  const formSubmittion = () => {
    // Store form to database
    // Send email to office
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    formSubmittion();
    clearForm();
    setSubmitStatus("submitted");

    setTimeout(() => {
      setSubmitStatus("idle");
    }, 2000);
  };

  const handleUpdateFormData = <K extends keyof typeof formData>(
    key: K,
    value: (typeof formData)[K],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="h-max bg-(--terciary-grey)/30 rounded-[10px] p-2.5">
      <div className="text-[18px] text-center m-[5px_5px_10px_5px] font-bold">
        Here&apos;s How You Can Reach Us
      </div>

      <form action="submit" onSubmit={(e) => submit(e)}>
        <div className="grid grid-cols-2 gap-2.5">
          {PERSONAL_INFO_FIELDS.map((field) => (
            <div key={field.id} className="w-full inline-flex gap-2.5">
              <label key={field.id} htmlFor={field.id} className="w-full">
                {field.label}
                <input
                  id={field.id}
                  type={field.type}
                  required
                  className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secondary-grey) mb-2.5"
                  value={formData[field.id as keyof typeof formData]}
                  onChange={(e) =>
                    handleUpdateFormData(
                      field.id as keyof typeof formData,
                      e.currentTarget.value,
                    )
                  }
                />
              </label>
            </div>
          ))}
        </div>

        <div className="project-details">
          <div className="my-2.5">
            Which services are you interested in?
            {formFillingOptions.projectSectorOptions.map((service) => (
              <div key={service}>
                <input
                  type="checkbox"
                  className="mx-2.5"
                  onChange={(e) =>
                    handleUpdateFormData(
                      "servicesInterested",
                      e.target.checked
                        ? [...formData.servicesInterested, service]
                        : formData.servicesInterested.filter(
                            (s) => s !== service,
                          ),
                    )
                  }
                />
                {service}
              </div>
            ))}
          </div>

          <div className="my-2.5">
            Select Property
            {formFillingOptions.propertyTypeOptions.map((property) => (
              <div key={property}>
                <input
                  type="checkbox"
                  className="mx-2.5"
                  onChange={(e) =>
                    handleUpdateFormData(
                      "propertyType",
                      e.target.checked
                        ? [...formData.propertyType, property]
                        : formData.propertyType.filter((s) => s !== property),
                    )
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
              handleUpdateFormData("additionalInfo", e.target.value)
            }
          />

          <div className="hear-about">
            <p>How did you hear about us</p>
            <select
              className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secodary-grey) mb-2.5"
              required
              value={formData.hearAboutUs}
              onChange={(e) =>
                handleUpdateFormData("hearAboutUs", e.target.value)
              }
            >
              {formFillingOptions.hearAboutUsOptions.map((option) => (
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

          {submitStatus === "submitted" && (
            <div className="text-center text-(--secondary-blue) mb-2.5">
              *We&apos;ll reveiw your form and get in touch soon!*
            </div>
          )}

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
