import Link from 'next/link';
import { selectProductCount } from '../redux/cartSlice';
import { useAppSelector } from '../redux/hooks';
import MenuModal from './MenuModal';
import navRoutes from '../nav-routes';
import CartPopover from './CartPopover';

const Navbar = () => {
  const cartProductsCount = useAppSelector(selectProductCount);

  const renderNavLinks = () => {
    let links = [];
    for (let [key, value] of Object.entries(navRoutes)) {
      links.push(
        <Link key={key} href={key}>
          <a className="mr-8">{value}</a>
        </Link>
      );
    }
    return links;
  };

  return (
    <>
      <div className="h-16 w-full flex items-center justify-between px-8 mb-16 max-w-screen-xl mx-auto">
        <MenuModal />

        <Link href="/">
          <a className="text-3xl font-light hidden lg:inline-block w-16">MyStore</a>
        </Link>

        <div className="justify-end text-xl hidden lg:block">{renderNavLinks()}</div>

        <CartPopover cartProductsCount={cartProductsCount} />
      </div>
    </>
  );
};

export default Navbar;
