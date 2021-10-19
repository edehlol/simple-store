import { NextApiRequest, NextApiResponse } from 'next';
import { data } from '../../mockdb';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // const products
  res.status(200).json(data);
}
