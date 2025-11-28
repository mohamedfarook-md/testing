// import React, { useState } from "react";
// import { FaApple, FaAndroid, FaSearch, FaCalendarAlt, FaClock } from "react-icons/fa";
// import "./Carousel.css";


// const Carousel = () => {
//   const [tripType, setTripType] = useState("oneway");

//   return (
//     <div className="hero-section">
//       <div className="overlay"></div>
//       <div className="container text-white py-5">
//         <div className="row align-items-center">
//           {/* Left Side Text */}
//           <div className="col-md-7 text-center text-md-start">
//             <p className="lead">
//               More recently with desktop publishing software including versions
//             </p>
//             <h1 className="display-5 fw-bold text-white">
//               Upto <span className="text-danger">25% off</span> on first booking <br />
//               through your app
//             </h1>
//             {/* <div className="mt-4">
//               <button className="btn btn-danger me-3 px-2 py-3">
//                 <FaApple className="me-2" /> Download App
//               </button>
//               <button className="btn btn-outline-light px-1 py-3">
//                 <FaAndroid className="me-2" /> Download App
//               </button>
//             </div> */}
//           </div>

//           {/* Right Side Booking Box */}
//           <div className="col-md-4 d-flex justify-content-end mt-10 mt-md-0 mx-auto">
//             <div className="card booking-card shadow-lg border-0">
//               <div className="card-header d-flex justify-content-between p-2">
//                 <button
//                   className={`tab-btn ${tripType === "oneway" ? "active" : ""}`}
//                   onClick={() => setTripType("oneway")}
//                 >
//                   One Way
//                 </button>
//                 <button
//                   className={`tab-btn ${tripType === "twoway" ? "active" : ""}`}
//                   onClick={() => setTripType("twoway")}
//                 >
//                   Two Way
//                 </button>
//               </div>

//               <div className="card-body p-4">
//                 <div className="form-group mb-3 position-relative">
//                   <input type="text" className="form-control form-control-lg" placeholder="Pickup Locations" />
//                   <FaSearch className="input-icon" />
//                 </div>
//                 <div className="form-group mb-3 position-relative">
//                   <input type="text" className="form-control form-control-lg" placeholder="Drop Locations" />
//                   <FaSearch className="input-icon" />
//                 </div>
//                 <div className="form-group mb-3 position-relative">
//                   <input type="date" className="form-control form-control-lg" />
                  
//                   {/* <FaCalendarAlt className="input-icon" /> */}
//                 </div>
//                 <div className="form-group mb-3 position-relative">
//                   <input type="time" className="form-control form-control-lg" />
//                   {/* <FaClock className="input-icon" /> */}
//                 </div>

//                 <div className="form-check mb-3">
//                   <input type="checkbox" className="form-check-input" id="promoCode" />
//                   <label className="form-check-label" htmlFor="promoCode">
//                     I Have Promotional Code
//                   </label>
//                 </div>

//                 <button className="btn btn-danger w-100 py-3 fw-semibold">
//                   Search Cabs →
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;



import React, { useState } from "react";
import { FaApple, FaAndroid, FaSearch } from "react-icons/fa";


const Carousel = () => {
  const [tripType, setTripType] = useState("One Way");
  const [showDropdown, setShowDropdown] = useState(false);

  const options = ["One Way", "Two Way", "Round"];

  const handleSelect = (option) => {
    setTripType(option);
    setShowDropdown(false);
  };

  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="container text-white py-5">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-md-7 text-center text-md-start">
            <p className="lead">
              More recently with desktop publishing software including versions
            </p>
            <h1 className="display-5 fw-bold text-white">
              Upto <span className="text-danger">25% off</span> on first booking <br />
              through your app
            </h1>
          </div>

          {/* Right Side Booking Box */}
          <div className="col-md-4 d-flex justify-content-end mt-10 mt-md-0 mx-auto">
            <div className="card booking-card shadow-lg border-0">
              
              {/* Dropdown Header */}
              <div className="card-header position-relative p-2">
                <button
                  className="dropdown-btn w-100 text-center "
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  {tripType} <i className="bi bi-caret-down-fill ms-2"></i>
                </button>

                {showDropdown && (
                  <ul className="dropdown-menu show w-100 mt-2">
                    {options
                      .filter((opt) => opt !== tripType)
                      .map((opt) => (
                        <li key={opt}>
                          <button
                            className="dropdown-item"
                            onClick={() => handleSelect(opt)}
                          >
                            {opt}
                          </button>
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              {/* Card Body */}
              <div className="card-body p-4">
                <div className="form-group mb-3 position-relative">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Pickup Locations"
                  />
                  <FaSearch className="input-icon" />
                </div>

                <div className="form-group mb-3 position-relative">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Drop Locations"
                  />
                  <FaSearch className="input-icon" />
                </div>

                <div className="form-group mb-3 position-relative">
                  <input type="date" className="form-control form-control-lg" />
                </div>

                <div className="form-group mb-3 position-relative">
                  <input type="time" className="form-control form-control-lg" />
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="promoCode"
                  />
                  <label className="form-check-label" htmlFor="promoCode">
                    I Have Promotional Code
                  </label>
                </div>

                <button className="btn btn-danger w-100 py-3 fw-semibold">
                  Search Cabs →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Carousel;
