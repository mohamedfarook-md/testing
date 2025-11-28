
import React, { useEffect, useState } from "react";

import welcome from "../../assets/images/welcome-img.jpg";

const WhoWeAre = () => {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState({ happy: 0, cars: 0, km: 0 });

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("who-we-are");
      if (section) {
        const rect = section.getBoundingClientRect();
        // trigger animation only when section is visible
        if (rect.top < window.innerHeight - 100 && !inView) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);

  // Counter animation
  useEffect(() => {
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 2; // smoother animation
        setCounts({
          happy: Math.min(start, 100),
          cars: Math.min(start * 2, 200),
          km: Math.min(start * 120, 12000),
        });
        if (start >= 100) clearInterval(interval);
      }, 40);
    }
  }, [inView]);

  return (
    <div id="who-we-are" className="container my-1 who-section">
      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
          <h2 className="fw-bold mb-6">Who We Are ?</h2>
            
          <h6 className="text">
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of all the Lorem
            Ipsum generators on the Internet tends to repeat predefined chunks
            as necessary, making this an web evolved over the years, sometimes
            by accident.
          </h6>
         
          <a href="#" className="see-link">
            See All Vehicles <i className="bi bi-arrow-right-circle"></i>
          </a>

          <div className="row text-center mt-5">
            <div className="col-4">
              <h3 className="fw-bold counter-text">{counts.happy}%</h3>
              <p className="text-muted">Happy Customer</p>
            </div>
            <div className="col-4">
              <h3 className="fw-bold counter-text">{counts.cars}+</h3>
              <p className="text-muted">Luxury Cars</p>
            </div>
            <div className="col-4">
              <h3 className="fw-bold counter-text">
                {counts.km.toLocaleString()}↑
              </h3>
              <p className="text-muted">Kilometers Driven</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-6 col-md-12 text-center">
          <img src={welcome} alt="Taxi" className="img-fluid taxi-image" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
