// modules
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

// styles
import "./styles/footer.css";

// files
import profilePdf from "/docs/profile/POWERDEED ENGINEERING SERVICES.pdf";

export default function Footer() {
  const API = import.meta.env.VITE_API_BASE_URL;
  const [contacts, setContacts] = useState({});

  const location = useLocation();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(`${API}/contacts`);
        const data = res.data.data;
        setContacts(data);
      } catch (error) {
        console.error("Failed to fetch contacts", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li className="Contacts" style={{ fontWeight: "bold" }}>
            Our Contacts
          </li>
          {!contacts ? (
            <li>Loading contacts...</li>
          ) : (
            Object.entries(contacts).map(([title, value]) => (
              <li key={title}> {value}</li>
            ))
          )}
        </ul>
        <ul className="footer-links">
          <li className="home-link">
            <Link
              className={location.pathname === "/" ? "active-page" : ""}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="services-link">
            <Link
              className={location.pathname === "/services" ? "active-page" : ""}
              to="../services"
            >
              Services
            </Link>
          </li>
          <li className="overview-link">
            <Link
              className={
                location.pathname === "/about/overview" ? "active-page" : ""
              }
              to="../about/overview"
            >
              Overview
            </Link>
          </li>
          <li className="structure-link">
            <Link
              className={
                location.pathname === "/about/structure" ? "active-page" : ""
              }
              to="../about/structure"
            >
              structure
            </Link>
          </li>
          <li className="certifications-link">
            <Link
              className={
                location.pathname === "/about/certifications"
                  ? "active-page"
                  : ""
              }
              to="../about/certifications"
            >
              Certificates & Licenses
            </Link>
          </li>
          <li className="projects-link">
            <Link
              className={location.pathname === "/projects" ? "active-page" : ""}
              to="../projects"
            >
              Projects
            </Link>
          </li>
          <li className="blog-link">
            <Link
              className={location.pathname === "/blog" ? "active-page" : ""}
              to="../blog"
            >
              Blog
            </Link>
          </li>
          <li className="contact-link">
            <Link
              className={location.pathname === "/contact" ? "active-page" : ""}
              to="../contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <ul className="footer-links socials">
          <li style={{ fontWeight: "bold" }}>Our Socials:</li>
          <li>
            <a
              href="https://www.linkedin.com/in/alfred-kuria-58199a106/?originalSubdomain=ke"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                aria-label="LinkedIn"
                className="social-icon linkedin-icon"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/254722316721?text=Hi%2C%20I%20found%20you%20on%20the%20website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                aria-label="WhatsApp"
                className="social-icon whatsapp-icon"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              WhatsApp
            </a>
          </li>
        </ul>
        <ul className="footer-links">
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
            <Link to="../404">🔐 Privacy Policy</Link>
          </li>
          <li>
            <Link to="../404">Terms of Use</Link>
          </li>
          <li>
            <Link to="../404">Cookie Policy</Link>
          </li>
          <li>Subscribe to Our Newsletter “We never spam.”</li>
        </ul>
        <div className="rights">
          <p>
            Experience the power of innovation with Powerdeed. Let&apos;s shape
            a brighter tomorrow, today.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Powerdeed Engineering Services.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
