
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image2 from '../../assets/images/image2.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/image5.png';
export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Car Taxi",
      description: "Comfortable and spacious sedans perfect for business trips, family outings, and long-distance travel.  vehicles with professional drivers.",
      image: image2,
      features: ["AC Available", "4 Seater", "Luggage Space", "GPS Enabled"],
      price: "Starting from ₹15/km",
    //   icon: "🚗"
    },
    {
      id: 2,
      title: "Auto Rickshaw",
      description: "Quick and economical rides for short distances within the city. Navigate through traffic easily and reach your destination faster.",
      image: image4,
      features: ["Budget Friendly", "3 Seater", "City Travel", "Quick Service"],
      price: "Starting from ₹8/km",
    //   icon: "🛺"
    },
    {
      id: 3,
      title: "Bike Taxi",
      description: "Beat the traffic with our fast and convenient bike taxi service. Perfect for solo travelers looking for the quickest route through busy streets.",
      image: image5,
      features: ["Fastest Option", "1 Rider", "Traffic Beat", "Helmet Provided"],
      price: "Starting from ₹5/km",
    //   icon: "🏍️"
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h3 className="display-3 fw-bold mb-3" style={{ color: '#212529',fontSize: '33px' }}>
            Our Services
          </h3>
           <div
          className="mx-auto mb-3"
          style={{
            width: "70px",
            height: "5px",
            background:
              "linear-gradient(to right, #dc3545 33%, #fff 33%, #fff 66%, #dc3545 66%)",
          }}
        ></div>
          <p className="lead text-muted" style={{ maxWidth: '700px', margin: '0 auto' ,fontSize: '16px' }}>
            Choose from our range of transportation options tailored to your needs and budget
          </p>
          
        </div>

        {/* Service Cards */}
        <div className="row g-4 mb-5">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div 
                className="card h-100 border-0"
                style={{ 
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-15px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
                }}
              >
                {/* Image Section */}
                <div style={{ position: 'relative', overflow: 'hidden', height: '180px' }}>
                  <img 
                    src={service.image} 
                    className="card-img-top" 
                    alt={service.title}
                    style={{ 
                      height: '80%', 
                      width: '80%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      alignItems: 'center',
                        marginTop: '20px',
                        marginLeft: '40px'

                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  
                </div>

                <div className="card-body p-4">
                  <h3 className="card-title fw-bold mb-3" style={{ color: '#212529' }}>
                    {service.title}
                  </h3>
                  
                  <p className="card-text text-muted mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-4">
                    <div className="row g-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="col-6">
                          <div 
                            style={{
                              backgroundColor: '#f8f9fa',
                              padding: '8px 12px',
                              borderRadius: '6px',
                              fontSize: '13px',
                              fontWeight: '500',
                              color: '#495057'
                            }}
                          >
                            ✓ {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
