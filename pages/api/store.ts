import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = await client.db('bookstore');
  const items = await db.collection('books').find().toArray();
  const pain = items.map((item) => {
    const price = JSON.parse(JSON.stringify(item.price));
    return {
      id: item._id,
      name: item.name,
      price: price.$numberDecimal,
    };
  });
  res.json(pain);
}
