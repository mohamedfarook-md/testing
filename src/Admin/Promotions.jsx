import React from "react";


export default function Promotions() {
  const promotions = [
    {
      id: 1,
      title: "Summer Offer",
      description: "Get 20% off on all trips for new users.",
    },
    {
      id: 2,
      title: "Festival Bonanza",
      description: "Flat ₹50 discount on rides above ₹200.",
    },
    {
      id: 3,
      title: "Weekend Special",
      description: "Buy 2 rides, get 1 free (app-only offer).",
    },
  ];

  return (
    <div id="promotions">
      <div className="page-header">
        <h2 className="page-title">Promotions</h2>
      </div>

      <div className="promo-grid">
        {promotions.map((promo) => (
          <div key={promo.id} className="promo-card">
            <h3 className="promo-title">{promo.title}</h3>
            <p className="promo-desc">{promo.description}</p>

            <div className="promo-actions">
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-secondary">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
