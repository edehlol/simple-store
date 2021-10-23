import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Product } from '../../types/Product';
import { addProduct } from '../../redux/cartSlice';
import { useAppDispatch } from '../../redux/hooks';
import QuantityInput from '../../components/QuantityInput';
import { connectToCollection } from '../../lib/mongodb';
import { ObjectId } from 'bson';
import { formatFetchedProducts } from '../../utils/formatFetchedProducts';
import { GetServerSideProps } from 'next';
import Img from '../../components/Img';
import AddedModal from '../../components/AddedModal';

const ProductPage = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct({ product, quantity }));
    setIsModalOpen(true);
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
    <>
      <AddedModal product={product} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Layout>
        <div className="xl:max-w-screen-lg mx-auto ">
          <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:justify-between mx-auto">
            <Img
              src={product.img}
              divClass={'w-full lg:w-96 h-96 md:h-80 lg:h-96 mx-auto md:mx-0 mb-8'}
            />
            <div className="">
              <h4 className="text-4xl mb-1 font-light">{product.name} —</h4>
              <h3 className="text-3xl mb-0 font-light">${product.price}</h3>
              <p className="mb-12">Tax included.</p>
              <p className="text-xl mb-12 ">
                A great about us block helps builds trust between you and your customers. The more
                content you provide about you and your business, the more confident people will be
                when purchasing from your store.
              </p>
              <p className="text-xl mb-10">Delivery</p>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="sm:w-64 sm:mr-4">
                  <QuantityInput
                    quantity={quantity}
                    subtractQuantity={subtractQuantity}
                    addQuantity={addQuantity}
                  />
                </div>

                <button
                  className={`transition duration-200 ease-in-out hover:bg-white border-gray-900 hover:border-2 hover:text-black h-16 mt-8  text-white py-4 mb-8 text-xl flex justify-center items-center w-full bg-gray-900 `}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <button className="mb-8">
            <Link href="/store">
              <a className=" text-lg">Back to store</a>
            </Link>
          </button>
        </div>
        <div className="hidden">I am a modal</div>
      </Layout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const collection = await connectToCollection();
  const data = await collection.findOne({ _id: new ObjectId(id as string) });
  console.log(data);
  return {
    props: {
      product: formatFetchedProducts(data),
    },
  };
};

export default ProductPage;
