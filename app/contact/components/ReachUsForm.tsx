"use client";

import Link from "next/link";

import { formFillingOptions } from "../constants/ReactUsFormOptions";
import { PERSONAL_INFO_FIELDS } from "@/global-utils/constants/personal-info-fields";
import { DEFAULT_FORM_DATA } from "@/global-utils/constants/default-form-data";

import useContact from "../hooks/useContact";

export default function ReachUsForm() {
  const { state, actions } = useContact();

  return (
    <div className="text-style__form h-max bg-(--terciary-grey)/30 rounded-[10px] p-2.5">
      <div className="text-style__subheading text-center m-1.25 mb-2.5">
        Here&apos;s How You Can Reach Us
      </div>

      <form
        action="submit"
        className="flex flex-col gap-2.5"
        onSubmit={(e) => actions.submitContact(e)}
      >
        <div className="grid grid-cols-2 gap-2.5">
          {PERSONAL_INFO_FIELDS.map((field) => (
            <div key={field.id} className="w-full inline-flex gap-2.5">
              <label key={field.id} htmlFor={field.id} className="w-full">
                {field.label}
                <input
                  id={field.id}
                  type={field.type}
                  required
                  autoComplete={field.autocomplete || "on"}
                  className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secondary-grey)"
                  value={
                    state.formData[field.id as keyof typeof state.formData]
                  }
                  onChange={(e) =>
                    actions.handleUpdateFormData(
                      field.id as keyof DEFAULT_FORM_DATA,
                      e.currentTarget.value,
                    )
                  }
                />
              </label>
            </div>
          ))}
        </div>

        <div>
          Which services are you interested in?
          {formFillingOptions.projectSectorOptions.map((service) => (
            <div key={service}>
              <input
                id={service}
                type="checkbox"
                className="mx-2.5"
                onChange={(e) =>
                  actions.handleUpdateFormData(
                    "servicesInterested",
                    e.target.checked
                      ? [...state.formData.servicesInterested, service]
                      : state.formData.servicesInterested.filter(
                          (s) => s !== service,
                        ),
                  )
                }
              />
              {service}
            </div>
          ))}
        </div>

        <div>
          Select Property
          {formFillingOptions.propertyTypeOptions.map((property) => (
            <div key={property}>
              <input
                id={property}
                type="checkbox"
                className="mx-2.5"
                onChange={(e) =>
                  actions.handleUpdateFormData(
                    "propertyType",
                    e.target.checked
                      ? [...state.formData.propertyType, property]
                      : state.formData.propertyType.filter(
                          (s) => s !== property,
                        ),
                  )
                }
              />
              {property}
            </div>
          ))}
        </div>

        <textarea
          id="reachUs-form-additional-info"
          placeholder="Additional information"
          className="w-full min-h-[5em] p-1.25 rounded-[10px] border border-(--secodary-grey)"
          value={state.formData.additionalInfo}
          onChange={(e) =>
            actions.handleUpdateFormData("additionalInfo", e.target.value)
          }
        />

        <div>
          How did you hear about us
          <select
            id="hear-about-us-selector"
            className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secodary-grey)"
            required
            value={state.formData.hearAboutUs}
            onChange={(e) =>
              actions.handleUpdateFormData("hearAboutUs", e.target.value)
            }
          >
            {formFillingOptions.hearAboutUsOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secodary-grey)">
          {state.submitStatus === "idle"
            ? "Send My Inquiry"
            : state.submitStatus === "submitting"
              ? "Sending..."
              : state.submitStatus === "submitted"
                ? "Sent Successfully!"
                : "Failed to Send"}
        </button>

        {state.submitStatus === "submitted" && (
          <div className="text-center text-(--secondary-blue)">
            *We&apos;ll reveiw your form and get in touch soon!*
          </div>
        )}

        <Link href="/help" className="italic text-style__link">
          Need Help?
        </Link>
      </form>
    </div>
  );
}
