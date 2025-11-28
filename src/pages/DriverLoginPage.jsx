
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DriverLoginPage() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const mobile = e.target.mobile.value;

    if (name && email && mobile) {
      setSuccess(true);

     
      setTimeout(() => {
        navigate("/driver");
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>
      
      <style>
        {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .login-body {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .login-body::before {
          content: "";
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          top: -100px;
          left: -100px;
          animation: float 6s ease-in-out infinite;
        }

        .login-body::after {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          bottom: -50px;
          right: -50px;
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .login-container {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 400px;
          z-index: 1;
          backdrop-filter: blur(10px);
        }

        h2 {
          text-align: center;
          color: #667eea;
          margin-bottom: 30px;
          font-size: 28px;
          font-weight: 600;
        }

        .form-group {
          margin-bottom: 25px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          color: #333;
          font-weight: 500;
          font-size: 14px;
        }

        input {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 15px;
          transition: all 0.3s ease;
          background: #f8f9fa;
        }

        input:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        button {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }

        button:active {
          transform: translateY(0);
        }

        .success-message {
          background: #4caf50;
          color: white;
          padding: 12px;
          border-radius: 8px;
          text-align: center;
          margin-top: 20px;
        }
        `}
      </style>

      
      <div className="login-body">
        <div className="login-container">
          <h2>Welcome Back</h2>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input type="tel" name="mobile" placeholder="Enter your mobile number" required />
            </div>

            <button type="submit">Login</button>

            {success && (
              <div className="success-message">Login Successful!</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

