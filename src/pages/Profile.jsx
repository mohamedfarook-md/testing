import React from "react";
import profileData from "../data/profile.json";

export default function Profile() {
  return (
    <div id="profile" className="section">
      <h1 className="page-title">Profile</h1>

      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-avatar-large">{profileData.initials}</div>
          <h2>{profileData.fullName}</h2>
          <p style={{color:'#666', margin:'0.5rem 0'}}>ID: {profileData.id}</p>

          <div className="profile-rating">
            {Array.from({length: Math.floor(profileData.rating)}).map((_,i) => <i key={i} className="fas fa-star"></i>)}
            {profileData.rating % 1 >= 0.5 && <i className="fas fa-star-half-alt"></i>}
            <span style={{color:'#1a1b2e', marginLeft:8, fontWeight:'bold'}}>{profileData.rating}</span>
          </div>

          <div className="profile-stats-grid">
            {profileData.stats.map((s,i)=>(
              <div className="profile-stat" key={i}>
                <div className="profile-stat-value">{s.value}</div>
                <div className="profile-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <button className="action-btn btn-accept" style={{width:'100%', marginTop:16}}>
            <i className="fas fa-edit"></i> Edit Profile
          </button>
        </div>

        <div className="profile-details">
          <h3 style={{color:'#2b2d42', marginBottom:16, fontSize:18}}>Personal Information</h3>
          {profileData.personal.map((p,i)=>(
            <div className="detail-row" key={i}>
              <span className="detail-label"><i className={`fas ${p.icon}`}></i> {p.label}</span>
              <span className="detail-value">{p.value}</span>
            </div>
          ))}

          <h3 style={{color:'#2b2d42', margin:'2rem 0 1rem', fontSize:18}}>Vehicle Information</h3>
          {profileData.vehicle.map((p,i)=>(
            <div className="detail-row" key={i}>
              <span className="detail-label"><i className={`fas ${p.icon}`}></i> {p.label}</span>
              <span className="detail-value">{p.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}