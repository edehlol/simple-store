import ReactDOM from 'react-dom';
import { useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import Img from './Img';
import { useAppSelector } from '../redux/hooks';
import {
  selectProductCount,
  selectQuantityById,
  selectSubtotalPrice,
  selectTotalPrice,
} from '../redux/cartSlice';
import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai';

const AddedModal = ({ product, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const productCount = useAppSelector(selectProductCount);
  const quantity = useAppSelector((state) => selectQuantityById(state, product.id));
  const subTotal = useAppSelector((state) => selectSubtotalPrice(state, product.id));
  const selectTotal = useAppSelector(selectTotalPrice);

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [isOpen]);

  useLayoutEffect(() => {
    document.body.style.overflow = 'auto';
  });

  const backgroundClickHandler = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const modalContent = isOpen ? (
    <div
      onClick={backgroundClickHandler}
      className={` ${
        isOpen ? 'flex' : 'hidden'
      } transition duration-500 bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full justify-center items-center`}
    >
      <div ref={modalRef} className="w-auto bg-white py-8 p-8">
        <div className=" relative flex justify-end -top-16 -right-16 ">
          <span
            onClick={onClose}
            className=" hover:cursor-pointer text-white hover:text-black transition duration-150"
          >
            <AiOutlineClose size="2rem" />
          </span>
        </div>

        <div className="text-center grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center items-center lg:border-r lg:pr-12">
            <div className="text-2xl font-light mb-8 w-auto">
              <div className="inline-flex items-center ">
                <span className="mr-1">
                  <AiOutlineCheckCircle />
                </span>
                Added to Cart Succesfully!
              </div>
            </div>
            <Img src={product.img} divClass="hidden lg:block w-64 h-64 mb-4" />
            <h2 className="hidden lg:inline-block text-2xl mb-2">{product.name} —</h2>
            <h4 className="hidden lg:inline-block font-light text-xl mb-2">QTY: {quantity}</h4>
            <h4 className="hidden lg:inline-block font-light text-xl">Total: ${subTotal}</h4>
          </div>
          <div className="lg:pl-12 flex flex-col justify-between items-center">
            <div className="flex-1">
              <h3 className="hidden lg:inline-block text-xl mb-8 w-48 text-center">
                There are {productCount} items in your cart
              </h3>
              <h4 className="hidden lg:block mb-8 font-light text-xl">Total: ${selectTotal}</h4>
              <Link href="/store">
                <a
                  className="hover:bg-gray-900 hover:text-white transition duration-200 mb-4 block lg:border-2 border-black py-2"
                  onClick={onClose}
                >
                  Continue Shopping
                </a>
              </Link>
              <Link href="/cart">
                <a
                  className="hover:bg-gray-900 hover:text-white transition duration-200 mb-8 block lg:border-2 border-black py-2"
                  onClick={onClose}
                >
                  View Cart
                </a>
              </Link>
            </div>

            <Link href="#">
              <a onClick={onClose} className="text-gray-400 text-sm lg:mb-8" aria-disabled>
                Proceed to Checkout
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
};

export default AddedModal;
