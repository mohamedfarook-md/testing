import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import driverData from "../../data/profile.json";

export default function Navbar() {
  const [online, setOnline] = useState(true);

  return (
    <nav className="driver-navbar">
      <div className="driver-navbar-left">
        <button
          className="driver-menu-btn"
          onClick={() => document.getElementById("sidebar").classList.toggle("open")}
          aria-label="toggle sidebar"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="driver-navbar-brand">Rydmate</div>
      </div>

      <div className="driver-navbar-right">
        <div className="driver-online-toggle">
          <span className="online-text">{online ? "Online" : "Offline"}</span>
          <div
            className={`driver-toggle-switch ${online ? "active" : ""}`}
            onClick={() => setOnline(!online)}
            role="button"
            aria-label="toggle-online"
          >
            <div className="driver-toggle-slider" />
          </div>
        </div>

        <div className="driver-notification-icon" title="Notifications">
          <a href="/driver/dashboard#rides-section" style={{ textDecoration: "none", color: "#fff" }}>
            <FontAwesomeIcon icon={faBell} />
            <span className="driver-notification-badge">3</span>
          </a>
        </div>

        <div className="driver-driver-info">
          <div className="driver-details">
            <div className="driver-name">{driverData.fullName}</div>
            <div className="driver-id">ID: {driverData.id}</div>
          </div>
          <div className="driver-driver-avatar">{driverData.initials}</div>
        </div>
      </div>
    </nav>
  );
}