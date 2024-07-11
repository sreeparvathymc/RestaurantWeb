import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../Redux/Cart";
import { useSelector } from "react-redux";
const CartListItemCard = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleIncrement = (itemId) => {
    dispatch(increment(itemId));
  };
  const handleDecrement = (itemId) => {
    dispatch(decrement(itemId));
  };
  const subtotal = cartList.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);
  if (cartList.length === 0) {
    return (
      <div>
        <div className="h-36  w-full"></div>
        <div className="my-20 flex justify-center items-center">
          <div className="">
            <img
              src="../../../../Assets/EmptyCart.png"
              alt="Empty Cart"
              className="w-40 h-40"
            />
            <p className="text-center mt-4 text-gray-600 text-2xl">
              Cart is empty
            </p>
          </div>
        </div>
        <div className="h-36  w-full"></div>
      </div>
    );
  }
  return (
    <div className="my-20">
      <div className="h-40 w-full"></div>
      <div>
        {cartList.map((item) => (
          <div
            key={item.id}
            className="border-b border-orange-300 border-solid overflow-hidden p-5 mb-4"
          >
            <div className="grid grid-col-1 gap-5 sm:grid-col-2 md:grid-cols-3">
              <div className="">
                <div className="overflow-hidden md:mx-auto">
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="rounded-md mx-auto overflow-hidden w-full md:w-2/5"
                  />
                </div>
              </div>
              <div className="">
                <div>
                  <h3 className="text-2xl text-left">{item.strMeal}</h3>
                  <p className="text-left my-2">price:{item.price}/-</p>
                  <p className="text-left my-2">Quantity: {item.count}</p>

                  <div className="flex items-center">
                    <button
                      className="bg-black text-white rounded-sm py-3 px-5 hover:bg-[#3D3B3B] "
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <div className="px-2">{item.count}</div>
                    <button
                      className="bg-black rounded-sm text-white py-3 px-5 hover:bg-[#3D3B3B]"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <p className="  text-3xl font-medium mt-6 md:mt-0 text-left ">
                    {item.price * item.count}/-
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="text-3xl font-semibold">subtotal = {subtotal}</p>
      </div>
      <div>
        <button className="bg-orange text-black py-2 px-5 rounded-sm mt-8 hover:text-white">
          Proceed to pay
        </button>
      </div>
      <div className="h-36  w-full"></div>
    </div>
  );
};
export default CartListItemCard;
