import React, { useEffect, useRef, useState } from "react";

import quoteImg from "../../assets/images/quoteImg.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const TestimonialSec = (props) => {
  // Create refs for prev and next buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // State to store swiper instance
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Assign navigation buttons to swiper after it initializes
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  return (
    <section className={`testimonialSec sec-padding ${props.className}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="secHead">
              <p className="sec-tag">{props.secTag}</p>
              <h3
                className="secTitle"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                {props.secTitle}
              </h3>

              {/* Navigation buttons inside secHead */}
              <div className="slider-nav-buttons d-lg-block d-none">
                <button
                  ref={prevRef}
                  className="custom-nav-btn"
                  aria-label="Prev Button"
                  title="Prev Button"
                >
                  <FaArrowLeftLong />
                </button>
                <button
                  ref={nextRef}
                  className="custom-nav-btn"
                  aria-label="Next Button"
                  title="Next Button"
                >
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                992: { slidesPerView: 1.5 },
                1200: { slidesPerView: 1.8 },
              }}
              onSwiper={setSwiperInstance} // Save swiper instance here
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
            >
              {props.testimonialData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonialBox">
                    <p className="testimonialDesc">{item.descrition}</p>
                    <div className="testimonialFooter">
                      <div className="testimonialMeta">
                        <div className="testimonialProfile">
                          {item.name.charAt(0)}
                        </div>
                        <div className="testimonialUserDetail">
                          <h4 className="testimonialName">{item.name}</h4>
                          <p className="testimonialDesignation">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                      <img
                        src={quoteImg}
                        className="testimonialIcon"
                        alt="Testimonial Icon"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons inside secHead */}
            {/* <div className="slider-nav-buttons d-lg-none d-block">
                <button ref={prevRef} className="custom-nav-btn">
                  <FaArrowLeftLong />
                </button>
                <button ref={nextRef} className="custom-nav-btn">
                  <FaArrowRightLong />
                </button>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSec;
