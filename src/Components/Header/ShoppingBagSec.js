import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
const ShoppingBagSec = () => {
  const { cartList } = useSelector((state) => state.cart);
  const totalCartCount = cartList.reduce(
    (acc, value) => (acc += value.count),
    0
  );
  return (
    <div className="mx-10">
      <div></div>
      <div className="bg-orange-300 w-8 h-8 rounded-full text-center p-1 relative top-4 left-3">
        {totalCartCount}
      </div>
      <div>
        <ShoppingBagIcon style={{ width: "25px" }} />
      </div>
    </div>
  );
};
export default ShoppingBagSec;
