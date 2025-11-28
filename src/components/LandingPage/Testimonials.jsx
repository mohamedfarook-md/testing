import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


// your profile images
import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.png";
import img5 from "../../assets/images/img5.jpeg";


const testimonials = [
  {
    name: "Stefy Grafi",
    image: img5,
    review:
      "Lorem Ipsum passages, and more recently with desktop publish soft like aldus pageMaker including versions.",
  },
  {
    name: "Soniya",
    image: img1,
    review:
      "Lorem Ipsum passages, and more recently with desktop publish soft like aldus pageMaker including versions.",
  },
  {
    name: "Sarah Williams",
    image: img2,
    review:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    name: "Michael Brown",
    image: img3,
    review:
      "Lorem Ipsum passages, and more recently with desktop publish soft like aldus pageMaker including versions.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section text-center py-5 position-relative">
      <h4 className="fw-bold mb-4">Testimonials</h4>

      <div
        className="mx-auto mb-5"
        style={{
          width: "70px",
          height: "5px",
         
        }}
      ></div>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={0}
        breakpoints={{
          0: { slidesPerView: 1 },
          992: { slidesPerView: 3},
        }}
        className="testimonial-slider"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="testimonial-card">
              <img src={t.image} alt={t.name} className="profile-img" />
              <h5>{t.name}</h5>
              <div className="stars">⭐ ⭐ ⭐ ⭐ </div>
              <p>" {t.review} "</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button-prev custom-nav"></div>
      <div className="swiper-button-next custom-nav"></div>
    </section>
  );
};

export default Testimonials;