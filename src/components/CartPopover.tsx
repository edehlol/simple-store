import { useState } from 'react';
import { Popover } from '@headlessui/react';
import { BsBag } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { removeProduct, selectCart, selectTotalPrice } from '../redux/cartSlice';
import Img from './Img';
import Link from 'next/link';
import { AiOutlineDelete } from 'react-icons/ai';
import Button from './Button';

const CartPopover = ({ cartProductsCount }: { cartProductsCount: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const totalPrice = useAppSelector(selectTotalPrice);

  const renderCartProducts = () => {
    return cart.map((product) => (
      <div
        key={product.id}
        className="flex items-center justify-between py-2 px-8 hover:bg-gray-100"
      >
        <Popover.Button>
          <Link href={`/product/${product.id}`}>
            <a>
              <div className="flex items-center hover:cursor-pointer ">
                <Img src={product.img} divClass="w-12 h-12 mr-2" />

                <p>{product.name}</p>
              </div>
            </a>
          </Link>
        </Popover.Button>

        <div className="flex items-center">
          <p className="mr-2">
            {product.quantity} x ${product.price}
          </p>
          <span
            className="hover:cursor-pointer hover:scale-110 duration-75"
            onClick={() => dispatch(removeProduct(product.id))}
          >
            <AiOutlineDelete size="1.25rem" />
          </span>
        </div>
      </div>
    ));
  };

  const cartBtn = (
    <a className="flex justify-end items-center w-8" onClick={() => setIsOpen(true)}>
      <span className="flex justify-end w-full mr-1">
        <BsBag size="1.5rem" />
      </span>
      {cartProductsCount > 0 && (
        <span className="absolute -top-2 -right-2 ml-2 rounded-full bg-red-500 text-white w-5 h-5 text-xs flex items-center justify-center">
          {cartProductsCount}
        </span>
      )}
    </a>
  );
  const popover = (
    <Popover className="relative z-10 rounded-lg">
      <Popover.Button>{cartBtn}</Popover.Button>
      <Popover.Panel className="absolute -left-72 md:-left-96 bg-white shadow-lg rounded-lg w-80 md:w-96 ">
        <div className="border rounded-lg py-8 grid grid-rows-8">
          <h5 className="font-semibold px-8 mb-4">My Products</h5>
          <div className="divide-y mb-4  border-b w-full">{renderCartProducts()}</div>
          <div className="flex justify-between items-center px-8 mb-4 text-xl">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>
          <div className="px-8 flex flex-col items-center">
            <Button className="w-54 mt-8 mb-4">
              <Link href="#">Proceed to Checkout</Link>
            </Button>
            <div className="w-full flex justify-center">
              <Link href="/cart">
                <a className="font-semibold underline">Go to Cart</a>
              </Link>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );

  return popover;
};

export default CartPopover;
