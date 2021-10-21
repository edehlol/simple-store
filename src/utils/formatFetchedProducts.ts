import { DbProduct } from '../types/DbProduct';

export const formatFetchedProducts = (data: DbProduct[] | DbProduct) => {
  const products = JSON.parse(JSON.stringify(data));
  console.log(products);
  if (Array.isArray(data)) {
    return products.map((product: DbProduct) => {
      return {
        id: product._id.toString(),
        name: product.name,
        price: Number(product.price.$numberDecimal),
      };
    });
  } else {
    return {
      id: products._id.toString(),
      name: products.name,
      price: Number(products.price.$numberDecimal),
    };
  }
};
