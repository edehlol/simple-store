import CartItem from '../components/CartItem';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useAppSelector } from '../redux/hooks';
import { selectCart, selectTotalPrice } from '../redux/cartSlice';
import { BsBag } from 'react-icons/bs';

const Cart = () => {
  const cart = useAppSelector(selectCart);
  const totalPrice = useAppSelector(selectTotalPrice);

  const handlePlaceOrder = () => {
    alert('Order Placed: confirmation number #421410');
  };

  const renderCartProducts = () => {
    return cart.map((product) => <CartItem key={product.id} product={product} />);
  };
  return (
    <Layout>
      {cart.length > 0 && (
        <div className="mt-16">
          <h1 className="text-4xl mb-8 text-center">Shopping Cart</h1>
          <div className="mb-8">{renderCartProducts()}</div>
          <div className="flex flex-col items-end">
            <h2 className="text-4xl text-right mb-4">${totalPrice}</h2>
            <button className=" py-3 px-5 text-lg bg-black text-white" onClick={handlePlaceOrder}>
              Check out
            </button>
          </div>
        </div>
      )}
      {cart.length === 0 && (
        <div className="flex flex-col items-center mt-24 md:mt-28 lg:mt-32">
          <span className="text-gray-200 mb-8">
            <BsBag size="8rem" />
          </span>
          <h1 className="text-4xl mb-4">SHOPPING CART IS EMPTY</h1>
          <p className="text-gray-500 mb-8">You have no items in your shopping cart</p>
          <Link href="store">
            <a className="bg-blue-500 py-3 px-5 rounded text-white text-lg">Continue shopping</a>
          </Link>
        </div>
      )}
    </Layout>
  );
};
export default Cart;
