import React from "react";

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
            <p className="mt-3">
              &copy;2025 Shreya Raut. All rights reserved.
            </p>
            <div className="social-icons d-flex gap-1 fs-4">
              <a
                href="https://www.linkedin.com/company/itfuturetech/?originalSubdomain=in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter-square" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          
          </div>
        {/* </div> */}
    </footer>
  );
}
export default Footer;
