import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/Product';

export const getServerSideProps = async () => {
  const products = {
    products: [
      {
        id: '1',
        name: 'Product 1',
        price: 10,
      },
      {
        id: '2',
        name: 'Product 2',
        price: 20,
      },
      {
        id: '3',
        name: 'Product 3',
        price: 30,
      },
    ],
  };

  return {
    props: products,
  };
};

const Store = ({ products }: { products: Product[] }) => {
  const renderProducts = () => {
    return products.map((product) => (
      <ProductCard key={product.id} name={product.name} price={product.price} />
    ));
  };
  return (
    <Layout>
      <div
        className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch"
      >
        {renderProducts()}
      </div>
    </Layout>
  );
};

export default Store;
