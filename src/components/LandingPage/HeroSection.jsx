
import React, { useState } from "react";

import {
  FaShieldAlt,
  FaClock,
  FaTags,
  FaRoute,
  FaSyncAlt,
  FaMapMarkerAlt,
  FaLocationArrow,
  FaCar,
  FaArrowRight,
} from "react-icons/fa";
import { FaCalendar, FaCalendarCheck } from "react-icons/fa6";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSwitch = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Section */}
        <div className="hero-left">
          <div className="hero-quote">
            <h1>
              Your Journey Starts <span className="highlight">Here</span>
            </h1>
            <p>Book a ride anytime — Fast, Reliable & Affordable</p>

            <div className="hero-features">
              <div className="hero-feature-item">
                <div className="feature-icon">
                  <FaShieldAlt />
                </div>
                <span>24/7 Safe & Secure Rides</span>
              </div>

              <div className="hero-feature-item">
                <div className="feature-icon">
                  <FaClock />
                </div>
                <span>Real-Time Trip Tracking</span>
              </div>

              <div className="hero-feature-item">
                <div className="feature-icon">
                  <FaTags />
                </div>
                <span>Best Prices Guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-right">
          <div className="booking-tabs">
            <div className="tabs">
              <button
                className={`tab-btn ${activeTab === 0 ? "active" : ""}`}
                onClick={() => handleTabSwitch(0)}
              >
                <FaRoute /> Single Trip
              </button>
              <button
                className={`tab-btn ${activeTab === 1 ? "active" : ""}`}
                onClick={() => handleTabSwitch(1)}
              >
                <FaSyncAlt /> Round Trip
              </button>
            </div>

            {/* Single Trip Form */}
            {activeTab === 0 && (
              <div className="tab-content active">
                <form>
                  <div className="form-group">
                    <FaMapMarkerAlt />
                    <input type="text" placeholder="Pickup Location" required />
                  </div>
                  <div className="form-group">
                    <FaLocationArrow />
                    <input type="text" placeholder="Drop Location" required />
                  </div>
                  <div className="form-group">
                    <FaCalendar />
                    <input type="datetime-local" required />
                  </div>
                  <div className="form-group">
                    <FaCar />
                    <select required>
                      <option value="">Select Vehicle Type</option>
                      <option value="bike">Bike Taxi</option>
                      <option value="auto">Auto</option>
                      <option value="car">Car</option>
                    </select>
                  </div>
                  <button type="submit" className="book-btn">
                    Book Now <FaArrowRight />
                  </button>
                </form>
              </div>
            )}

            {/* Round Trip Form */}
            {activeTab === 1 && (
              <div className="tab-content active">
                <form>
                  <div className="form-group">
                    <FaMapMarkerAlt />
                    <input type="text" placeholder="Pickup Location" required />
                  </div>
                  <div className="form-group">
                    <FaLocationArrow />
                    <input type="text" placeholder="Destination" required />
                  </div>
                  <div className="form-group">
                    <FaCalendar />
                    <input type="date" placeholder="Departure Date" required />
                  </div>
                  <div className="form-group">
                    <FaCalendarCheck />
                    <input type="date" placeholder="Return Date" required />
                  </div>
                  <div className="form-group">
                    <FaCar />
                    <select required>
                      <option value="">Select Vehicle Type</option>
                      <option value="bike">Bike Taxi</option>
                      <option value="auto">Auto</option>
                      <option value="car">Car</option>
                    </select>
                  </div>
                  <button type="submit" className="book-btn">
                    Book Now <FaArrowRight />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
