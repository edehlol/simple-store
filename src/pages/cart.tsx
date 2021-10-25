import CartItem from '../components/CartItem';
import Layout from '../components/Layout';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { clearCart, selectCart, selectTotalPrice } from '../redux/cartSlice';
import { BsBag } from 'react-icons/bs';
import { roundPrice } from '../utils/roundPrice';
import { AiOutlineArrowLeft, AiOutlineDelete } from 'react-icons/ai';
import PrimaryBtn from '../components/PrimaryBtn';

const Cart = () => {
  const dispatch = useAppDispatch();
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
          <h1 className="text-4xl pb-8 text-center font-light border-b">Shopping Cart</h1>
          <div className="mb-8">{renderCartProducts()}</div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-24">
            <Link href="/store">
              <a className="flex items-center mb-4 md:mb-0">
                <span className="mr-2">
                  <AiOutlineArrowLeft />
                </span>
                Continue Shopping
              </a>
            </Link>
            <button onClick={() => dispatch(clearCart())}>
              <a className="flex items-center">
                Clear Shopping Cart
                <span className="ml-2">
                  <AiOutlineDelete />
                </span>
              </a>
            </button>
          </div>
          <div className="flex flex-col items-center mb-24 border p-16">
            <h2 className="text-4xl text-right mb-4">${totalPrice}</h2>
            <PrimaryBtn onClick={handlePlaceOrder}>Proceed to Checkout</PrimaryBtn>
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
