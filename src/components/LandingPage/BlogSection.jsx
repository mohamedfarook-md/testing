
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import one from '../../assets/images/one.webp'
export default function TaxiBlog() {
  const blogPosts = [
    {
      id: 1,
      title: "Safe Travel Tips for Rides",
      excerpt: "Discover essential safety measures and best practices for secure nighttime taxi journeys in the city.",
      image: one,
      date: "Oct 10, 2025",
      category: "Safety"
    },
    {
      id: 2,
      title: "Eco-Friendly Taxi Options",
      excerpt: "Learn about our new fleet of electric and hybrid vehicles helping reduce carbon emissions.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=250&fit=crop",
      date: "Oct 8, 2025",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "Why Choose Rydmate for Your Next Trip?",
      excerpt: "Everything you need to know about booking reliable airport transfers and avoiding common pitfalls.",
      image: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg",
      date: "Oct 5, 2025",
      category: "Travel Tips"
    }
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#212529' , fontSize: '26px' }}>
            Latest from Our Blog
          </h1>
           <div
          className="mx-auto mb-3"
          style={{
            width: "70px",
            height: "5px",
            background:
              "linear-gradient(to right, #dc3545 33%, #fff 33%, #fff 66%, #dc3545 66%)",
          }}
        ></div>
          <p className="lead text-muted" style={{ maxWidth: '600px', margin: '0 auto',fontSize: '16px' }}>
            Stay updated with travel tips, safety guides, and news from our taxi service
          </p>
        </div>

        {/* Blog Cards */}
        <div className="row g-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div 
                className="card h-100 shadow-sm border-0"
                style={{ 
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={post.image} 
                    className="card-img-top" 
                    alt={post.title}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <span 
                    className="badge position-absolute"
                    style={{
                      top: '15px',
                      right: '15px',
                      backgroundColor: '#ffc107',
                      color: '#212529',
                      padding: '8px 15px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}
                  >
                    {post.category}
                  </span>
                </div>
                
                <div className="card-body d-flex flex-column p-4">
                  <div className="mb-3">
                    <small className="text-muted">
                      <i className="bi bi-calendar3"></i> {post.date}
                    </small>
                  </div>
                  
                  <h5 className="card-title fw-bold mb-3" style={{ color: '#212529' }}>
                    {post.title}
                  </h5>
                  
                  <p className="card-text text-muted flex-grow-1">
                    {post.excerpt}
                  </p>
                  
                  <a 
                    href="#" 
                    className="btn mt-3"
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '10px 25px',
                      fontWeight: '500',
                      transition: 'background-color 0.3s ease'
                      
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc3545'}
                    onClick={(e) => e.preventDefault()}
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-5">
          <button 
            className="btn btn-lg px-5"
            style={{
              backgroundColor: '#ffc107',
              color: '#212529',
              border: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e80b0bff';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffc107';
              e.currentTarget.style.color = '#212529';
            }}
          >
            View All Articles
          </button>
        </div> */}
      </div>
    </div>
  );
}