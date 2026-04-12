"use client";

import Link from "next/link";

export default function FooterPolicies() {
  return (
    <ul className="w-full md:w-[25%] list-none grid justify-center gap-2.5 float-none text-center md:float-left md:text-left mb-2.5 md:mb-0">
      <li>
        <a
          href="/docs/profile/POWERDEED ENGINEERING SERVICES.pdf"
          download="POWERDEED ENGINEERING SERVICES.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          📄 Company Profile (PDF)
        </a>
      </li>
      <li>
        <Link href="../404">🔐 Privacy Policy</Link>
      </li>
      <li>
        <Link href="../404">Terms of Use</Link>
      </li>
      <li>
        <Link href="../404">Cookie Policy</Link>
      </li>
      <li>
        <Link href="../404">Subscribe to Our Newsletter “We never spam.”</Link>
      </li>
    </ul>
  );
}
