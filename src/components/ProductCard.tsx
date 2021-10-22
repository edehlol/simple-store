import Link from 'next/link';
import React from 'react';
import { Product } from '../types/Product';
import Img from './Img';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/product/${product.id}`} passHref>
      <div className="mb-8 flex flex-col justify-center items-center hover:cursor-pointer">
        <Img src={product.img} divClass="h-80 xl:h-64 w-80 xl:w-64 mb-8" />
        <h4 className="font-semibold mb-2">{product.name}</h4>
        <p className="text-sm text-gray-500">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
