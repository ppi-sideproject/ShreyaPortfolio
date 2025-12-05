import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub  } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-top mt-5" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container py-5">
        <div className="row align-items-center justify-content-between">
  <div className="col-auto">
    <p className="mt-3 mb-0">&copy;2025 Shreya Raut. All rights reserved.</p>
  </div>

  <div className="col-auto">
    <div className="social-icons d-flex gap-3 fs-4">
      <a
        href="https://www.linkedin.com/in/shreyaraut11/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://github.com/Shreyyaraut"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
}
export default Footer;
