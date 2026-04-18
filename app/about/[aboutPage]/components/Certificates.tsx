"use client";

import AllImages from "./about_certificates/AllImages";

import SelectedImage from "./about_certificates/SelectedImage";

export default function Certificates() {
  return (
    <div className="relative">
      <div className="text-center text-style__subheading">
        Certifications and Licenses
      </div>

      <AllImages />
      <SelectedImage />
    </div>
  );
}
