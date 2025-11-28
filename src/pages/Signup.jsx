

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.name || !form.mobile || !form.email) {
      alert("Please fill all details");
      return;
    }

    // Save user data locally (optional)
    localStorage.setItem("userData", JSON.stringify(form));

    // Redirect to user dashboard
    navigate("/user");
  };

  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      
      <style>{`
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        .gradient-bg::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: moveBackground 20s linear infinite;
        }
        
        @keyframes moveBackground {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .gradient-bg::after {
          content: '';
          position: absolute;
          top: 10%;
          right: 10%;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          filter: blur(80px);
        }
        
        .login-card {
          position: relative;
          z-index: 1;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          border: none;
        }
        
        .form-control:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
        }
        
        .btn-login {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .btn-login:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }
      `}</style>

      <div className="gradient-bg d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="card login-card shadow-lg p-4">
                <div className="card-body">
                  <div className="text-center mb-4">
                    <h2 className="fw-bold" style={{ color: '#667eea' }}>Welcome Back</h2>
                    <p className="text-muted">Please login to your account</p>
                  </div>
                  
                  <div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control py-2"
                        placeholder="Enter your name"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Mobile Number</label>
                      <input
                        type="tel"
                        name="mobile"
                        className="form-control py-2"
                        placeholder="Enter mobile number"
                        onChange={handleChange}
                        maxLength="10"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Email ID</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control py-2"
                        placeholder="Enter your email"
                        onChange={handleChange}
                      />
                    </div>

                    <button 
                      onClick={handleLogin}
                      className="btn btn-login text-white w-100 py-2 fw-semibold"
                    >
                      Login
                    </button>
                  </div>
                  
                  <div className="text-center mt-4">
                    <small className="text-muted">
                      Don't have an account? <a href="#" style={{ color: '#667eea', textDecoration: 'none' }}>Sign up</a>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
