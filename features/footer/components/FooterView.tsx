import FooterContacts from "./FooterContacts";
import FooterNavs from "./FooterNavs";
import FooterSocials from "./FooterSocials";
import FooterPolicies from "./FooterPolicies";

export default function FooterView() {
  return (
    <footer className="relative w-full h-max md:h-75 p-[0_10%_80px_10%] bg-(--primary-blue) text-style__footer text-(--primary-yellow) grid gap-5 pt-2.5">
      <div>
        <FooterContacts />

        <FooterNavs />

        <FooterSocials />

        <FooterPolicies />
      </div>

      <div className="flex-1 h-12.5 w-full text-center">
        <div>
          Experience the power of innovation with Powerdeed. Let&apos;s shape a
          brighter tomorrow, today.
        </div>
        <div>
          &copy; {new Date().getFullYear()} Powerdeed Engineering Services. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
