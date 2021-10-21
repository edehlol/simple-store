import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Product } from '../../types/Product';
import { addProduct, selectCartIds } from '../../redux/cartSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import QuantityInput from '../../components/QuantityInput';
import clientPromise, { connectToCollection } from '../../lib/mongodb';
import { ObjectId } from 'bson';
import { formatFetchedProducts } from '../../utils/formatFetchedProducts';
import { GetServerSideProps } from 'next';

const ProductPage = ({ product }: { product: Product }) => {
  const isAdded = useAppSelector(selectCartIds).includes(product.id);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    console.log(quantity);
    dispatch(addProduct({ product, quantity }));
  };

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };
  const subtractQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Layout>
      <div className="xl:max-w-screen-lg mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between  mx-auto">
          <div className="bg-gray-100 w-full sm:w-96 md:w-80 lg:w-96 h-96 md:h-80 lg:h-96 mx-auto md:mx-0 mb-8"></div>
          <div className="md:w-96 lg:w-96 md:pl-8">
            <h4 className="text-2xl font-semibold mb-8">{product.name}</h4>
            <h3 className="text-2xl mb-8">${product.price}</h3>
            <QuantityInput
              quantity={quantity}
              subtractQuantity={subtractQuantity}
              addQuantity={addQuantity}
            />
            <button
              className={`mt-8 w-full  text-white py-4 mb-8 ${
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const collection = await connectToCollection();
  const data = await collection.findOne({ _id: new ObjectId(Number(id)) });

  return {
    props: {
      product: formatFetchedProducts(data),
    },
  };
};

export default ProductPage;
