import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../types/Product';
import { data } from '../../mockdb';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //   PLACEHOLDER implement api
  const product = data.products.find((product: Product) => product.id === req.query.id);
  console.log(product);
  const gg = JSON.stringify(product);
  res.status(200).json(gg);
}
