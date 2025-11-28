import React, { useState } from "react";
import tripsData from "../data/trips.json";

export default function History() {
  const [filter, setFilter] = useState("All");

  // Filter function
  const filteredTrips = tripsData.history.filter((t) => {
    if (filter === "All") return true;
    return t.status === filter;
  });

  return (
    <div id="trips" className="section">
      <h1 className="page-title">Ride History</h1>

      {/* Filter Buttons */}
      <div className="history-filters" style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
        {["All", "Completed", "Cancelled"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`filter-btn ${filter === item ? "active" : ""}`}
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "8px",
              border: "1px solid var(--gray-medium)",
              background: filter === item ? "var(--primary-red)" : "white",
              color: filter === item ? "white" : "var(--gray-dark)",
              cursor: "pointer",
              fontWeight: 500
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Trips List */}
      <div className="driver-trips-grid">
        {filteredTrips.length === 0 ? (
          <p style={{ color: "var(--gray-dark)" }}>No {filter} Rides Found</p>
        ) : (
          filteredTrips.map((t, idx) => (
            <div className="driver-trip-card" key={idx}>
              <span className={`driver-trip-status ${t.status.toLowerCase()}`}>{t.status}</span>
              <div className="ride-header">
                <div className="ride-customer">
                  <div className="customer-avatar">{t.initials}</div>
                  <div className="customer-details">
                    <h4>{t.name}</h4>
                    <div className="ride-time">
                      <i className="far fa-calendar"></i> {t.time}
                    </div>
                  </div>
                </div>
                <div
                  className="ride-amount"
                  style={
                    t.status.toLowerCase() === "cancelled"
                      ? { textDecoration: "line-through", opacity: 0.6 }
                      : {}
                  }
                >
                  ₹{t.amount}
                </div>
              </div>

              <div className="ride-locations history">
                <div className="location-item">
                  <div className="location-marker pickup"></div>
                  <div className="location-text">
                    <i className="fas fa-map-marker-alt"></i> {t.pickup}
                  </div>
                </div>
                <div className="location-item">
                  <div className="location-marker dropoff"></div>
                  <div className="location-text">
                    <i className="fas fa-map-marker-alt"></i> {t.drop}
                  </div>
                </div>
              </div>

              {t.status === "Cancelled" ? (
                <div
                  style={{
                    marginTop: "1rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--gray-medium)",
                    color: "var(--primary-red)",
                  }}
                >
                  Cancelled by Rider
                </div>
              ) : (
                <div
                  style={{
                    marginTop: "1rem",
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--gray-medium)",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ color: "var(--gray-dark)" }}>
                    <i className="fas fa-route"></i> {t.distance}
                  </span>

                  <span style={{ color: "var(--gray-dark)" }}>
                    <i className="far fa-clock"></i> {t.duration}
                  </span>

                  <span style={{ color: "var(--yellow-star)" }}>
                    <i className="fas fa-star"></i> {t.rating}
                  </span>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}