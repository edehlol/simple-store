import CartProduct from '../components/CartProduct';
import Layout from '../components/Layout';
import Link from 'next/link';

const Cart = () => {
  const handlePlaceOrder = () => {
    alert('Order Placed: confirmation number #421410');
  };
  return (
    <Layout>
      cart
      <div>
        <CartProduct />
        <CartProduct />
      </div>
      <div>
        <h2>Total: $299</h2>
        <button onClick={handlePlaceOrder}>place order</button>
        <button>cancel order</button>
        <Link href="store">see more products</Link>
      </div>
    </Layout>
  );
};
export default Cart;
