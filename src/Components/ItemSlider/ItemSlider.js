
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import CartButtons from "../CartButtons";
import { StarIcon } from "lucide-react";
const ItemSlider = () => {
  const [setSwiperRef] = useState(null);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const featuredIds = ["2", "4", "8", "10", "14"];
        const filteredItems = data.foods.filter((item) =>
          featuredIds.includes(item.id)
        );
        setFeaturedItems(filteredItems);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchItems();
  }, []);
  if (error) {
    return <div className="error">{error}</div>;
  }
  return (
    <div className="pt-32 pb-10 featuredflavour">
      <div className="md:w-10/12 w-11/12 mx-auto">
        <div className="flex items-center">
          <h5 className="text-orange-400 text-xl text-left">
            Our Featured Flavour
          </h5>
          <div className="w-14 h-[1px] bg-orange-400 ml-4"></div>
        </div>
        <h1 className="text-6xl font-semibold text-left">Featured Flavour</h1>
      </div>
      <div className="mt-20">
        <Swiper
          onSwiper={setSwiperRef}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1600: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 70,
            },
          }}
        >
          {featuredItems.map((item) => (
            <SwiperSlide
              key={item.id}
              className="customSlide border border-orange-400 p-5 rounded-xl"
            >
              <Link to={`/view/${item.id}`}>
              <div className="flex gap-4">
                <div className="bg-red-500 h-32 w-32 rounded-md shadow-md overflow-hidden">
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium item-name w-[100%] my-2">
                    {item.strMeal}
                  </h3>
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 flex items-center justify-center bg-orange-500">
                      <StarIcon style={{ color: "white" }} />
                    </div>
                    <div>{item.deliveryRating}</div>
                  </div>
                  <p className="text-left mt-3 font-medium">Price: {item.price}/-</p>
                </div>
              </div>
              </Link>
              <div className="
                mt-5">
                <div className="basics-half mt-4">
                  <CartButtons item={item} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default ItemSlider;

