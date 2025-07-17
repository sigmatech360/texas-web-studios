import React, { useRef } from "react";

import quoteImg from "../../assets/images/quoteImg.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

const TestimonialSec = (props) => {
  return (
    <section className={`testimonialSec sec-padding ${props.className}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="secHead">
              <p className="sec-tag">{props.secTag}</p>
              <h3 className="secTitle">{props.secTitle}</h3>
            </div>
          </div>

          <div className="col-md-7">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={2}
                loop={true}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 1.8 },
              }}
            >
              {props.testimonialData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonialBox">
                    <p className="testimonialDesc">{item.descrition}</p>
                    <div className="testimonialFooter">
                      <div className="testimonialMeta">
                        <div className="testimonialProfile">S</div>
                        <div className="testimonialUserDetail">
                          <h5 className="testimonialName">{item.name}</h5>
                          <p className="testimonialDesignation">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                      <img src={quoteImg} className="testimonialIcon" alt="Testimonial Icon" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSec;
