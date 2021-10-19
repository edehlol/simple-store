import { useState } from 'react';
import {
  removeProduct,
  addQuantity,
  selectQuantityById,
  subtractQuantity,
} from '../redux/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { CartProduct } from '../types/CartProduct';
import QuantityInput from './QuantityInput';

const CartItem = ({ product }: { product: CartProduct }) => {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) => selectQuantityById(state, product.id));

  const handleRemove = () => {
    dispatch(removeProduct(product.id));
  };

  const handleAddQuantity = () => {
    dispatch(addQuantity(product.id));
  };
  const handleSubtractQuantity = () => {
    dispatch(subtractQuantity(product.id));
  };
  return (
    <div className="p-8 mb-4 flex items-center justify-between border-b">
      <div className="flex items-center">
        <div className="w-24 h-24 bg-gray-200 mr-16"></div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <button className="text-yellow-500 text-sm" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <QuantityInput
          quantity={quantity}
          addQuantity={handleAddQuantity}
          subtractQuantity={handleSubtractQuantity}
        />
        <p className="ml-8 w-16">${product.price * product.quantity}</p>
      </div>
    </div>
  );
};
export default CartItem;

// User can click on the Shopping Cart button to display the Shopping Cart page containing the product id, name, price, and quantity ordered input box for each product previously added to the Shopping Cart.