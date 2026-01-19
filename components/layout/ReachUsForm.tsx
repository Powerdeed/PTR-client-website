import Link from "next/link";
export default function ReachUsForm() {
  return (
    <div className="h-max bg-(--terciary-grey) rounded-[10px] p-2.5">
      <div className="text-[18px] text-center m-[5px_5px_10px_5px] font-bold">
        Here&apos;s How You Can Reach Us
      </div>
      <form action="submit">
        {Object.entries({
          "client-name": {
            "First Name": "first-name",
            "Last Name": "last-name",
          },
          "client-contacts": {
            "Phone Number": "phone-number",
            "Email Address": "email",
          },
        }).map(([sectionClass, fields]) => (
          <div key={sectionClass} className="w-full inline-flex gap-2.5">
            {Object.entries(fields as unknown as Record<string, string>).map(
              ([labelText, inputId]) => (
                <label key={inputId} htmlFor={inputId}>
                  {labelText}
                  <input
                    id={inputId}
                    type={
                      inputId === "email"
                        ? "email"
                        : inputId === "phone-number"
                          ? "number"
                          : "text"
                    }
                    className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secondary-grey) mb-2.5 "
                  />
                </label>
              ),
            )}
          </div>
        ))}

        <div className="client-requirements">
          <div className="my-2.5">
            Which services are you interested in?
            {[
              "Electrical Installation",
              "Solar Power Installation",
              "Automation",
              "Alarms",
              "Generators",
            ].map((service) => (
              <div key={service}>
                <input type="checkbox" className="mx-2.5" />
                {service}
              </div>
            ))}
          </div>

          <div className="my-2.5">
            Select Property
            {["Residential", "Commercial", "Industrial", "Institutional"].map(
              (property) => (
                <div key={property}>
                  <input type="checkbox" className="mx-2.5" />
                  {property}
                </div>
              ),
            )}
          </div>

          <textarea
            placeholder="Additional information"
            className="additional-information-input w-full min-h-[5em] pl-1.25 rounded-[10px] border border-(--secodary-grey) mb-2.5"
          />
          <div className="hear-about">
            <p>How did you hear about us</p>
            <select
              name=""
              id=""
              className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secodary-grey) mb-2.5"
            >
              {[
                "Website",
                "Social Media",
                "Friend",
                "Advert",
                "Web Search",
                "Event",
                "Other",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button
            className="w-full h-[3em] pl-1.25 rounded-[10px] border border-(--secodary-grey) mb-2.5"
            onClick={(e) => e.preventDefault()}
          >
            Send My Inquiry
          </button>
          <Link
            href="../help"
            className="italic ml-2.5 text-(--secondary-blue) hover:underline"
          >
            Need Help?
          </Link>
        </div>
      </form>
    </div>
  );
}
