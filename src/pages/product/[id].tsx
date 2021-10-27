import React, { useState } from 'react';
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
import AddToCartModal from '../../components/AddToCartModal';
import { ContinueShoppingBtn } from '../../components/ContinueShoppingBtn';

const ProductPage = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addProduct({ product, quantity }));
    const timeout = setTimeout(() => {
      setQuantity(1);
    }, 1000);
    return () => clearTimeout(timeout);
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
      <Layout>
        <div className="xl:max-w-screen-lg mx-auto ">
          <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:justify-between mx-auto">
            <Img
              src={product.img}
              divClass={'w-full lg:w-96 h-96 md:h-80 lg:h-96 mx-auto md:mx-0 mb-8'}
            />
            <div className="">
              <h4 className="text-4xl mb-1 font-light">{product.name}</h4>
              <h3 className="text-2xl mb-0 font-light">${product.price}</h3>
              <p className="mb-12 text-sm">Tax included.</p>
              <p className="text-xl mb-12 ">
                A great about us block helps builds trust between you and your customers. The more
                content you provide about you and your business, the more confident people will be
                when purchasing from your store.
              </p>
              <p className="text-xl mb-10"></p>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="sm:w-64 sm:mr-4">
                  <QuantityInput
                    quantity={quantity}
                    subtractQuantity={subtractQuantity}
                    addQuantity={addQuantity}
                  />
                </div>
                <div onClick={handleAddToCart}>
                  <AddToCartModal product={product} />
                </div>
              </div>
            </div>
          </div>
          <div className="my-8">
            <ContinueShoppingBtn />
          </div>
        </div>
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
