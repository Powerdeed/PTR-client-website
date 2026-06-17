"use client";

import { useState } from "react";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import Link from "next/link";

import { formFillingOptions } from "../constants/ReactUsFormOptions";
import { PERSONAL_INFO_FIELDS } from "@/global-utils/constants/personal-info-fields";
import { DEFAULT_FORM_DATA } from "@/global-utils/constants/default-form-data";
import { sendInquiry } from "../services/formSubmission";

type FormValues = typeof DEFAULT_FORM_DATA;
type SubmitStatus = "idle" | "submitting" | "submitted" | "failed";

export default function ReachUsForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: DEFAULT_FORM_DATA,
    mode: "onChange",
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    setFormError(null);
    clearErrors();
    setSubmitStatus("submitting");

    try {
      await sendInquiry(data);
      reset();
      setSubmitStatus("submitted");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setFormError("Unable to submit the form right now. Please try again.");
      setSubmitStatus("failed");
      if (error instanceof Error) {
        setError("email", {
          type: "server",
          message: error.message,
        });
      } else {
        setError("email", {
          type: "server",
          message: "Server error occurred. Please try again later.",
        });
      }
    }
  };

  const getButtonText = () => {
    if (isSubmitting) return "Sending...";
    if (submitStatus === "submitted") return "Sent Successfully!";
    if (submitStatus === "failed") return "Failed to Send";
    return "Send My Inquiry";
  };

  return (
    <div className="font-semibold text-style__form h-max bg-(--terciary-grey)/30 rounded-[10px] p-2.5">
      <div className="text-style__subheading text-center m-1.25 mb-2.5">
        Here&apos;s How You Can Reach Us
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset disabled={isSubmitting} className="vertical-layout__inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {PERSONAL_INFO_FIELDS.map((field) => (
              <div key={field.id} className="vertical-layout__inner">
                <label htmlFor={field.id} className="w-full">
                  {field.label}
                  <input
                    id={field.id}
                    type={field.type}
                    autoComplete={field.autocomplete || "on"}
                    aria-invalid={
                      errors[field.id as keyof FormValues] ? "true" : "false"
                    }
                    aria-describedby={`${field.id}-error`}
                    className={`w-full h-[3em] pl-1.25 rounded-[10px] border ${
                      errors[field.id as keyof FormValues]
                        ? "border-(--secondary-red)"
                        : "border-(--secondary-grey)"
                    }`}
                    {...register(field.id as keyof FormValues, {
                      required: `${field.label} is required`,
                      ...(field.id === "phone-number"
                        ? {
                            pattern: {
                              value:
                                /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                              message: "Enter a valid phone number",
                            },
                          }
                        : {}),
                      ...(field.id === "email"
                        ? {
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Enter a valid email address",
                            },
                          }
                        : {}),
                    })}
                  />
                </label>

                {errors[field.id as keyof FormValues] && (
                  <ErrorMessage
                    id={`${field.id}-error`}
                    message={errors[field.id as keyof FormValues]?.message}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="vertical-layout__inner">
            <fieldset>
              <legend>Which services are you interested in?</legend>

              <Controller
                name="servicesInterested"
                control={control}
                rules={{
                  validate: (value) =>
                    value.length > 0 || "Select at least one service",
                }}
                render={({ field }) => (
                  <CheckboxGroup
                    checkboxOptions={formFillingOptions.projectSectorOptions}
                    field={field}
                  />
                )}
              />

              {errors.servicesInterested && (
                <ErrorMessage message={errors.servicesInterested.message} />
              )}
            </fieldset>
          </div>

          <div className="vertical-layout__inner">
            <fieldset>
              <legend>Select Property</legend>

              <Controller
                name="propertyType"
                control={control}
                rules={{
                  validate: (value) =>
                    value.length > 0 || "Select at least one property type",
                }}
                render={({ field }) => (
                  <CheckboxGroup
                    checkboxOptions={formFillingOptions.propertyTypeOptions}
                    field={field}
                  />
                )}
              />

              {errors.propertyType && (
                <ErrorMessage message={errors.propertyType.message} />
              )}
            </fieldset>
          </div>

          <div className="vertical-layout__inner">
            <label htmlFor="reachUs-form-additional-info" className="sr-only">
              Additional information
            </label>

            <textarea
              id="reachUs-form-additional-info"
              placeholder="Additional information"
              className="w-full min-h-[5em] p-1.25 rounded-[10px] border border-(--secondary-grey)"
              {...register("additionalInfo")}
            />

            {errors.additionalInfo && (
              <ErrorMessage message={errors.additionalInfo.message} />
            )}
          </div>

          <div className="vertical-layout__inner">
            <div>How did you hear about us</div>

            <select
              id="hear-about-us-selector"
              className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secondary-grey)"
              aria-invalid={errors.hearAboutUs ? "true" : "false"}
              aria-describedby="hear-about-us-error"
              {...register("hearAboutUs", {
                required: "Please tell us how you heard about us",
              })}
            >
              <option value="" disabled>
                Select an option
              </option>
              {formFillingOptions.hearAboutUsOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.hearAboutUs && (
              <ErrorMessage
                id="hear-about-us-error"
                message={errors.hearAboutUs.message}
              />
            )}
          </div>

          {formError && <ErrorMessage message={formError} />}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secondary-grey) disabled:opacity-50"
          >
            {getButtonText()}
          </button>

          {submitStatus === "submitted" && <SuccessMessage />}

          <Link href="/help" className="italic text-style__link">
            Need Help?
          </Link>
        </fieldset>
      </form>
    </div>
  );
}

function CheckboxGroup({
  checkboxOptions,
  field,
}: {
  checkboxOptions: string[];
  field: ControllerRenderProps<
    DEFAULT_FORM_DATA,
    "servicesInterested" | "propertyType"
  >;
}) {
  const handleCheckboxChange = (checkBoxItem: string, isChecked: boolean) => {
    const currentArray = field.value;

    const updatedArray = isChecked
      ? [...currentArray, checkBoxItem]
      : currentArray.filter((item) => item !== checkBoxItem);

    field.onChange(updatedArray);
  };

  return (
    <div className="vertical-layout__inner">
      {checkboxOptions.map((checkBoxItem) => (
        <label key={checkBoxItem} className="inline-flex items-center gap-2">
          <input
            id={checkBoxItem}
            type="checkbox"
            className="mx-2.5"
            checked={field.value.includes(checkBoxItem)}
            onChange={(e) =>
              handleCheckboxChange(checkBoxItem, e.target.checked)
            }
          />
          {checkBoxItem}
        </label>
      ))}
    </div>
  );
}

function SuccessMessage() {
  return (
    <div className="text-center text-(--secondary-blue) font-semibold">
      *We&apos;ll review your form and get in touch soon!*
    </div>
  );
}

function ErrorMessage({ id, message }: { id?: string; message?: string }) {
  return (
    <p id={id || "error"} role="alert" className="text-(--primary-red) mt-px">
      {message}
    </p>
  );
}
