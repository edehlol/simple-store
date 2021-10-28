import { Dialog, Transition } from '@headlessui/react';
import { useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai';
import Img from './Img';
import { useAppSelector } from '../redux/hooks';
import Link from 'next/link';
import {
  selectProductCount,
  selectQuantityById,
  selectSubtotalPrice,
  selectTotalPrice,
} from '../redux/cartSlice';
import { Product } from '../types/Product';
import Button from './Button';

const ModalContent = ({ product, handleClose }) => {
  const productCount = useAppSelector(selectProductCount);
  const quantity = useAppSelector((state) => selectQuantityById(state, product.id));
  const subTotal = useAppSelector((state) => selectSubtotalPrice(state, product.id));
  const selectTotal = useAppSelector(selectTotalPrice);
  return (
    <div className="text-center grid grid-cols-1 lg:grid-cols-2 p-8 mb-4 lg:mb-0">
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
          <div className="flex flex-col">
            <Button onClick={handleClose} className="mb-4">
              <Link href="/store">Continue Shopping</Link>
            </Button>
            <Button onClick={handleClose} variant="secondary" className="mb-4">
              <Link href="/cart">View Cart</Link>
            </Button>
          </div>
        </div>

        <Link href="#">
          <a onClick={handleClose} className="text-gray-400 text-sm lg:mb-8" aria-disabled>
            Proceed to Checkout
          </a>
        </Link>
      </div>
    </div>
  );
};

const AddToCartModal = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpen} className="w-full mt-4 sm:mt-0 sm:w-auto h-16">
        Add to Cart
      </Button>
      {/* <PrimaryBtn onClick={handleOpen}>Add to Cart</PrimaryBtn> */}
      <Transition appear show={isOpen}>
        <Dialog open={isOpen} onClose={handleClose} className="fixed inset-0 z-10 overflow-auto">
          <Dialog.Overlay className="bg-black opacity-30 fixed inset-0" />
          <Transition.Child
            enter="transform transition ease-out  duration-150"
            enterFrom="opacity-0 -translate-y-16 "
            enterTo="opacity-100 translate-y-0"
          >
            <div className="flex justify-center items-center min-h-screen">
              <div className="bg-white relative rounded-lg shadow-2xl">
                <div className=" relative flex justify-end -top-8 -right-8">
                  <span
                    onClick={handleClose}
                    className=" hover:cursor-pointer text-white hover:text-black transition duration-150"
                  >
                    <AiOutlineClose size="2rem" />
                  </span>
                </div>

                <ModalContent handleClose={handleClose} product={product} />
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddToCartModal;
