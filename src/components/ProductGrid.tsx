import { Product } from '../types/Product';
import Img from './Img';
import Link from 'next/link';

const GridItem = ({ product }: { product: Product }) => {
  return (
    <div className="w-full h-72 sm:h-96 ">
      <Link href={`/product/${product.id}`} passHref>
        <a>
          <Img src={product.img} divClass="w-full h-full" imgClass="object-cover" />
        </a>
      </Link>

      <div className="relative mx-2 mt-2">
        <h3 className="text-xl">{product.name}</h3>
        <h4 className="text-lg font-light">${product.price}</h4>
      </div>
    </div>
  );
};

const ProductGrid = ({ products }: { products: Product[] }) => {
  const renderList = () => {
    return products.map((product: Product) => <GridItem key={product.id} product={product} />);
  };
  return (
    <div className="grid grid-cols-2 w-full lg:grid-cols-3 place-items-center gap-y-32 gap-x-4 pb-24">
      {products ? renderList() : null}
    </div>
  );
};
export default ProductGrid;
