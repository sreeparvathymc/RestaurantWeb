import React, { useState, useEffect } from "react";
import CartButtons from "../CartButtons";
import { Link } from "react-router-dom";
import { StarIcon } from "lucide-react";
const Chicken = () => {
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const chickenItems = data.foods.filter(
          (item) => item.category === "Chicken"
        );
        setFoods(chickenItems);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchItems();
  }, []);
  return (
    <div>
      <div className="h-36 w-full"></div>
      <div className="h-24 w-full"></div>

      <div className="md:w-10/12 w-11/12 mx-auto">
        <div>
          <div className="flex items-center">
            <h5 className="text-orange-400 text-xl text-left">Our Menu</h5>

            <div className="w-14 h-[1px] bg-orange-400 ml-4"></div>
          </div>
        </div>
        <div>
          <h1 className="text-6xl font-semibold text-left mb-16">
            Chicken Choices
          </h1>
        </div>
        {error ? (
          <div className="error">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {foods?.map((item, index) => (
              <div
                key={index}
                className="border-orange-500 border rounded-md overflow-hidden p-5"
              >
                <Link to={`/view/${item.id}`}>
                  <div className="flex gap-5">
                    <div className="rounded-md overflow-hidden w-2/5 sm:w-2/6">
                      <img
                        src={item.strMealThumb}
                        alt={item.strMeal}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium sm:text-2xl item-name my-2">
                        {item.strMeal}
                      </h3>
                      <div className="flex gap-2 items-center">
                        <div className="w-8 h-8 flex items-center justify-center bg-orange-500">
                          <StarIcon style={{ color: "white" }} />
                        </div>
                        <div>{item.deliveryRating}</div>
                      </div>

                      <p className="text-left mt-3 font-medium">
                        Price: {item.price}/-
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="mt-4 sm:mt-6">
                  <div className="w-full sm:w-auto">
                    <CartButtons item={item} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="h-36 w-full"></div>
    </div>
  );
};
export default Chicken;
