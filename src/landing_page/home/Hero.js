import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/ShreyaPortfolio/media/images/p4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <div className="container text-black py-5">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8">
            <h1 className="mb-2">Shreya Raut</h1>
            <p className="fs-1">
              Fullstack Developer
            </p>
            <p className="fs-5">A passionate developer who loves turning ideas into code. <br/> I enjoy building products, solving real-world problems, and <br/> continuously learning new technologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
