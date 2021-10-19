import CartItem from '../components/CartItem';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useAppSelector } from '../redux/hooks';
import { selectCart, selectTotalPrice } from '../redux/cartSlice';

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
      <h1 className="text-2xl mb-8">Shopping Cart</h1>
      <div className="mb-8">{renderCartProducts()}</div>
      <div className="flex flex-col items-end">
        <h2 className="text-4xl text-right mb-4">${totalPrice}</h2>
        <button className=" py-3 px-5 text-lg bg-black text-white" onClick={handlePlaceOrder}>
          Check out
        </button>
      </div>
      <div>
        <Link href="store">Continue shopping</Link>
      </div>
    </Layout>
  );
};
export default Cart;
