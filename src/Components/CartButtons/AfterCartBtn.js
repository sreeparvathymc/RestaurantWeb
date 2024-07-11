

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/Cart';
const AfterCartBtn = ({ itemId }) => {
  const dispatch = useDispatch();
  const cartCount = useSelector(state => state.cart.cartList.find(item => item.id === itemId)?.count || 0);
  return (
    <div className='w-full flex bg-orange-100 items-center justify-between'>
      <button className='bg-black text-white rounded-sm py-3 px-5 hover:bg-[#3D3B3B]' onClick={() => dispatch(decrement(itemId))}>-</button>
      <div className='px-2'>{cartCount}</div>
      <button className='bg-black rounded-sm text-white py-3 px-5 hover:bg-[#3D3B3B]' onClick={() => dispatch(increment(itemId))}>+</button>
    </div>
  );
};
export default AfterCartBtn;
