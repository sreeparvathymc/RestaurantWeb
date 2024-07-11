
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Cart';
const BeforeCartBtn = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button className='bg-black text-white rounded-md py-3 w-full hover:text-orange-400'
              onClick={() => dispatch(addToCart(item))}>
        Add To Cart
      </button>
    </div>
  );
};
export default BeforeCartBtn;
