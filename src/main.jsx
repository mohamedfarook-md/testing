// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { BrowserRouter } from "react-router-dom";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// )



// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './styles/global1.css';
// import './styles/global.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );






import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './styles/UserGlobal.css';
import './styles/DriverGlobal.css';
import './styles/AdminGlobals.css';
import './styles/LandingPageGlobal.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
