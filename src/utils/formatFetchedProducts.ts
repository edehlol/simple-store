import { DbProduct } from '../types/DbProduct';
import { Product } from '../types/Product';

export const formatFetchedProducts = (data: DbProduct[] | DbProduct) => {
  const products = JSON.parse(JSON.stringify(data));
  console.log(products);
  if (Array.isArray(data)) {
    return products.map((product: DbProduct) => {
      return {
        id: product._id.toString(),
        name: product.name,
        price: Number(product.price.$numberDecimal),
        img: product.img,
      };
    });
  } else {
    return {
      id: products._id.toString(),
      name: products.name,
      price: Number(products.price.$numberDecimal),
      img: products.img,
    } as Product;
  }
};
