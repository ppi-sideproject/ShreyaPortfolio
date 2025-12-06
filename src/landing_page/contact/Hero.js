import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // mobile: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Required validation
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields!",
      });
      return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/i;
    if (!emailPattern.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address!",
      });
      return;
    }

    // Mobile validation
    // if (mobile.replace(/\D/g, "").length < 10) {
    //   setStatus({ type: "error", message: "Please enter a valid mobile number!" });
    //   return;
    // }

    setStatus({
      type: "success",
      message: "Submitted Successfully!",
    });

    setFormData({
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    });
  };
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
        color: "white",
      }}
    >
      <div className="container mt-2 mb-5">
        <div className="row">
          {/* <div className='col-6'>
                    <h2>Connect With Me</h2>
                </div> */}
          <div className="col-6">
            <h2>Connect With Me</h2>
            <h6>
              <i>Let's start a project together</i>
            </h6>
            <div className="card shadow-sm p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* <div className="mb-3">
                <PhoneInput
                  country={"in"}
                  value={formData.mobile}
                  onChange={(phone) =>
                    setFormData({ ...formData, mobile: phone })
                  }
                  inputProps={{
                    name: "mobile",
                    required: true,
                    className: "form-control",
                  }}
                  enableSearch
                />
              </div> */}

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Message *"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="text-center">
                  <button type="submit" className="hero-btn">
                    Submit
                  </button>
                </div>
              </form>

              {status.message && (
                <p
                  className="mt-3 text-center"
                  style={{ color: status.type === "success" ? "green" : "red" }}
                >
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
