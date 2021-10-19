import Link from 'next/link';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { selectCartProductsCount } from '../redux/cartSlice';

import { Cart } from '../types/Cart';

const Navbar = () => {
  const cartProductsCount = useSelector(selectCartProductsCount);
  return (
    <div className="h-16 w-full bg-gray-100 flex items-center justify-between px-8 mb-8">
      <Link href="/store">MyStore</Link>
      <div className="flex items-center">
        <Link href="/cart">Shopping Cart</Link>
        <span className="ml-2">{cartProductsCount}</span>
      </div>
    </div>
  );
};
export default Navbar;
