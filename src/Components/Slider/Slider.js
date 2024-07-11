import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slider = ({ slides }) => {
  return (
    <div className="bannerslider">
      <div className="orangebackground"></div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper orangebackground"
      >
        {slides.map((slide) => (
          <div className="">
            <SwiperSlide key={slide.image} className="">
              <div className="">
                <div className="w-3/5 md:w-1/5 mx-auto">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider;
