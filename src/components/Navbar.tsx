import { useState } from 'react';
import Link from 'next/link';
import { selectProductCount } from '../redux/cartSlice';
import { BsBag } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { useAppSelector } from '../redux/hooks';
import MenuModal from './MenuModal';
import navRoutes from '../nav-routes';

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const cartProductsCount = useAppSelector(selectProductCount);

  const renderNavLinks = () => {
    let links = [];
    for (let [key, value] of Object.entries(navRoutes)) {
      links.push(
        <Link href={key}>
          <a className="mr-8">{value}</a>
        </Link>
      );
    }
    return links;
  };

  return (
    <>
      <div className="lg:hidden">
        <MenuModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>

      <div className="h-16 w-full flex items-center justify-between px-8 mb-16">
        <div onClick={() => setModalOpen(true)} className="lg:hidden hover:cursor-pointer">
          <AiOutlineMenu size="1.25rem" />
        </div>

        <Link href="/">
          <a className="text-3xl font-light hidden lg:inline-block w-16">MyStore</a>
        </Link>

        <div className="flex justify-end text-xl hidden lg:block">{renderNavLinks()}</div>

        <Link href="/cart">
          <a className="flex justify-end items-center w-16">
            <span className="flex justify-end w-full mr-1">
              <BsBag size="1.5rem" />
            </span>
            {cartProductsCount > 0 && (
              <span className="absolute top-4 right-6 ml-2 rounded-full bg-red-500 text-white w-5 h-5 text-xs flex items-center justify-center">
                {cartProductsCount}
              </span>
            )}
          </a>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
