import React, { useState, useRef, useEffect } from "react";

import {
  FaRoute,
  FaCar,
  FaMapMarkedAlt,
  FaTimesCircle,
} from "react-icons/fa";

const TripCard = () => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  // Toggle expand/collapse
  const toggleCard = () => setExpanded((prev) => !prev);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`float-card trip-card ${expanded ? "expanded" : ""}`}
      onClick={toggleCard}
    >
      {!expanded && (
        <div className="trip-icon">
          <FaRoute />
        </div>
      )}

      {expanded && (
        <div className="trip-details">
          <div className="trip-header">
            <div className="trip-status">
              <FaCar />
            </div>
            <h3>Current Trip</h3>
          </div>

          <div className="trip-info-row">
            <span className="trip-info-label">Driver</span>
            <span className="trip-info-value">Ramesh Kumar</span>
          </div>

          <div className="trip-info-row">
            <span className="trip-info-label">Vehicle</span>
            <span className="trip-info-value">Honda City</span>
          </div>

          <div className="trip-info-row">
            <span className="trip-info-label">Plate Number</span>
            <span className="trip-info-value">TN 01 AB 1234</span>
          </div>

          <div className="trip-info-row">
            <span className="trip-info-label">ETA</span>
            <span className="trip-info-value">12 minutes</span>
          </div>

          <div className="trip-info-row">
            <span className="trip-info-label">Fare</span>
            <span className="trip-info-value">₹285</span>
          </div>

          <div className="trip-actions">
            <button className="trip-btn trip-btn-primary">
              <FaMapMarkedAlt /> Track Trip
            </button>
            <button className="trip-btn trip-btn-secondary">
              <FaTimesCircle /> End Trip
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripCard;