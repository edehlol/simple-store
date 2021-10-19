import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/Product';

export const getServerSideProps = async () => {
  const products = await fetch('http://localhost:3000/api/store').then((res) => res.json());
  return {
    props: products,
  };
};

const Store = ({ products }: { products: Product[] }) => {
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

export default Store;
