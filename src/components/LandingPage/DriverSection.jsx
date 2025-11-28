// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";   // <-- Added
// import "./WhoWeAre.css";
// import driver from "../../assets/images/driver.jpg";

// const DriverSection = () => {
//   const [inView, setInView] = useState(false);
//   const [counts, setCounts] = useState({ happy: 0, cars: 0, km: 0 });

//   // Scroll detection
//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("who-we-are");
//       if (section) {
//         const rect = section.getBoundingClientRect();
//         if (rect.top < window.innerHeight - 100 && !inView) {
//           setInView(true);
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [inView]);

//   return (
//     <div id="who-we-are" className="container my-1 who-section">
//       <div className="row align-items-center">

//         {/* Left Side */}
//         <div className="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
//           <h2 id="driver" className="fw-bold mb-3">Join as a Driver</h2>

//           <h6 className="text mb-4">
//             Lorem Ipsum passages, and more recently with desktop publishing
//             software like Aldus PageMaker including versions of all the Lorem
//             Ipsum generators on the Internet tends to repeat predefined chunks
//             as necessary.
//           </h6>

//           {/* ✅ Sign Up Button Added */}
//           <Link
//             to="/driver-signup"
//             className="btn px-4 py-2 mt-2"
//             style={{
//               backgroundColor: "#d63b50",
//               color: "white",
//               fontWeight: "500",
//               borderRadius: "6px",
//               fontSize: "16px"
//             }}
//           >
//             Sign Up as Driver
//           </Link>
//         </div>

//         {/* Right Side */}
//         <div className="col-lg-6 col-md-12 text-center">
//           <img src={driver} alt="Taxi" className="img-fluid taxi-image" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DriverSection;



















import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import driver from "../../assets/images/driver.jpg";

const DriverSection = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("who-we-are");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100 && !inView) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [inView]);

  return (
    <div id="who-we-are" className="container my-1 who-section">
      <div className="row align-items-center">

        {/* Left Side */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
          <h2 id="driver" className="fw-bold mb-3">Join as a Driver</h2>

          <h6 className="text mb-4">
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of all the Lorem
            Ipsum generators on the Internet tends to repeat predefined chunks
            as necessary.
          </h6>

          {/* Updated Route Here */}
          <Link
            to="/driver-login"
            className="btn px-4 py-2 mt-2"
            style={{
              backgroundColor: "#d63b50",
              color: "white",
              fontWeight: "500",
              borderRadius: "6px",
              fontSize: "16px"
            }}
          >
            Sign Up as Driver
          </Link>
        </div>

        {/* Right Side */}
        <div className="col-lg-6 col-md-12 text-center">
          <img src={driver} alt="Taxi" className="img-fluid taxi-image" />
        </div>

      </div>
    </div>
  );
};

export default DriverSection;

