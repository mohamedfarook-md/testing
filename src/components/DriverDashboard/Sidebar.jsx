

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, 
  faCar, 
  faWallet, 
  faHistory, 
  faUser, 
  faCog, 
  faSignOutAlt 
} from "@fortawesome/free-solid-svg-icons";

const items = [
  { to: "/driver/dashboard", label: "Dashboard", icon: faHome },
  { to: "/driver/trips", label: "My Trips", icon: faCar },
  { to: "/driver/earnings", label: "Earnings", icon: faWallet },
  { to: "/driver/history", label: "Ride History", icon: faHistory },
  { to: "/driver/profile", label: "Profile", icon: faUser },
  { to: "/driver/settings", label: "Settings", icon: faCog },
];

export default function Sidebar() {

  const navigate = useNavigate();   // ✅ Add this

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("userData");  
      navigate("/");  // ✅ Redirect to landing page
    }
  };

  return (
    <aside className="driver-sidebar" id="driver-sidebar">
      <ul className="driver-sidebar-menu">
        {items.map((it) => (
          <li key={it.to}>
            <NavLink
              to={it.to}
              className={({ isActive }) =>
                `driver-sidebar-item ${isActive ? "active" : ""}`
              }
              onClick={() => {
                if (window.innerWidth <= 768)
                  document.getElementById("driver-sidebar").classList.remove("open");
              }}
            >
              <FontAwesomeIcon icon={it.icon} style={{ width: 20 }} />
              <span>{it.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="driver-logout-btn" onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>Logout</span>
      </button>
    </aside>
  );
}
