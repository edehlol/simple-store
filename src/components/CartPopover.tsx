import { useState, useEffect } from 'react';
import { Popover, Dialog } from '@headlessui/react';
import PrimaryBtn from './PrimaryBtn';
import { BsBag } from 'react-icons/bs';

const CartPopover = ({ cartProductsCount }: { cartProductsCount: number }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const cartBtn = (
    <a className="flex justify-end items-center w-16" onClick={() => setIsOpen(true)}>
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

  const dialog = (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed">
      <Dialog.Overlay className="bg-black z-100 w-screen h-screen fixed top-0" />
      <div>
        <Dialog.Title>Cart</Dialog.Title>
        <p>Testing</p>
      </div>
      <button>{cartBtn}</button>
    </Dialog>
  );
  const popover = (
    <Popover className="relative z-10 rounded-lg">
      <Popover.Button>{cartBtn}</Popover.Button>
      <Popover.Panel className="absolute -left-48 bg-white shadow-lg">
        <div className="border rounded-lg w-64 h-96 flex flex-col justify-center items-center">
          <PrimaryBtn link="#" className="w-48 h-12 text-sm mb-4">
            Proceed to Checkout
          </PrimaryBtn>
          <PrimaryBtn link="/cart" className="w-48 h-12 text-sm ">
            Go to Cart
          </PrimaryBtn>
        </div>
      </Popover.Panel>
    </Popover>
  );

  return popover;
};

export default CartPopover;
