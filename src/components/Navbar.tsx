import Link from 'next/link';
import { selectProductCount } from '../redux/cartSlice';
import { BsBag } from 'react-icons/bs';
import { useAppSelector } from '../redux/hooks';

const Navbar = () => {
  const cartProductsCount = useAppSelector(selectProductCount);
  return (
    <div className="h-16 w-full bg-gray-100 flex items-center justify-between px-8 mb-8">
      <Link href="/">
        <a className="text-xl font-semibold">MyStore</a>
      </Link>
      <div className="flex items-center">
        <Link href="/store">
          <a className="mr-8">SHOP</a>
        </Link>
        <Link href="/cart">
          <a className="flex w-16">
            <BsBag size="1.5rem" />
            {cartProductsCount > 0 && (
              <span className="relative -top-2 right-4 ml-2 rounded-full bg-red-500 text-white w-5 h-5 text-xs flex items-center justify-center">
                {cartProductsCount}
              </span>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
