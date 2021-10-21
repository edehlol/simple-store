import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
}

const ProductCard = ({ id, name, price }: ProductCardProps) => {
  return (
    <Link href={`/product/${id}`} passHref>
      <div className="mb-8 flex flex-col justify-center items-center hover:cursor-pointer">
        <div className="bg-gray-100 h-80 xl:h-64 w-80 xl:w-64 mb-8"></div>
        <h4 className="font-semibold mb-2">{name}</h4>
        <p className="text-sm text-gray-500">${price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
