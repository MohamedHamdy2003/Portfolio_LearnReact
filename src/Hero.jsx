import React from "react";

const Hero = () => {
  return (
    <section
      className="position-relative overflow-hidden text-white mx-4 mt-4 rounded-3"
      style={{ height: "80vh", marginBottom : "7rem" }}
    >
      <img
        src="/black-bg.jpg"
        className="position-absolute top-0 start-0 w-100 h-100 rounded"
        style={{ objectFit: "cover" }}
      />

      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      ></div>

      {/* Content */}
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <h1 className="display-3 fw-bold">Welcome to My Portfolio</h1>

        <button className="btn btn-primary btn-lg mt-3">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
