
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CartButtons from "../../CartButtons";
import { StarIcon } from "lucide-react";
const ViewItemCard = () => {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const selectedFood = data.foods.find((item) => item.id === id);
        if (selectedFood) {
          setFood(selectedFood);
        } else {
          setError("Item not found");
        }
      } catch (error) {
        setError(error.message);
      }
    };
    fetchItems();
  }, [id]);
  return (
    <div className="bg-gray-50">
      <div className="h-36 w-full"></div>
      <div className="h-24 w-full"></div>

      <div className="md:w-10/12 w-11/12 mx-auto">
        {error ? (
          <div className="error">{error}</div>
        ) : (
          food && (
            <div className="border border-orange-500 rounded-md overflow-hidden p-5 flex flex-col md:flex-row gap-10">
              <div className="rounded-md overflow-hidden md:w-1/4">
                <img
                  src={food.strMealThumb}
                  alt={food.strMeal}
                  className="object-cover w-full h-auto md:h-500"
                />
              </div>
              <div className="md:w-1/2">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl text-left mb-3">{food.strMeal}</h3>
                    <div className="flex gap-2 items-center">
                      <div className="w-8 h-8 flex items-center justify-center bg-orange-500">
                        <StarIcon style={{ color: "white" }} />
                      </div>
                      <div>{food.deliveryRating}</div>
                    </div>
                    <p className="text-left my-5">{food.discription}</p>
                    <p className="text-left text-xl font-semibold ">
                      Price:
                      <span className="text-orange-500 ml-3">
                        {food.price}/-
                      </span>
                    </p>
                  </div>
                  <div>
                    <div className="mt-6 md:w-1/2">
                      <CartButtons item={food} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className="h-36 w-full"></div>
    </div>
  );
};
export default ViewItemCard;
