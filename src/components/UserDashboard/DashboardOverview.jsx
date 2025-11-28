import React, { useState } from 'react';
import RideModal from './rideDetails';
import ridesData from '../../data/rides.json'; // JSON file

export default function DashboardOverview({ wallet, offers }) {
  const [selectedRide, setSelectedRide] = useState(null);

  const totalRides = ridesData.length;
  const scheduled = ridesData.filter(r => r.status.toLowerCase() === 'scheduled').length;
  const activeOffers = offers.filter(o => o.active).length;

  return (
    <>
      <h2 className="section-title">Dashboard Overview</h2>

      <div className="user-stats-grid">
        <div className="user-stat-card red">
          <div className="user-stat-content">
            <div>
              <div className="user-stat-label">Total Rides</div>
              <div className="user-stat-value">{totalRides}</div>
            </div>
            <div className="user-stat-icon"><i className="fas fa-car"></i></div>
          </div>
        </div>

        <div className="user-stat-card blue">
          <div className="user-stat-content">
            <div>
              <div className="user-stat-label">Wallet Balance</div>
              <div className="user-stat-value">₹{wallet.balance}</div>
            </div>
            <div className="user-stat-icon"><i className="fas fa-wallet"></i></div>
          </div>
        </div>

        <div className="user-stat-card green">
          <div className="user-stat-content">
            <div>
              <div className="user-stat-label">Scheduled</div>
              <div className="user-stat-value">{scheduled}</div>
            </div>
            <div className="user-stat-icon"><i className="fas fa-calendar"></i></div>
          </div>
        </div>

        <div className="user-stat-card purple">
          <div className="user-stat-content">
            <div>
              <div className="user-stat-label">Active Offers</div>
              <div className="user-stat-value">{activeOffers}</div>
            </div>
            <div className="user-stat-icon"><i className="fas fa-tags"></i></div>
          </div>
        </div>
      </div>

      <div className="user-card">
        <h3 className="user-card-title">Recent Rides</h3>
        <div className="user-rides-container">
          {ridesData.slice(0, 5).map((r) => (
            <div className="user-ride-card" key={r.id}>
              <div className="user-ride-top">
                <div className="user-ride-icon">
                  <i className={`${r.vehicle === "Bike" ? "fas fa-motorcycle" : r.vehicle === "Car" ? "fas fa-car" : "fas fa-truck-pickup"}`}></i>
                </div>
                <div className="user-ride-info">
                  <div className="user-ride-location">{r.route}</div>
                  <div className="user-ride-date">{r.date}</div>
                </div>
              </div>

              <div className="user-ride-details">
                <div>
                  <span className="user-lbl">Fare</span>
                  <span className="user-value">₹{r.fare}</span>
                </div>
                <div>
                  <span className="user-lbl">Status</span>
                  <span className={`badge status-${r.status.toLowerCase()}`}>{r.status}</span>
                </div>
              </div>

              <button className="user-ride-btn" onClick={() => setSelectedRide(r)}>View Details</button>
            </div>
          ))}
        </div>
      </div>

      <RideModal ride={selectedRide} onClose={() => setSelectedRide(null)} />
    </>
  );
}