
import React from 'react';

import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer-section text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">About Rydmate</h5>
            <p>
              Search for will uncover many web sites variables onto of passages of lorem ipsum
              available but the majority the words all predefined humour to met chunks recently with
              desktop.
            </p>
            <div className="d-flex gap-2 mt-1">
              <a href="#"><i className="fab fa-facebook-f "></i></a>
              <a href="#"><i className="fab fa-twitter "></i></a>
              <a href="#"><i className="fab fa-linkedin-in "></i></a>
              <a href="#"><i className="fab fa-pinterest-p"></i></a>
              <a href="#"><i className="fab fa-instagram "></i></a>
            </div>
          </div>

          {/* Explore Links
           */}

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li>About Us</li>
              <li>Services</li>
              <li>Our Fleets</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* <div className="col-md-2 mb-4">
            <h5 className="fw-bold mb-3">Location</h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.194217444581!2d78.33586697570455!3d10.9486969559912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa4862a895fc7b%3A0x6e386bd33fe2bc2c!2sLalapettai%2C%20Tamil%20Nadu%20639105!5e0!3m2!1sen!2sin!4v1761298078464!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div> */}
          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li><i className="fas fa-home me-2"></i>10A, Rydmate, San Andreno, United States.</li>
              <li><i className="fas fa-envelope me-2"></i>rydmate@booking.com</li>
              <li><i className="fas fa-phone me-2"></i>+1-333-444-555</li>
              <li><i className="fas fa-globe me-2"></i>www.rydmate.com</li>
            </ul>
          </div>
        </div>

        <hr className="bg-white" />

        {/* Bottom Bar */}
        <div className="d-flex justify-content-between align-items-center flex-wrap text-center text-md-start">
          <p className="mb-0">
            &copy; Copyrights 2018 <span className="text-danger">Prime Cab</span>. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
