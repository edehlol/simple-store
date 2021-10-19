import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Product } from '../../types/Product';
import { addProduct, removeProduct, selectCartIds } from '../../redux/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const ProductPage = ({ product }: { product: Product }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const cartIds = useAppSelector(selectCartIds);
  const isAdded = cartIds.includes(product.id);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    setAddedToCart(!addedToCart);
    isAdded ? dispatch(removeProduct(product.id)) : dispatch(addProduct(product));
  };
  return (
    <Layout>
      <div className="xl:max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between  mx-auto">
          <div className="bg-gray-100 w-full sm:w-96 md:w-80 lg:w-96 h-96 md:h-80 lg:h-96 mx-auto md:mx-0 mb-8"></div>
          <div className="md:w-96 lg:w-96 md:pl-8">
            <h4 className="text-2xl font-semibold mb-8">{product.name}</h4>
            <h3 className="text-2xl mb-8">${product.price}</h3>
            <input type="number" className="border py-4 w-32 mb-8 px-4" />
            <button
              className={`w-full  text-white py-4 mb-8 ${
                isAdded ? 'bg-green-600' : 'bg-gray-900'
              } `}
              onClick={handleAddToCart}
            >
              {isAdded ? 'added' : 'add to cart'}
            </button>
          </div>
        </div>

        <h2 className="text-lg mb-4">Description</h2>

        <p className="text-sm mb-16 text-gray-500">
          long description User can click on the Shopping Cart button to display the Shopping Cart
          page containing the product id, name, price, and quantity ordered input box for each
          product previously added to the Shopping Cart.
        </p>
        <button className="mb-8">
          <Link href="/store">
            <a className=" text-lg">Back to store</a>
          </Link>
        </button>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
    ],
    fallback: false,
  };
}
export async function getStaticProps({ params }: { params: { id: string | number } }) {
  const product = await fetch(`http://localhost:3000/api/product?id=${params.id}`).then((res) =>
    res.json()
  );
  console.log('TESTING: ' + product);
  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
