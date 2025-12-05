import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub  } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-top mt-5" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container py-5">
        <div className="row">
          {/* Logo & Social */}
          {/* <div className="col-12 col-md-3 mb-4"> */}
          {/* <img
              src="media/images/IFTlogo.png"
              alt="logo"
              style={{ maxWidth: "120px", height: "auto" }}
            /> */}
          <p className="mt-3">&copy;2025 Shreya Raut. All rights reserved.</p>
          <div className="social-icons d-flex gap-2 fs-4">
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
      {/* </div> */}
    </footer>
  );
}
export default Footer;
