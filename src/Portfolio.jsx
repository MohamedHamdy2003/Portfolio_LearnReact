import React from "react";

const Portfolio = () => {
  const items = [
    "WEB DESIGN",
    "MOBILE DESIGN",
    "LOGO DESIGN",
    "WEB APPLICATION DEVELOPMENT",
    "MOBILE APPLICATION DEVELOPMENT",
    "PWA DEVELOPMENT",
  ];

  return (
    <section className="py-5 bg-light"
      style={{ marginBottom : "7rem" }}>
      <div className="container">
        <h1 className="mb-5">Portfolio</h1>

        <div className="row g-4 px-4 justify-content-center">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div
                className={`p-5 d-flex flex-column justify-content-center align-items-center text-white shadow rounded 
                ${index % 2 === 0 ? "bg-secondary" : "bg-dark"}`}
                style={{ height: "200px", maxWidth: "500px"}}
              >
                <h6 className="mb-3">{item}</h6>
                <div
                  style={{
                    width: "80px",
                    height: "2px",
                    backgroundColor: "white",
                    margin: "auto",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
