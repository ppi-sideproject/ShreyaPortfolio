import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/ShreyaPortfolio/media/images/About.jpg')",
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
            <h1 className="mb-2">About</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
