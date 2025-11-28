import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Navbar1 = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`navbar-wrapper ${
        isCollapsed ? "collapsed-navbar" : "expanded-navbar"
      }`}
    >
      <div
        className="container-fluid bg-white py-5 border-bottom shadow-sm"
        onClick={toggleNavbar}
      >
        <div className="row align-items-center text-center text-md-start px-2">
    
          <div className="d-flex justify-content-center align-items-start flex-wrap w-100">
            {/* Logo */}
            <div className="col-md-3 d-flex align-items-center justify-content-center justify-content-md-start mb-3 mb-md-0">
              <h3
                className="text-danger fw-bold mb-0 me-2"
                style={{
                  fontFamily: "'Brush Script MT', cursive",
                  fontSize: "2.8rem",
                  cursor: "pointer",
                }}
              >
                Rydmate
              </h3>
            </div>

            {/* Address */}
            <div className="col-md-2 d-flex align-items-center justify-content-center mb-3 mb-md-0">
              <div
                className="rounded-circle border border-danger text-danger d-flex align-items-center justify-content-center me-2"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="bi bi-house-fill fs-2"></i>
              </div>
              <div className="text-start">
                <h6
                  className="text-danger fw-semibold mb-0"
                  style={{ fontSize: "0.9rem" }}
                >
                  Address
                </h6>
                <small className="text-secondary">Rydmate, United States</small>
              </div>
            </div>

            {/* Email */}
            <div className="col-md-3 d-flex align-items-center justify-content-center mb-3 mb-md-0">
              <div
                className="rounded-circle border border-danger text-danger d-flex align-items-center justify-content-center me-2"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="bi bi-envelope-fill fs-3"></i>
              </div>
              <div className="text-start">
                <h6
                  className="text-danger fw-semibold mb-0"
                  style={{ fontSize: "0.9rem" }}
                >
                  Email Us
                </h6>
                <small className="text-secondary">rydmate@booking.com</small>
              </div>
            </div>

            {/* Phone */}
            <div className="col-md-2 d-flex align-items-center justify-content-center justify-content-md-end">
              <div
                className="rounded-circle border border-danger text-danger d-flex align-items-center justify-content-center me-2"
                style={{ width: "50px", height: "50px" }}
              >
                <i className="bi bi-telephone-fill fs-3"></i>
              </div>
              <h6
                className="mb-0 text-danger fw-semibold"
                style={{ fontSize: "1rem" }}
              >
                +1-234-000-2345
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;





