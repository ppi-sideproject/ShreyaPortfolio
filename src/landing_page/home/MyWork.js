import React from "react";

function MyWork() {
  return (
    <div
      style={{
        backgroundImage: "url('ShreyaPortfolio/media/images/about1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <div className="container text-black">
        <div className="row mb-5">
          <div className="col">
            <h1 className="mb-3">My Work</h1>
            <p style={{ textAlign: "justify", lineHeight: "2" }}>
              I'm Shreya Raut, a Fullstack Developer with solid experience in
              building responsive, scalable, and user-focused web applications.
              I specialize in MERN stack development with strong skills in API
              integration, UI/UX implementation, and clean, maintainable code. I
              also bring real industry exposure through my Software Developer
              Internship and my Data Analytics Internship at Tata Steel Ltd.,
              where I worked on real-world applications, data insights, and
              business-oriented solutions.
            </p>
          </div>
        </div>
        </div>
        {/* <div className="skills-marquee text-white text-center"> */}
          {/* <h1 className="mb-5">Skills</h1>
          <div className="marquee">
            <div className="marquee-content fs-3">
              Fullstack Development ✦ MERN Stack ✦ API Integration ✦ UI/UX
              Implementation ✦ Responsive Websites ✦ Data Analytics ✦ Software
              Development ✦ Fullstack Development ✦ MERN Stack ✦ API Integration
              ✦ UI/UX Implementation ✦ Responsive Websites ✦ Data Analytics ✦
              Software Development ✦
            </div>
          </div> */}
        {/* </div> */}
      </div>
    
  );
}

export default MyWork;
