import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async function productIds(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('bookstore');
  const productIds = await db.collection('books').find({}).project({ _id: 1 }).toArray();

  res.json(productIds.map(({ _id }: any) => _id));
}
