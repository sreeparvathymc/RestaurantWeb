import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
const TestimonialSlider = ({ testimonialSlides }) => {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto testimonialContainer">
      <div>
        <div className="flex items-center">
          <h5 className="text-orange-400 text-xl text-left">Testimonial</h5>
          <div className="w-14 h-[1px] bg-orange-400 ml-4"></div>
        </div>
      </div>
      <div>
        <h1 className="text-6xl font-semibold text-left">
          Customers Reviews
        </h1>
      </div>
      <div className="mt-14">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonialSlides.map((slide) => (
            <SwiperSlide key={slide.image} className="">
              <div>
                <div className="flex items-center justify-center gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      style={{ height: "100%", width: "100%" }}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{slide.title}</h4>
                    <h5 className="font-medium">{slide.subtitle}</h5>
                  </div>
                </div>
                <div className="w-7/12 mx-auto mt-10 pb-10">
                  <p>{slide.discription}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default TestimonialSlider;
