import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/ShreyaPortfolio/media/images/portfoliobg.png')",
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
            <h1 className="mb-2">Hey! It's me Shreya,</h1>
            <i><p className="fs-2">Crafting modern full-stack products that <br/> users value and businesses trust.</p></i>
            <button className="hero-btn">Know me better</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
