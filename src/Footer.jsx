import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-white">

      <div className="container pt-4">
        <section className="mb-4">

          <a className="btn btn-outline-light btn-floating m-1" href="#">
            <i className="bi bi-facebook"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#">
            <i className="bi bi-twitter"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#">
            <i className="bi bi-instagram"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#">
            <i className="bi bi-linkedin"></i>
          </a>

          <a className="btn btn-outline-light btn-floating m-1" href="#">
            <i className="bi bi-github"></i>
          </a>

        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        © 2026 Copyright:
        <span className="ms-2">MohamedHamada.com</span>
      </div>

    </footer>
  );
};

export default Footer;