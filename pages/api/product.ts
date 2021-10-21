import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../types/Product';
import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'bson';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query.id);
  const client = await clientPromise;
  const db = client.db('bookstore');

  const id = new ObjectId(req.query.id);
  const product = await db.collection('books').findOne({ _id: id });

  const price = JSON.parse(JSON.stringify(product)).price;
  const test = {
    id: product._id,
    name: product.name,
    price: price.$numberDecimal,
  };
  console.log(product);
  res.status(200).json(test);
}
