
import React, { useMemo } from 'react';
import { useSelector } from "react-redux";
import AfterCartBtn from './AfterCartBtn';
import BeforeCartBtn from './BeforeCartBtn';
const CartButtons = ({ item }) => {
  const { cartList } = useSelector((state) => state.cart);

  const cartCount = useMemo(() => {
    return cartList.find((cartItem) => cartItem.id === item.id)?.count || 0;
  }, [cartList, item.id]);
  return (
    <div>
      {cartCount > 0 ? <AfterCartBtn itemId={item.id} /> : <BeforeCartBtn item={item} />}
    </div>
  );
};
export default CartButtons;
