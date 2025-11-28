import React, { useState } from "react";
import earningsData from "../data/earnings.json";
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

export default function Earnings() {
  const [range, setRange] = useState("month");
  const data = {
    labels: earningsData.charts[range].labels,
    datasets: [{
      label: "Earnings",
      data: earningsData.charts[range].values,
      borderColor: "#e63946",
      backgroundColor: (ctx) => {
        const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
        g.addColorStop(0, "rgba(230,57,70,0.3)");
        g.addColorStop(1, "rgba(230,57,70,0.05)");
        return g;
      },
      fill: true,
      tension: 0.4,
      borderWidth: 3,
    }]
  };

  return (
    <div id="earnings" className="section">
      <h1 className="page-title">Earnings</h1>

      <div className="earnings-cards">
        {earningsData.cards.map((c, i) => (
          <div className="earnings-card" key={i} style={{ borderLeftColor: c.borderColor }}>
            <h3><i className={`fas ${c.icon}`}></i> {c.label}</h3>
            <div className="amount">{c.amount}</div>
          </div>
        ))}
      </div>

      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Earnings Overview</h2>
          <div className="chart-filters">
            {["week","month","year"].map(r => (
              <button key={r} className={`filter-btn ${range===r ? "active":""}`} onClick={()=>setRange(r)}>
                {r[0].toUpperCase()+r.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="chart-container">
          <Line data={data} options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }},
            scales: {
              y: { ticks: { callback: v => '₹' + v.toLocaleString() }, grid: { color: 'rgba(0,0,0,0.05)' } },
              x: { grid: { display: false } }
            }
          }} />
        </div>
      </div>

      <div className="transaction-list">
        <h2 className="chart-title" style={{marginBottom:'1.5rem'}}>Recent Transactions</h2>
        {earningsData.transactions.map((t, i) => (
          <div className="transaction-item" key={i}>
            <div className="transaction-info">
              <div className="transaction-icon" style={{background: t.iconBg, color: t.iconColor}}>
                <i className={`fas ${t.icon}`}></i>
              </div>
              <div>
                <h4>{t.title}</h4>
                <p style={{color:'#666',fontSize:'0.85rem'}}>{t.desc}</p>
              </div>
            </div>
            <div>
              <div className="transaction-amount" style={{color: t.amountColor}}>{t.amount}</div>
              <p style={{color:'#666',fontSize:'0.85rem',textAlign:'right'}}>{t.timeAgo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}