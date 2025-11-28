
import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Sidebar(){
  const closeOnMobile = () => {
    document.getElementById('sidebar')?.classList.remove('open');
    document.getElementById('sidebarOverlay')?.classList.remove('show');
  };

  return (
    <>
      <div id="sidebarOverlay" className="sidebar-overlay" onClick={closeOnMobile}></div>

      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <NavLink to="/admin/overview" className={({isActive}) => 'sidebar-item' + (isActive? ' active' : '')} onClick={closeOnMobile}>
              <i className="fa-solid fa-chart-line"></i><span>Overview</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/customers" className={({isActive}) => 'sidebar-item' + (isActive? ' active' : '')} onClick={closeOnMobile}>
              <i className="fa-solid fa-users"></i><span>Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/drivers" className={({isActive}) => 'sidebar-item' + (isActive? ' active' : '')} onClick={closeOnMobile}>
              <i className="fa-solid fa-car"></i><span>Drivers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/trips" className={({isActive}) => 'sidebar-item' + (isActive? ' active' : '')} onClick={closeOnMobile}>
              <i className="fa-solid fa-route"></i><span>Trip Tracking</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/deals" className={({isActive}) => 'sidebar-item' + (isActive? ' active' : '')} onClick={closeOnMobile}>
              <i className="fa-solid fa-tags"></i><span>Deals</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/promotions" className={({isActive}) => 'sidebar-item' + (isActive? ' active' : '')} onClick={closeOnMobile}>
              <i className="fa-solid fa-bullhorn"></i><span>Promotions</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/salary" className={({isActive}) => 'sidebar-item' + (isActive? ' active' : '')} onClick={closeOnMobile}>
              <i className="fa-solid fa-wallet"></i><span>Salary Management</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/revenue" className={({isActive}) => 'sidebar-item' + (isActive? ' active' : '')} onClick={closeOnMobile}>
              <i className="fa-solid fa-dollar-sign"></i><span>Revenue</span>
            </NavLink>
          </li>
        </ul>

        <button className="logout-btn" onClick={() => { if(window.confirm('Are you sure want to logout?')) window.location.reload(); }}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <span>Logout</span>
        </button>
      </aside>
    </>
  );
}
