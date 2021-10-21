import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import clientPromise, { connectToCollection } from '../lib/mongodb';
import { DbProduct } from '../types/DbProduct';
import { Product } from '../types/Product';
import { formatFetchedProducts } from '../utils/formatFetchedProducts';

const Store = ({ products }: { products: Product[] }) => {
  console.log(products);
  const renderProducts = () => {
    return products.map((product) => (
      <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} />
    ));
  };
  return (
    <Layout>
      <div
        className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {renderProducts()}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const collection = await connectToCollection();
  const data: DbProduct[] = await collection.find().toArray();

  return {
    props: {
      products: formatFetchedProducts(data),
    },
  };
};

export default Store;
