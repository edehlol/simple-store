import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

const Product = () => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(!addedToCart);
  };
  return (
    <Layout>
      <div>thumbnail TODO</div>
      <h4>name</h4>
      <p>$80</p>
      <p>short description alam salam ik weet ja ja eta.</p>
      <p>unique id: 1</p>
      <p>
        long description User can click on the Shopping Cart button to display the Shopping Cart
        page containing the product id, name, price, and quantity ordered input box for each product
        previously added to the Shopping Cart.
      </p>

      <button onClick={handleAddToCart}>{addedToCart ? 'added' : 'add to cart'}</button>
      <Link href="/store">see more products</Link>
    </Layout>
  );
};

export default Product;
