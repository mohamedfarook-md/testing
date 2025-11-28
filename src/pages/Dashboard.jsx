import React, { useState } from "react";
import dashboardData from "../data/dasboard.json";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

export default function Dashboard({ driver, rides }) {
  const [chartRange, setChartRange] = useState("month");
  const stats = dashboardData.stats;
  const newRides = dashboardData.newRides;

  const data = {
    labels: dashboardData.charts[chartRange].labels,
    datasets: [
      {
        label: "Earnings",
        data: dashboardData.charts[chartRange].values,
        borderColor: "#e63946",
        backgroundColor: (ctx) => {
          const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          g.addColorStop(0, "rgba(230,57,70,0.3)");
          g.addColorStop(1, "rgba(230,57,70,0.05)");
          return g;
        },
        borderWidth: 3,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div id="dashboard" className="section active">
      <h1 className="page-title">Driver Dashboard</h1>

      <div className="stats-grid">
        {stats.map((s, idx) => (
          <div key={idx} className={`stat-card ${s.variant || ""}`}>
            <div className="stat-header">
              <div className="stat-label">{s.label}</div>
              <div className="stat-icon"><i className={`fas ${s.icon}`} /></div>
            </div>
            <div className="stat-value">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Earnings</h2>
          <div className="chart-filters">
            {["week","month","year"].map((r) => (
              <button key={r} className={`filter-btn ${chartRange === r ? "active" : ""}`} onClick={() => setChartRange(r)}>
                {r[0].toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="chart-container">
          <Line data={data} options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { ticks: { callback: (v) => "₹" + Number(v).toLocaleString() }, grid: { color: "rgba(0,0,0,0.05)" } },
              x: { grid: { display: false } }
            }
          }} />
        </div>
      </div>

      <div className="rides-section" id="rides-section">
        <div className="rides-header">
          <h2 className="chart-title">New Ride Requests</h2>
          <div className="new-ride-badge">
            <span>{newRides.length}</span>
            <span>New</span>
          </div>
        </div>

        {newRides.map((ride, i) => (
          <div key={i} className="ride-card">
            <div className="ride-header">
              <div className="ride-customer">
                <div className="customer-avatar">{ride.initials}</div>
                <div className="customer-details">
                  <h4>{ride.customer}</h4>
                  <div className="ride-time"><i className="far fa-clock"></i> {ride.timeAgo}</div>
                </div>
              </div>
              <div className="ride-amount">₹{ride.fare}</div>
            </div>

            <div className="ride-locations">
              <div className="location-item">
                <div className="location-marker pickup"></div>
                <div className="location-text"><i className="fas fa-map-marker-alt"></i> {ride.pickup}</div>
              </div>
              <div className="location-item">
                <div className="location-marker dropoff"></div>
                <div className="location-text"><i className="fas fa-map-marker-alt"></i> {ride.drop}</div>
              </div>
            </div>

            <div className="ride-footer">
              <button className="action-btn btn-view">View Details</button>
              <button className="action-btn btn-accept">Accept Ride</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}