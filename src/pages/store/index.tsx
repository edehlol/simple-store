import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout';
import ProductGrid from '../../components/ProductGrid';
import { connectToCollection } from '../../lib/mongodb';
import { DbProduct } from '../../types/DbProduct';
import { Product } from '../../types/Product';
import { formatFetchedProducts } from '../../utils/formatFetchedProducts';

const Store = ({ products }: { products: Product[] }) => {
  return (
    <Layout>
      <ProductGrid products={products} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const collection = await connectToCollection();
  const data: DbProduct[] = await collection.find().toArray();

  return {
    props: {
      products: formatFetchedProducts(data),
    },
  };
};

export default Store;
