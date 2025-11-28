import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import deal1 from '../../assets/images/deals-img1.png';
import deal2 from '../../assets/images/deals-img2.png';
import deal3 from '../../assets/images/deals-img3.png';

const DealsOnBooking = () => {
  return (
    <div className="deals-section text-center text-white py-5 position-relative">
      {/* Blurred Background */}
      <div className="blur-bg"></div>

      {/* Content */}
      <div className="position-relative" style={{ zIndex: 2 }}>
        <h3 className="fw-bold mb-2 text-light">Deals On Booking</h3>
        <div
          className="mx-auto mb-3"
          style={{
            width: "70px",
            height: "5px",
            background:
              "linear-gradient(to right, #dc3545 33%, #fff 33%, #fff 66%, #dc3545 66%)",
          }}
        ></div>
        <p className="text-light mb-5">
          Lorem Ipsum passages, and more recently with desktop publishing
          software like aldus pageMaker
        </p>

        <div className="container">
          <div className="row justify-content-center">
            {/* Card 1 */}
            <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
              <div className="circle-img">
                <img
                  src={deal1}
                  alt="Oklahoma"
                  className="img-fluid"
                />
              </div>
              <h5 className="text-white mt-3">Oklahoma</h5>
              <p className="text-light">
                Starts from <strong className="text-white">₹200/day</strong>
              </p>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
              <div className="circle-img">
                <img
                  src={deal2}
                  alt="Brooklyn"
                  className="img-fluid"
                />
              </div>
              <h5 className="text-white mt-3">Brooklyn</h5>
              <p className="text-light">
                Starts from <strong className="text-white">₹190/day</strong>
              </p>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4 d-flex flex-column align-items-center">
              <div className="circle-img">
                <img
                  src={deal3}
                  alt="Georgia"
                  className="img-fluid"
                />
              </div>
              <h5 className="text-white mt-3">Georgia</h5>
              <p className="text-light">
                Starts from <strong className="text-white">₹240/day</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsOnBooking;