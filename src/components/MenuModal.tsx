import ReactDOM from 'react-dom';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';

const MenuModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log('test');
    setIsOpen(true);
  };
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <button className="lg:hidden hover:cursor-pointer" onClick={handleOpen}>
        <AiOutlineMenu size="1.25rem" />
      </button>

      <Dialog
        className="fixed z-10 inset-0 overflow-y-auto"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Transition
          appear
          show={isOpen}
          enter="transition duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-150 origin-right"
          leaveFrom="opacity-500"
          leaveTo="opacity-0"
        >
          <div className="flex w-screen h-screen">
            <Dialog.Overlay className="bg-black opacity-30  fixed inset-0" />
            <Transition.Child
              enter="transform-gpu duration-300"
              enterFrom="-translate-x-96"
              enterTo="translate-x-0"
              leave="transform-gpu duration-300"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-96"
            >
              <div className="fixed left-0 top-0 bottom-0 h-screen w-64 bg-white shadow-2xl rounded-r-lg">
                <div className="border-b px-8 py-4 h-16 flex items-center">
                  <button onClick={handleClose} className="flex items-center">
                    <AiOutlineClose size="1.25rem" /> <span className="ml-1">Close</span>
                  </button>
                </div>
                <div className="flex flex-col gap-8 text-lg px-8 pt-8 ml-1">
                  <div onClick={handleClose}>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </div>
                  <div onClick={handleClose}>
                    <Link href="/store">
                      <a onClick={handleClose}>Store</a>
                    </Link>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Transition>
      </Dialog>
    </>
  );
};
export default MenuModal;
