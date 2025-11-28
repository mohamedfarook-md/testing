import React from "react";
import tripsData from "../data/trips.json";

export default function Trips({ historyView = false, rides }) {
  // if historyView true, show tripsData.history otherwise show tripsData.current
  const trips = historyView ? tripsData.history : tripsData.current;

  return (
    <div id="trips" className="section">
      <h1 className="page-title">{historyView ? "Ride History" : "My Trips"}</h1>
      <div className="driver-trips-grid">
        {trips.map((t, idx) => (
          <div className="driver-trip-card" key={idx}>
            <span className={`driver-trip-status ${t.status.toLowerCase()}`}>{t.status}</span>
            <div className="ride-header">
              <div className="ride-customer">
                <div className="customer-avatar">{t.initials}</div>
                <div className="customer-details">
                  <h4>{t.name}</h4>
                  <div className="ride-time"><i className="far fa-calendar"></i> {t.time}</div>
                </div>
              </div>
              <div className="ride-amount" style={t.status.toLowerCase() === "cancelled" ? { textDecoration: "line-through", opacity: 0.6 } : {}}>
                ₹{t.amount}
              </div>
            </div>

            <div className="ride-locations">
              <div className="location-item">
                <div className="location-marker pickup"></div>
                <div className="location-text"><i className="fas fa-map-marker-alt"></i> {t.pickup}</div>
              </div>
              <div className="location-item">
                <div className="location-marker dropoff"></div>
                <div className="location-text"><i className="fas fa-map-marker-alt"></i> {t.drop}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}