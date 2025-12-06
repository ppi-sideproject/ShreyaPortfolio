import React from "react";

function project() {
  const aboutItems = [
    { src: "/ShreyaPortfolio/media/images/Project1.jpg", text: "Wanderlust", link: "https://wanderlust-i2xa.onrender.com/" },
    { src: "/ShreyaPortfolio/media/images/Project2.jpg", text: "SkyCast", link: "https://skycastweartherlyy.netlify.app/" },
    { src: "/ShreyaPortfolio/media/images/Project4.jpeg", text: "StockBridge", link: "" },
  ];

  return (
    <div style={{
        backgroundImage: "url('/ShreyaPortfolio/media/images/HeroBg.png')",
        // backgroundColor: "black", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        padding: "50px 0",
        color: "white"
      }}>
      <div className="container text-whiye">
        <div className="row text-center mb-5">
          <div className="col mb-3">
            {/* <h1 className="mb-3">My Work</h1> */}
          </div>
        </div>

        <div className="row justify-content-center">
          {aboutItems.map((item, index) => {
            const CardContent = (
              <div
                className="position-relative text-white rounded shadow overflow-hidden"
                style={{
                  width: "350px",
                  height: "260px",
                  borderRadius: "20px",
                  cursor: item.link ? "pointer" : "default",
                }}
              >
                <img
                  src={item.src}
                  alt={`Project ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <h5
                  className="position-absolute top-50 start-50 translate-middle fw-bold"
                  style={{ textShadow: "2px 2px 5px rgba(0,0,0,0.7)" }}
                >
                  {item.text}
                </h5>
              </div>
            );

            return (
              <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center" key={index}>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default project;
