import React from "react";

function MyExp() {
    return ( 
        <div
      style={{
        // backgroundImage: "url('/ShreyaPortfolio/media/images/about1.png')",
        backgroundColor: "#f8f9fa", 
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
          <div className="col-6">
            <h1 className="mb-3">Work History</h1>
            <h3><i>Experience</i></h3>
            <p style={{ textAlign: "justify", lineHeight: "2" }}>
              I have worked with some of the most innovative industry leaders to help build their top-notch products.
            </p>
          </div>
          <div className="col-6"></div>
        </div>
        </div>
      </div>
     );
}

export default MyExp;