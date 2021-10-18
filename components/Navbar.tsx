import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="h-16 w-full bg-gray-100 flex items-center justify-between px-8 mb-8">
      <Link href="/store">MyStore</Link>
      <Link href="/cart">Shopping Cart</Link>
    </div>
  );
};
export default Navbar;
