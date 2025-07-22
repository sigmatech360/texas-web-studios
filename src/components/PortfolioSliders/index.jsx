import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PortfolioSliders = (props) => {
  return (
    <div className="portfolioSliderDiv">
      <div className="ourPortfolioSLiders">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            // pauseOnMouseEnter: true,
          }}
          freeMode={true}
          freeModeMomentum={false}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            481: { slidesPerView: 2 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 3.5, spaceBetween: 20 },
          }}
        >
          {props.portfolio1.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="ourPortfolioItem">
                <img src={item.image} alt="" className="img-fluid" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="ourPortfolioSLiders">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            // pauseOnMouseEnter: true,
          }}
          rtl={false}
          freeMode={true}
          freeModeMomentum={false}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            481: { slidesPerView: 2 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 3.5, spaceBetween: 20 },
          }}
          className="portfolioSwiperToRight"
        >
          {props.portfolio2.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="ourPortfolioItem">
                <img src={item.image} alt="" className="img-fluid" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PortfolioSliders;
