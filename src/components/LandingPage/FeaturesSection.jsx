import React from "react";

import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
const FeaturesSection = () => {
  const features = [
    {
      icon: <FaIndianRupeeSign />,
      title: "Best Price Guaranteed",
      desc: "A more recently with desktop softy like aldus page maker.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Care",
      desc: "A more recently with desktop softy like aldus page maker.",
    },
    {
      icon: <IoHome />,
      title: "Home Pickups",
      desc: "A more recently with desktop softy like aldus page maker.",
    },
    {
      icon: <FaBookmark />,
      title: "Easy Bookings",
      desc: "A more recently with desktop softy like aldus page maker.",
    },
  ];

  return (
    <div className="container my-2 features-section">
      <div className="row justify-content-center text-center">
        {features.map((feature, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="feature-item text-center p-3">
              <span className="Features-Icon">{feature.icon}</span>
              <h5 className="fw-semibold">{feature.title}</h5>
              <p className="text-muted">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;