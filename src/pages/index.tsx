import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Img from '../components/Img';
import Layout from '../components/Layout';
import PrimaryBtn from '../components/PrimaryBtn';
import ProductGrid from '../components/ProductGrid';
import { connectToCollection } from '../lib/mongodb';
import { Product } from '../types/Product';
import { formatFetchedProducts } from '../utils/formatFetchedProducts';

const Home = ({ products }: { products: Product[] }) => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="  lg:h-96 flex justify-center items-center fullscreen-container mb-12">
        <div className="text-center">
          <h1 className="text-5xl lg:text-8xl font-extralight mb-4">store.my</h1>
          <h2 className="text-lg lg:text-xl ">A happy flower keeps on blooming 🌸</h2>
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <ProductGrid products={products} />
      </div>
      <div className="w-full mb-16 flex flex-col md:flex-row justify-between rounded-lg shadow-lg bg-gray-900">
        <div className="flex flex-col justify-between p-16 order-2 md:order-1">
          <h4 className="text-4xl font-semibold mb-16 text-white">
            Shop our new <br />
            Collection now.
          </h4>
          <PrimaryBtn link="/store" className="w-48 font-semibold border-none" inverted>
            View products
          </PrimaryBtn>
        </div>
        <Img
          src={products[0].img}
          divClass="w-full md:w-1/2 h-72 md:h-auto order-1 md:order-2"
          imgClass="rounded-t-lg md:rounded-r-lg"
        />
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const collection = await connectToCollection();
  const products = await collection.find({}).limit(6).toArray();

  return {
    props: {
      products: formatFetchedProducts(products),
    },
  };
};

export default Home;
