import {
  removeProduct,
  addQuantity,
  selectQuantityById,
  subtractQuantity,
  selectSubtotalPrice,
} from '../redux/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { CartProduct } from '../types/CartProduct';
import Img from './Img';
import QuantityInput from './QuantityInput';
import { AiOutlineDelete } from 'react-icons/ai';

const CartItem = ({ product }: { product: CartProduct }) => {
  const dispatch = useAppDispatch();
  const quantity = useAppSelector((state) => selectQuantityById(state, product.id));
  const subTotal = useAppSelector((state) => selectSubtotalPrice(state, product.id));

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
    <div className=" py-4 mb-4 grid grid-cols-3 md:grid-cols-12  border-b h-48">
      <Img src={product.img} divClass="w-full h-full md:col-span-2" />

      <div className="ml-4 md:ml-8 grid grid-cols-1 grid-rows-4 md:grid-rows-1 md:grid-cols-5 md:col-span-9 h-full">
        <h3 className="self-center md:justify-self-start md:col-span-2 items-start">
          {product.name}
        </h3>
        <p className="md:place-self-center font-light items-start  w-8 ">${product.price}</p>
        <div className="place-self-center w-full md:w-32">
          <QuantityInput
            small
            quantity={quantity}
            addQuantity={handleAddQuantity}
            subtractQuantity={handleSubtractQuantity}
          />
        </div>
        <p className="self-center md:justify-self-center w-8 font-light items-start">${subTotal}</p>
      </div>

      <button className="place-self-end self-center md:col-span-1 text-lg" onClick={handleRemove}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};
export default CartItem;
