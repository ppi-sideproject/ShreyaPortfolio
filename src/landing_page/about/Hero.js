import React from 'react';

function Hero() {
    return ( 
      <div 
      style={{
        // backgroundImage: "url('/ShreyaPortfolio/media/images/about1.png')",
        backgroundColor: "black", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        padding: "50px 0",
        color: "white"
      }}>
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 text-center'>
                    <img src='/ShreyaPortfolio/media/images/Profile.jpg' style={{width:"80%", height:"80%"}} alt='img'/>
                </div>
                <div className='col-6 mt-5'>
                    <h1 className='mb-5 fs-2'>A fresher full-stack developer shaping ideas into clean code and thoughtful design.</h1>
                    {/* <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                   
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p> */}
                    <p>I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.</p> <br/>
                    <button className="hero-button">My Resume</button>
                </div>
            </div>
        </div>
        </div> 
    );
}

export default Hero;  