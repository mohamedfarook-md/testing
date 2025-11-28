import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Settings, Car, Users, Fuel } from "lucide-react";
import fleet1 from "../../assets/images/fleet1.png";
import fleet2 from "../../assets/images/fleet2.png";
import fleet3 from "../../assets/images/fleet3.png";


const Carfleet1 = () => {
  const cars = [
    { name: "Mercedes Benz", type: "Luxury", passengers: 5, mpg: "7.6/100 ", price: 390, image: fleet1 },
    { name: "Tesla Model S", type: "Luxury", passengers: 5, mpg: "Electric", price: 450, image: fleet2 },
    { name: "Aston Martin", type: "Luxury", passengers: 4, mpg: "8.2/100 ", price: 520, image: fleet3 },
    { name: "BMW 7 Series", type: "Luxury", passengers: 5, mpg: "7.8/100 ", price: 420, image: fleet1 },
    { name: "Audi A8", type: "Luxury", passengers: 5, mpg: "7.5/100 ", price: 400, image: fleet2 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCar = () => setCurrentIndex((prev) => (prev + 1) % cars.length);
  const prevCar = () => setCurrentIndex((prev) => (prev - 1 + cars.length) % cars.length);

  const getCarPosition = (index) => {
    const diff = (index - currentIndex + cars.length) % cars.length;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === cars.length - 1) return "left";
    return "hidden";
  };

  const currentCar = cars[currentIndex];

  return (
    <div className="car-fleet-container">
      {/* Settings Button */}
      

      {/* Header */}
      <div className="header">
        <h1>Our Car Fleet</h1>
        <div className="bars">
          <div></div><div></div><div></div>
        </div>
      </div>

      {/* Car Carousel */}
      <div className="carousel-container">
        {cars.map((car, index) => (
          <div key={index} className={`car-card ${getCarPosition(index)}`}>
            <img src={car.image} alt={car.name} />
          </div>
        ))}
      </div>

      {/* Car Details */}
      <div className="car-details">
        <h2>{currentCar.name}</h2>
        <div className="features">
          <div><Car size={20} color="#94a3b8" /> <span>{currentCar.type}</span></div>
          <div className="divider"></div>
          <div><Users size={20} color="#94a3b8" /> <span>{currentCar.passengers} Passengers</span></div>
          <div className="divider"></div>
          <div><Fuel size={20} color="#94a3b8" /> <span>{currentCar.mpg}</span></div>
        </div>

        <div className="price">
          <strong>₹{currentCar.price}</strong>
          <span>/ day</span>
        </div>

        {/* Buttons */}
        <div className="nav-buttons">
          <button className="round-btn" onClick={prevCar}>
            <ChevronLeft color="white" size={24} />
          </button>

          <button className="book-btn">
            Book Now <ChevronRight size={20} />
          </button>

          <button className="round-btn" onClick={nextCar}>
            <ChevronRight color="white" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carfleet1;